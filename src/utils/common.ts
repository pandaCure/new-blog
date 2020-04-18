import { isWebp } from '@constants/index'
export const isSupportWebp = () => {
  if (window.localStorage.getItem(isWebp)) return true
  try {
    const result =
      document
        .createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0
    window.localStorage.setItem(isWebp, String(result))
    return result
  } catch (error) {
    // TODO: 错误上报
    return false
  }
}
