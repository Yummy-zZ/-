import request from "../../utils/network"
Page({
  data: {
    bannerList: [],
    recommendList: [],
    topList: []
  },
  onLoad: async function (options) {
    let bannersData = await request('/banner', {type: 2});
    this.setData({
      bannerList: bannersData.banners
    })

    let recommendData = await request('/personalized', {limit: 10});
    this.setData({
      recommendList: recommendData.result
    })

    let ids = 0
    let index = 0;
    let resultArr = [];
    while(index < 4){
      if(index===0) {ids = 19723756}
      if(index===1) {ids = 3779629}
      if(index===2) {ids = 3778678}
      if(index===3) {ids = 2250011882}
      let topListData = await request('/playlist/detail', {id: ids});
      let topListItem = {name: topListData.playlist.name, tracks: topListData.playlist.tracks.slice(0, 3)};
      resultArr.push(topListItem);
      index++
      // 边请求数据边展示
      this.setData({
        topList: resultArr
      })
    } 
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