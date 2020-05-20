// pages/data_feature/data_feature.js
var util = require('../../util/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 0,
    windowWidth: 0,
  },
  goto: function () {
    wx.navigateTo({
      url: '../result/result',
    })
  },
  getDatas:function(zhoucheng_id,attr,callback){
    var that=this;
    wx.showLoading({
      title: '正在处理中',
    })
    wx.request({
      url: 'https://api.phmlearn.com/component/data/zhoucheng',
      method:'POST',
      header:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:{
        access_token: "54d13d093f54406b9bb79908da2cff7e.9a7617751e55e94353d44aca6a65506b",
        divice_id:zhoucheng_id,
        atrribute:attr,
      },
      complete(res) {
        wx.hideLoading();
        if (res.data.status == 0) {
          wx.showToast({
            title: '处理成功'
          })
        } else {
          wx.showToast({
            title: '处理失败',
            icon: 'none',
          })
        };
      },
      success:function(res){
        callback(res)
      }
    })
  },
  setDatas:function(e){
    var divice_id = app.globalData.divice_id[parseInt(app.globalData.number) - 1]
    this.getDatas(divice_id,"DE_time",res=>{
      this.setData({
        key_DE_time:'DE_time',
        max_DE_time:Math.max(...res.data.data.data).toFixed(5),
        min_DE_time:Math.min(...res.data.data.data).toFixed(5),
        divice_id:divice_id,
      })
    })
    this.getDatas(divice_id, "FE_time", res => {
      this.setData({
        key_FE_time: 'FE_time',
        max_FE_time: Math.max(...res.data.data.data).toFixed(5),
        min_FE_time: Math.min(...res.data.data.data).toFixed(5),
      })
    })
    this.getDatas(divice_id, "BA_time", res => {
      this.setData({
        key_BA_time: 'BA_time',
        max_BA_time: Math.max(...res.data.data.data).toFixed(5),
        min_BA_time: Math.min(...res.data.data.data).toFixed(5),
      })
    })
    this.getDatas(divice_id, "RPM", res => {
      this.setData({
        key_RPM: 'RPM',
        RPM: res.data.data.data,
      })
    })
  },
  setArrData:function(arr){
    for(let i=0;i<arr.length;i++){
      arr[i]=arr[i].toFixed(5)
    }
    return arr
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
  submit(e) {
    console.log("起始测试集:" + app.globalData.starnumber);
    console.log("终止测试集:" + app.globalData.endnumber);
    for (let i = 0; (i + parseInt(app.globalData.starnumber))<= app.globalData.endnumber; i++) {
     util.reqFunc("https://api.phmlearn.com/component/upload/ML/model/60/125",
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.output_fileName[i],
      }, function(res){
        app.globalData.resultArray[i] = res.data.data.predict[0];
        //console.log(app.globalData.resultArray[i]);
        console.log('TEST' + (i + parseInt(app.globalData.starnumber))+'.csv'+"的结果为"+app.globalData.resultArray[i]);
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