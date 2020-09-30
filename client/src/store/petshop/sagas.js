/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
import { takeLatest, put, call } from 'redux-saga/effects';
import { Types } from './actions';
import { customers, transactions } from '../../pages/Helpers/mock-data';

async function apiGetClient(values) {
  if (values.filterParams) {
    return customers.filter((e) => e.name.toUpperCase().indexOf(values.filterParams.filterByText.toUpperCase()) !== -1);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customers);
    }, 1000);
  });
}

function* loadClients(values) {
  try {
    const response = yield call(apiGetClient, values);
    yield put({
      type: Types.LOAD_CLIENT_COMPLETE,
      payload: {
        data: response,
        loading: false,
      },
    });
  } catch (err) {
    yield put({ type: Types.LOAD_CLIENT_ERROR });
  }
}
// Simulating calculation at api
async function apiGetTotal() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
}
function rangeDelimitation(data, values) {
  console.log('filtro', values.typeRange);
  return data;
}

function calculateValues(data) {
  const totalData = {
    general: 0,
    expense: 0,
    revenue: 0,
    services: {
      shower: 0,
      appointment: 0,
      medication: 0,
    },
  };
  data.map((d) => {
    if (d.type === 'Despesas') {
      totalData.expense += d.amount;
      return;
    }
    if (d.type === 'Receitas') {
      switch (d.product_id) {
        case 26:
          totalData.services.shower += d.amount;
          break;
        case 27:
          totalData.services.appointment += d.amount;
          break;
        case 28:
          totalData.services.medication += d.amount;
          break;
        default:
          break;
      }
      totalData.revenue += d.amount;
    }
  });
  totalData.general = totalData.revenue - totalData.expense;
  return { totalData };
}
function* loadTotals(values) {
  try {
    const response = yield call(apiGetTotal);
    const clientsFiltered = yield call(rangeDelimitation, response, values);
    const { totalData } = yield call(calculateValues, clientsFiltered);

    yield put({
      type: Types.LOAD_TOTAL_COMPLETE,
      payload: {
        totalData,
        loading: false,
      },
    });
  } catch (err) {
    yield put({ type: Types.LOAD_TOTAL_ERROR });
  }
}

export function* petshopSagas() {
  yield takeLatest(Types.LOAD_CLIENT, loadClients);
  yield takeLatest(Types.LOAD_TOTAL, loadTotals);
}
