import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterConfig from '@components/RouterConfig'
import routes from '@router/index'
import Header from '@components/Header'
import HandleErrorBoundary from '@components/HandleErrorBoundary'
import css from './style.module.scss'
// TODO:不太清楚为什么会渲染两次
const App = () => {
  return (
    <HandleErrorBoundary>
      <Router>
        <section className={css.app_container}>
          <Header />
          <RouterConfig routes={routes} />
        </section>
      </Router>
    </HandleErrorBoundary>
  )
}
export default App
