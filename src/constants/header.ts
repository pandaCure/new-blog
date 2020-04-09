import { svgSprite } from './asserts'
import { routePath } from './router'
import { IHeaderList } from 'types/constants'
export const headerList: IHeaderList = {
  home: {
    url: routePath.home,
    icon: svgSprite.home
  },
  blog: {
    url: routePath.blog,
    icon: svgSprite.blog
  },
  archive: {
    url: routePath.archive,
    icon: svgSprite.archive
  },
  music: {
    url: routePath.music,
    icon: svgSprite.music
  },
  apps: {
    url: routePath.apps,
    icon: svgSprite.apps
  },
  CV: {
    url: routePath.cv,
    icon: svgSprite.cv
  }
}
