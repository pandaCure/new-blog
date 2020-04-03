import { ComputerState, ComputerAction, ADD, SUB } from '../../types/add'
import produce, {Draft} from 'immer'
const initState: ComputerState = {
  computerNum: 0
}
const addReducer = produce(
  (state: Draft<ComputerState>, action: ComputerAction) => {
    console.log(`************&^%$#$%^&*()`, state)
    switch (action.type) {
      case ADD:
        state.computerNum += action.payload.num
        break
      case SUB:
        state.computerNum -= action.payload.num
        break
    }
  },
  initState
)
export default addReducer
