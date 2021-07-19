// pages/login/login.js
import request from '../../utils/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: ''
  },

  handleInput(event) {
    let type = event.currentTarget.id
    console.log(type ,event.detail.value)
    this.setData({
      [type]: event.detail.value
    })
  },

  async login() {
    let {phone, password} = this.data

    if(!phone) {
      wx.showToast({
        icon: 'error',
        title: '手机号不能为空'
      })
      return
    }

    let phoneReg = /^1[3-9]\d{9}$/
    if(!phoneReg.test(phone)) {
      wx.showToast({
        icon: 'error',
        title: '手机号格式错误'
      })
      return
    }

    if(!password) {
      wx.showToast({
        icon: 'error',
        title: '请输入密码'
      })
      return
    }

    const result = await request('/login/cellphone', {phone, password, isLogin: true})
    if(result.code === 200) {
      wx.showToast({
        icon: 'success',
        title: '登陆成功',
      })
			wx.setStorageSync('userInfo', JSON.stringify(result.profile))
			wx.reLaunch({
				url: '/pages/profile/profile'
			})
    } else if(result.code === 400) {
      wx.showToast({
        icon: 'error',
        title: '手机号格式错误'
      })
    } else if(result.code === 502) {
      wx.showToast({
        icon: 'error',
        title: '密码错误'
      })
    } else {
      wx.showToast({
        icon: 'error',
        title: '登陆失败, 请重新登录'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})