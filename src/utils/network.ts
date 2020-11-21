/* eslint-disable max-params */
import axios, { AxiosRequestConfig } from 'axios'
const { REACT_APP_BASE_URL } = process.env
const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 1000
})
instance.interceptors.request.use(
  (config) => {
    // TODO: 配置Authorization
    return config
  },
  (error) => Promise.reject(error)
)
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => Promise.reject(error)
)
const CancelToken = axios.CancelToken
const GET = (
  url: string,
  params: object,
  config: AxiosRequestConfig,
  callback: (err: any) => never
) => {
  return new Promise((resolve, reject) => {
    instance
      .request({
        ...config,
        url,
        method: 'get',
        params,
        cancelToken: new CancelToken((c) => callback(c))
      })
      .then(resolve)
      .catch(reject)
  })
}
const POST = (
  url: string,
  data: object,
  config: AxiosRequestConfig,
  callback: (err: any) => never
) => {
  return new Promise((resolve, reject) => {
    instance
      .request({
        ...config,
        url,
        method: 'post',
        data,
        cancelToken: new CancelToken((c) => callback(c))
      })
      .then(resolve)
      .catch(reject)
  })
}
const PUT = (
  url: string,
  data: object,
  config: AxiosRequestConfig,
  callback: (err: any) => never
) => {
  return new Promise((resolve, reject) => {
    instance
      .request({
        ...config,
        url,
        method: 'put',
        data,
        cancelToken: new CancelToken((c) => callback(c))
      })
      .then(resolve)
      .catch(reject)
  })
}
const DETELE = (
  url: string,
  data: object,
  config: AxiosRequestConfig,
  callback: (err: any) => never
) => {
  return new Promise((resolve, reject) => {
    instance
      .request({
        ...config,
        url,
        method: 'delete',
        data,
        cancelToken: new CancelToken((c) => callback(c))
      })
      .then(resolve)
      .catch(reject)
  })
}
export { GET, POST, PUT, DETELE }
