// pages/result/result.js
var util = require('../../util/util.js');
var app =getApp()
Page({

  data: {
    resultArray: [],
    starnumber:null,
    endnumber: null,
  },
  list: function(e){
    wx.showToast({
      title: '正在生成故障报表',
      icon: "none",
      duration: 1000,
      mask: true
    })
    var count0 = 0; 
    var count1 = 0; 
    var count2 = 0; 
    var count3 = 0;
    for (let i = 0; i < (parseInt(app.globalData.endnumber) -parseInt(app.globalData.starnumber)+1);i++){
      if(app.globalData.resultArray[i]==0) count0++;
      else if (app.globalData.resultArray[i] == 1) count1++;
      else if (app.globalData.resultArray[i] == 2) count2++;
      else count3++;
    }
    app.globalData.count0 = count0;
    app.globalData.count1 = count1;
    app.globalData.count2 = count2;
    app.globalData.count3 = count3;
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  onLoad: function (options) {
    this.setData({
      resultArray: app.globalData.resultArray,
      starnumber:app.globalData.starnumber,
      endnumber:app.globalData.endnumber,
    })
  },
  returnTap() {
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