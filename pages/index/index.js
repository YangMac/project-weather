Page({
  onLoad() {
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '昆明市'
      },
      success: res => {
        console.log(res)
        let result = res.data.result
        let nowTemp = result.now.temp
        let nowWeather = result.now.weather
        console.log(nowTemp, nowWeather )
      }
    })
  }
})