import { all, fork } from 'redux-saga/effects';
import { petshopSagas } from './petshop/sagas';

export default function* () {
  yield all([
    fork(petshopSagas),
  ]);
}
