export interface IRoutes {
  path: string
  component:
    | ((props) => React.ReactElement)
    | React.LazyExoticComponent<(props) => JSX.Element>
  exact?: boolean
  routes?: IRoutes[]
}
export type IRoutesType = IRoutes[]
