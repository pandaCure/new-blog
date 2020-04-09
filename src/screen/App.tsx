import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterConfig from '@components/RouterConfig'
import routes from '@router/index'
import Header from '@components/Header'
// TODO:不太清楚为什么会渲染两次
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <RouterConfig routes={routes} />
      </Router>
    </div>
  )
}
export default App
