import { request } from './request'

// 登录
export const apiLogin = data => {
  return request({
    url: `/index/login`,
    method: 'GET',
    data
  })
}