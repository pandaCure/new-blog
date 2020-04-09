import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { IRoutesType } from 'types/routerConfigTypes'
interface IProps {
  routes: IRoutesType
}
const RouterConfig = (props: IProps) => {
  return (
    <Suspense fallback={() => console.log('loading')}>
      <Switch>
        {props.routes.map((route, i) => {
          const { routes } = route
          return (
            <Route
              path={route.path}
              key={i}
              exact={route.exact}
              render={(props) => <route.component {...props} routes={routes} />}
            />
          )
        })}
      </Switch>
    </Suspense>
  )
}
export default RouterConfig
