import React from 'react'
import { useDispatch, useSelector, shallowEqual, connect } from '../../node_modules/react-redux/es/index'
import { sendAddNumStartAction } from '../store/types/add'
import { RootState } from '../store/reducer'
interface Props {
  computerNum: number
}
// TODO:不太清楚为什么会渲染两次
const App = () => {
  console.log(`App`)
  const dispatch = useDispatch()
  const data = useSelector((state: RootState) => state.computer.computerNum, shallowEqual)
  console.log(data)
  return (
    <button onClick={() => {
      console.log(`&&&&&&&&&&&&&&&&&&&&&`)
      dispatch(sendAddNumStartAction({ num: 2 }))}
      }>
      点击增加2
    </button>
  )
}
// export default connect((state: RootState) => {
//   return { computerNum: state.computer.computerNum }
// })(App)
export default App
