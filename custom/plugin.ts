interface pluginList {
  name: string
  size: number[]
  description: string
  debug?: boolean
}

/**
 * @description: 插件列表
 * @return {*}
 */
export const pluginList: pluginList[] = [
  { name: 'clock', size: [4, 2], description: '翻页时钟' },
  // debug 模式下 build 时不会被打包
  { name: 'huojian', size: [7.5, 9], description: '火箭', debug: true },
]
