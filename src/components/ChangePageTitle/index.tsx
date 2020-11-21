import React from 'react'
import Helmet from 'react-helmet'
export interface IChangePageTitle {
  title?: string
}
const ChangePageTitle = (props: IChangePageTitle) => {
  const title = props.title
  return (
    <Helmet>
      <title> {title || 'ZhongYao Inc.'}</title>
    </Helmet>
  )
}
export default ChangePageTitle
