import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cs from 'classnames'
import _ from 'lodash'
import styles from './header.module.scss'
import { headerList } from '@constants/header'
import { routePath } from '@constants/router'
import { svgSprite } from '@constants/asserts'
import svgIcons from '@asserts/images/header/zhongyao-blog-svg-icons.svg'
const navKeys = Object.keys(headerList)
const Header = () => {
  const [userScroll, setUserScroll] = useState(false)
  useEffect(() => {
    const scrollFun = _.throttle(() => {
      const tops = document.documentElement.scrollTop || document.body.scrollTop
      setUserScroll(!!tops)
    }, 150)
    window.addEventListener('scroll', scrollFun)
    return () => window.removeEventListener('scroll', scrollFun)
  }, [])
  return (
    <header
      className={cs(
        styles.header,
        'no-user-select',
        userScroll ? '' : styles.clear_navbar_bg
      )}
    >
      <Link className={styles.logo} to={routePath.home}>
        ZhongYao Official Blog
      </Link>

      <nav>
        <ul className={styles.nav_link_block}>
          {navKeys.map((nav, key) => {
            return (
              <li key={key} className={styles.nav_link}>
                <Link
                  to={{
                    pathname: headerList[nav].icon,
                    search: `${
                      headerList[nav].url === routePath.blog ? '?page=1' : ''
                    }`
                  }}
                  className={styles.link}
                >
                  <svg className={cs(styles.icon, styles[`icon_${nav}`])}>
                    <use xlinkHref={`${svgIcons}${headerList[nav].icon}`} />
                  </svg>
                  <span className={styles.menu_name}>{nav}</span>
                </Link>
              </li>
            )
          })}
          <li className={styles.nav_link}>
            <svg className={cs(styles.icon, styles.icon_search)}>
              <use xlinkHref={`${svgIcons}${svgSprite.search2}`} />
            </svg>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
