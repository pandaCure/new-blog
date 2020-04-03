import { takeEvery, put } from 'redux-saga/effects'
import { SendAddNumActionType, sendAddNumAction, ADDSTART } from '../../types/add'
// 需要理解这个地方的类型约束 高级啊
function* handleAddOpt({ payload }: SendAddNumActionType) {
  console.log(`%%%%%%%%%%%%%%%%%`, payload)
  yield 1
  yield put(sendAddNumAction(payload))
}
export function* watchAddOpt() {
  yield takeEvery(ADDSTART, handleAddOpt)
}
