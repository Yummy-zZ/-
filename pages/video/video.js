import request from '../../utils/network'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
		navId: ''
  },


	changeNav(event) {
    let navId = event.currentTarget.id
    console.log(event)
		this.setData({
			navId: navId >>> 0
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
		const navListData = await request('/video/group/list', {})
		this.setData({
			navList: navListData.data.slice(0,14),
			navId: navListData.data[0].id
		})
		
		let navId = this.data.navId
		const videoListData = await request('/video/group', {id: navId})
		console.log(videoListData)
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