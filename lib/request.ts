/*
 * @Author: wosqqa
 * @Date: 2022-05-18 23:06:12
 * @LastEditors: wosqqa nmdwosqqa@163.com
 * @LastEditTime: 2022-08-11 16:02:40
 * @Description: axios 封装
 */

import axios from 'axios'

import { useStore } from '@/store'

const store = useStore()

const request = (url: string) => {
  // axios 实例
  const service = axios.create({
    baseURL: url, // 基本路径
    timeout: 30000, // 超时时间
  })
  // 响应拦截
  service.interceptors.response.use(
    (res) => {
      // 响应成功
      store.network = true
      // 返回数据
      return res.data
    },
    (err) => {
      // 请求错误
      store.network = false
    }
  )
  return service
}

export default request
