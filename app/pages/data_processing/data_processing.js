// pages/data_processing/data_processing.js
var util = require('../../util/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starnumber:null,
    endnumber:null,
    number:null,
  },
  goto: function () {
    wx.navigateTo({
      url: '../data_feature/data_feature',
    })
  },
  group:function(e){
    this.setData({  
      number: e.detail.value
    })
    app.globalData.number = this.data.number;
    app.globalData.starnumber = app.globalData.groupdata[parseInt(app.globalData.number)-1][0]; 
    app.globalData.endnumber = app.globalData.groupdata[parseInt(app.globalData.number)-1][1];
    console.log("number:" + app.globalData.number);
    console.log("starnumber:"+app.globalData.starnumber);
    console.log("endnumber:"+app.globalData.endnumber);
  },
  starnumber: function (e) {
    this.setData({
      starnumber:e.detail.value
    })
    app.globalData.starnumber = this.data.starnumber;
  },
  endnumber: function (e) {
    this.setData({
      endnumber: e.detail.value
    })
    app.globalData.endnumber = this.data.endnumber;
  },
  submit(e){
    console.log("起始测试集:" + app.globalData.starnumber);
    console.log("终止测试集:" + app.globalData.endnumber);
    for (let i = 0; (i + parseInt(app.globalData.starnumber))<=app.globalData.endnumber;i++){
      //console.log((i + app.globalData.starnumber));
      //console.log(app.globalData.endnumber);
      util.reqFunc('https://api.phmlearn.com/component/upload/2/84',
      {
        "access_token": app.globalData.access_token,
        "file_name": 'TEST' + (parseInt(app.globalData.starnumber)+i)+'.csv',
      }, function (res) {
        app.globalData.output_fileName[i]= res.data.data.file_name;
        console.log('TEST' + (i + parseInt(app.globalData.starnumber)) + '.csv' + "输出文件" + app.globalData.output_fileName[i]);
        })
    } 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth,
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