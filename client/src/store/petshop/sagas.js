import { takeLatest, put, call } from 'redux-saga/effects';
// import capitalize from 'lodash.capitalize';
import { Types } from './actions';
// import { dateFormat, dateTimeFormat } from '../../helpers/date-utils';


// async function apiGet(values) {
//   const page = values.paginationParams.offset;

//   if (status === 'all') {
//     status = null;
//   }
//   return { api: 'api' };
// }

// function formatReportData(reportList) {
//   const formatedReportList = reportList.map((item) => {
//     const formated = item;
//     const {
//       startDate,
//       endDate,
//       requestDate,
//       userFirstName,
//       userLastName,
//     } = item;

//     const firstName = capitalize(userFirstName);
//     const lastName = capitalize(userLastName);

//     formated.reportDate = {
//       startDate: dateFormat(startDate),
//       endDate: dateFormat(endDate),
//     };

//     formated.creation = {
//       createdAt: dateTimeFormat(requestDate),
//       requestorFullName: `${`${firstName} ${lastName}`}`,
//     };

//     return formated;
//   });

//   return formatedReportList;
// }

// function* loadReport(values) {
//   try {
//     const {
//       data,
//       headers: { 'all-rows-total-count': count },
//     } = yield call(apiGet, values);
//     const reportList = yield formatReportData(data);
//     yield put({
//       type: Types.LOAD_COMPLETE,
//       payload: {
//         data: reportList,
//         loading: false,
//         totalReports: parseInt(count, 10),
//       },
//     });
//   } catch (err) {
//     yield put({ type: Types.LOAD_ERROR });
//   }
// }


export function* petshopSagas() {
  // yield takeLatest(Types.LOAD, loadReport);
}
