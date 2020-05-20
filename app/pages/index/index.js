const app = getApp()
Page({
  data: {
   password:null,
   windowWidth:0
  },

  formName: function (e) {
    this.setData({
      password:e.detail.value
    })
  },

  onLoad: function () {
  },
  onLoad: function (options) {
    this.setData({
      windowWidth: wx.getSystemInfoSync().windowWidth,
    })
  },
  navToPre() {
    // console.log(this.data.password);
    if(this.data.password!="12345"){
      wx.showToast({
        title: '密码不正确，请重新输入',
        icon: "none",
        duration: 1000,
        mask: true
    })
    }else {
      wx.showToast({
        title: '密码正确，正在登陆',
        icon:"none",
        duration: 1000,
        mask: true
      })
      setTimeout(function () {
        wx.navigateTo({
         url: '/pages/data_processing/data_processing',
        // url:'/pages/result/result',
         })
        }, 2000)
      }
  }
})
