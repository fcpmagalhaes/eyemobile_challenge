/* eslint-disable import/prefer-default-export */
import { takeLatest, put, call } from 'redux-saga/effects';
import { Types } from './actions';
import { customers } from '../../pages/Helpers/mock-data';

async function apiGet(values) {
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
    const response = yield call(apiGet, values);
    yield put({
      type: Types.LOAD_COMPLETE,
      payload: {
        data: response,
        loading: false,
      },
    });
  } catch (err) {
    yield put({ type: Types.LOAD_ERROR });
  }
}

export function* petshopSagas() {
  yield takeLatest(Types.LOAD, loadClients);
}
