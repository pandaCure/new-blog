import { all, fork } from 'redux-saga/effects'
import {watchAddOpt} from './add'
export default function* rootSaga() {
  console.log(`@@@@@@@@@@@@@@@@@@@@@@`)
  yield all([fork(watchAddOpt)])
}