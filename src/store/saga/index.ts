import { all, fork } from 'redux-saga/effects'
import {watchAddOpt} from './add'
export default function* rootSaga() {
  yield all([fork(watchAddOpt)])
}