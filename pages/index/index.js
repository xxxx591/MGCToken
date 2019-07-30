//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    msg: '长沙市'
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
    // this.init()
    let res = wx.getStorageInfoSync();
    console.log(res.keys)
    let add = res.keys
    if (add.indexOf('name') != -1 && add.indexOf('time') != -1 && add.indexOf('city') != -1){
      wx.navigateTo({
        url: '/pages/question/question',
      })
    }
  },
  init() {
    
  },
  submit() {
    wx.navigateTo({
      url: '/pages/question/question',
    })
  },
  getName(e) {
    console.log(e.detail.value)
    wx.setStorageSync('name', e.detail.value)
  },
  getTime(e) {
    console.log(e.detail.value)
    wx.setStorageSync('time', e.detail.value)
  },
  getCity(e) {
    console.log(e.detail.value)
    wx.setStorageSync('city', e.detail.value)
  },
})