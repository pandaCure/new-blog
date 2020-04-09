import { lazy } from 'react'
import Home from '@screen/Home/index.tsx'
import { IRoutesType } from 'types/routerConfigTypes'
const NotFount = lazy(() => import('@components/NotFound'))
const routerConfig: IRoutesType = [
  {
    path: '/',
    component: Home,
    exact: true,
    routes: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '*',
    component: NotFount
  }
]
export default routerConfig
