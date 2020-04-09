const app = getApp();
Page({
  data: {
    showModal: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  preventTouchMove: function () {

  },
  //授权，返回获取到的用户信息，回调的detail与wx.getUserInfo返回的一致
  getUserInfo: function (e) { 
    let u = e.detail.userInfo

    if(!u){ //点击拒绝授权的时候，就没有userInfo
      wx.reLaunch({
        url: '/pages/auth/warn',
      })
      return
    }else{
      if (u.gender == 1)
        u.sex = '男'
      else if (u.gender == 2)
        u.sex = '女'
      app.globalData.userInfo = u
      app.globalData.hasLogin = true
      wx.setStorageSync('user_info', u)
      //到app.js中换存取openid
      // app.getSession(session => {
      //   app.wxInfoSyncToLocal(u, session.openid)
      // })

      this.setData({
        showModal: false
      })

      wx.reLaunch({
        url: './../index/index',
      })
    }
  },

  onLoad: function (options) {
    if (app.globalData.hasLogin){
      wx.switchTab({
        url: '/pages/desktop/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onShow: function () {

  },

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