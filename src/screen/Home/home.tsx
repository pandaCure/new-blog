import React from 'react'
import ChangePageTitle from '@components/ChangePageTitle'
import css from './home.module.scss'
import svgIcons from '@assets/images/header/zhongyao-blog-svg-icons.svg'
import classNames from 'classnames'

export const socialMedia = {
  github: {
    url: 'https://github.com/pandaCure/',
    icon: '#github'
  },
  twitter: {
    url: 'https://twitter.com/YanceyOfficial/',
    icon: '#twitter'
  },
  instagram: {
    url: 'https://www.instagram.com/zhongyaoblog/',
    icon: '#instagram'
  },
  soundCloud: {
    url: 'https://soundcloud.com/yancey-leo/',
    icon: '#soundcloud'
  },
  telegram: {
    url: 'https://www.facebook.com/zzyamor',
    icon: '#telegram'
  },
  paypal: {
    url: 'https://www.paypal.me/yanceyleo/10usd',
    icon: '#paypal'
  },
  wechat: {
    url: '/',
    icon: '#wechat'
  },
  email: {
    url: 'mailto:zzyamor@gmail.com',
    icon: '#mail'
  }
}
const Home = () => {
  return (
    <main className={css.main_container}>
      <ChangePageTitle />
      <section className={css.main_container_section}>
        <div className={css.screen_img_block}>
          <figure className={css.screen_img} />
          <section className={css.slogan_block}>
            <section className={css.intro}>
              <h2 className={css.slogan} data-value='HI, ZHONGYAO!'>
                HI, ZHONGYAO!
              </h2>
              <p className={css.intro_text}>
                死は生の対極としてではなく、その一部として存在している。
              </p>
              <span className={css.intro_arrow} />
              <ul className={css.social_icon_block}>
                {Object.keys(socialMedia).map((socialMediaItemKey, index) => {
                  return (
                    <a
                      href={socialMedia[socialMediaItemKey].url}
                      target='_blank'
                      rel='noopener noreferrer'
                      key={socialMediaItemKey}
                    >
                      <svg
                        className={classNames(
                          `icon-${socialMedia[socialMediaItemKey]}`,
                          css.social_icon
                        )}
                      >
                        <use xlinkHref={`${svgIcons}${socialMedia[socialMediaItemKey].icon}`} />
                      </svg>
                    </a>
                  )
                })}
              </ul>
            </section>
          </section>
        </div>
        <section style={{ height: '200vh' }}>1</section>
      </section>
      Home
    </main>
  )
}
Home.displayName = 'Home'
export default Home
