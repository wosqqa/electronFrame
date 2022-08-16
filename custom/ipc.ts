/*
 * @Author: wosqqa
 * @Date: 2022-07-15 12:45:00
 * @LastEditors: wosqqa nmdwosqqa@163.com
 * @LastEditTime: 2022-08-13 19:21:30
 * @Description: icp 事件发送
 */
import { ipcRenderer } from 'electron'

// 发送事件
export const sendEvent = (event: string, ...options: any) => {
  ipcRenderer.send(event, ...options)
}

export const callEvent = (event: string, ...options: any): any => {
  return ipcRenderer.sendSync(event, ...options)
}

// 保存数据
export const setValue = (key: string, value: any): any => {
  sendEvent('set-value', key, JSON.stringify(value))
}

// 读取数据
export const getValue = (key: string, define: any): any => {
  return callEvent('get-value', key, define)
}

// 发送通知
export const sendNotice = (message: string) => {
  sendEvent('window-notice', message)
}

// 打开网址
export const openURL = (url: string) => {
  sendEvent('open-url', url)
}
