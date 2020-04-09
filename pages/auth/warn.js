Page({

  data: {

  },
  bindToAuthPage: function () {
    wx.redirectTo({
      url: '/pages/auth/auth',
    })
  }, 
})