// pages/list/list.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      count: (parseInt(app.globalData.count0) + parseInt(app.globalData.count1) + parseInt(app.globalData.count2) +parseInt(app.globalData.count3)),
      count1: parseInt(app.globalData.count1),
      count2: parseInt(app.globalData.count2),
      count3: parseInt(app.globalData.count3),
      proportion1: (parseInt(app.globalData.count1) / (parseInt(app.globalData.count0) + parseInt(app.globalData.count1) + parseInt(app.globalData.count2) + parseInt(app.globalData.count3))).toFixed(4),
      proportion2: (parseInt(app.globalData.count2) / (parseInt(app.globalData.count0) + parseInt(app.globalData.count1) + parseInt(app.globalData.count2) + parseInt(app.globalData.count3))).toFixed(4),
      proportion3: (parseInt(app.globalData.count3) / (parseInt(app.globalData.count0) + parseInt(app.globalData.count1) + parseInt(app.globalData.count2) + parseInt(app.globalData.count3))).toFixed(4)
    })
  },
  returnTap() {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  returnTap1() {
    wx.redirectTo({
      url: '/pages/data_processing/data_processing',
    })
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