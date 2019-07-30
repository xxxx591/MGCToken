// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeName: '1',
    name: '',
    time: '',
    city: '',
    msg: "",
    day:'',
    obj:{}
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      name: wx.getStorageSync('name'),
      time: wx.getStorageSync('time'),
      city: wx.getStorageSync('city')
    })
    this.getDay()
    this.init()
  },
  initAgain(){
    this.init()
  },
  getDay(){
    var date1 = new Date();
    var date2 = new Date(this.data.time);
    var date = (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000);
    this.setData({
      day: parseInt(date)
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  init() {
    wx.request({
      url: 'https://api.tianapi.com/txapi/saylove/?key=f346e79d1626293d5056c1df555213d2',
      method: 'GET',
      success: res => {
        console.log('res', res)
        wx.request({
          url: `https://www.tianqiapi.com/api/?version=v6&city=${this.data.city}`,
          success: res1 => {
            console.log('res1', res1)
            let obj = {}
            obj.tips0 = `亲爱的${this.data.name}`
            obj.tips1 = `${res1.data.date}日 ${res1.data.update_time} ${res1.data.week}`
            obj.tips2 = `我们在一起的第${this.data.day}天`
            obj.tips3 = `元气满满的一天开始啦,要开心噢^_^`
            obj.tips4 = `今日天气`
            obj.tips5 = `${res1.data.air_tips}`
            obj.tips6 = `今天：${res1.data.wea}`
            obj.tips7 = `最高气温：${res1.data.tem2}° / ${res1.data.tem1}°`
            obj.tips8 = `${res1.data.win} ${res1.data.win_speed}`
            obj.tips9 = `空气质量：${res1.data.air_level}`
            obj.tips10 = `每日一句：`
            obj.tips11 = `${res.data.newslist[0].content}`
            obj.tips12 = `————————最爱你的我`
            let msg = ''
            msg = `亲爱的${this.data.name}
${res1.data.date}日 ${res1.data.update_time} ${res1.data.week}
我们在一起的第${this.data.day}天

元气满满的一天开始啦,要开心噢^_^

今日天气
${res1.data.air_tips}
今天：${res1.data.wea}
最高气温：${res1.data.tem2}° / ${res1.data.tem1}°
${res1.data.win} ${res1.data.win_speed}
空气质量：${res1.data.air_level}

每日一句：
${res.data.newslist[0].content}

————————最爱你的我`
            this.setData({
              obj: obj,
              msg: msg
            })
          }
        })
      }
    })

  },
  getVerificationCode() {
    wx.setClipboardData({
      data: this.data.msg,
      success(res) {
        wx.showToast({
          title: '已复制',
          icon: "success",
          duration: 2000
        })
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})