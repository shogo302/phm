App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      input_fileName:'',
      access_token: "54d13d093f54406b9bb79908da2cff7e.9a7617751e55e94353d44aca6a65506b",
      output_fileName:[],
      resultArray:[],
      starnumber:'',
      endnumber:'',
      number:'',
      groupdata:[[1,10],[11,20],[21,30],[31,40],[41,50],[51,60],[61,70],[71,80],[81,90],[91,100],[101,110],[111,120],[121,130],
      [131,142]],//分组号
      divice_id:[100,108,121,133,147,160,172,188,200,212,225,237,249,261],//设备号
      count0:0, count1:0, count2:0, count3:0,
    }}
})
