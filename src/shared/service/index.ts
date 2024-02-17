/* eslint-disable @typescript-eslint/no-explicit-any */
import Request from './request'
import { AxiosResponse } from 'axios'

import type { RequestConfig } from './request/types'

export interface BaseResponse<T> {
  [x: string]: any
  statusCode: number
  desc: string
  result: T
}

// 重写返回类型
interface BaseRequestConfig<T, R> extends RequestConfig<BaseResponse<R>> {
  data?: T
}

const testBaseRequest = new Request({
  baseURL: '/api',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      if (result.data.code !== 200) {
        console.error('请求失败:', result.data)
      }

      return result
    }
  }
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
export const neteaseRequest = <D = any, T = any>(config: BaseRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return testBaseRequest.request<BaseResponse<T>>(config)
}
// 取消请求
export const cancelNeteaseRequest = (url: string | string[]) => {
  return testBaseRequest.cancelRequest(url)
}
// 取消全部请求
export const cancelNeteaseAllRequest = () => {
  return testBaseRequest.cancelAllRequest()
}
