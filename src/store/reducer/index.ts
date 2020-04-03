import {combineReducers} from 'redux'
import addReducer from './add'
const rootReducer = combineReducers({
  computer: addReducer
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer