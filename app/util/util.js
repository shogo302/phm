function reqFunc(url, data, callback) {
  wx.showLoading({
    title: '正在处理中',
  })
  wx.request({
    url: url,
    method: "POST",
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: data,
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
    success(res) {
      callback(res);
    }
  })
}
module.exports = {
  reqFunc: reqFunc
}
