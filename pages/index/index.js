Page({
  onLoad() {
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '昆明市'
      },
      success: res => {
        console.log(res)
      }
    })
  }
})