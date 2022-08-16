/*
 * @Author: wosqqa
 * @Date: 2022-07-20 10:21:27
 * @LastEditors: wosqqa nmdwosqqa@163.com
 * @LastEditTime: 2022-07-22 00:55:08
 * @Description: camera 工具
 */

/**
 * @description: 拍照
 * @param {HTMLCanvasElement} canvas
 * @param {HTMLVideoElement} video
 * @param {HTMLAnchorElement} record
 * @return {*}
 */
export const takePhoto = (canvas: HTMLCanvasElement, video: HTMLVideoElement, record: HTMLAnchorElement): void => {
  // 设置画布信息
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight

  // 获取画布上下文
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 绘制画布
  ctx.drawImage(video, 0, 0)

  // 保存图片
  record.href = canvas.toDataURL('image/jpeg')
  // 设置下载文件名
  record.download = `monit-photo-${new Date().toLocaleString().replace(/[/: ]/gi, '-')}.jpeg`
  record.click()

  // 清空画布
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// 记录器
let recorder: MediaRecorder

/**
 * @description: 录像
 * @param {HTMLAnchorElement} record
 * @return {*}
 */
export const recordVideo = (record: HTMLAnchorElement, device: string): void => {
  // 获取相机
  navigator.mediaDevices
    .getUserMedia({
      video: {
        deviceId: device,
      },
      audio: true,
    })
    .then((stream) => {
      // 创建记录器
      recorder = new MediaRecorder(stream)
      // 停止回调
      recorder.ondataavailable = (event) => {
        record.href = URL.createObjectURL(event.data)
        record.download = `monit-video-${new Date().toLocaleString().replace(/[/: ]/gi, '-')}.webm`
        record.click()
      }
      // 销毁
      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop())
      }
      // 开始
      recorder.start()
    })
}

// 停止录像
export const stopVideo = () => {
  recorder.stop()
}
