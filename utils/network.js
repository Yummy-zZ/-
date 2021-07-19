import {
  baseURL,
  timeout
} from './config.js'

export default (url, data={}, method="GET") => {

  wx.showLoading({
    title: '数据加载中ing',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      timeout: timeout,
      data,
      method,
			header: {
				cookie: wx.getStorageSync('cookies')?wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U') !== -1) : ''
			},
      success: res => {
        if(data.isLogin) {
					wx.setStorage({
						key: 'cookies',
						data: res.cookies
					})
				}
        resolve(res.data)
      },
      fail: err => {
        console.log('请求失败: ' + err)
        reject(err)
     },
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}

