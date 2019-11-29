// pages/wallet/create/create.js
Page({
  data: {
    formData: { 
    }
  },
  formInputChange: function (e) { 
    const { field } = e.currentTarget.dataset;
    this.setData({
      [`formData.${field}`]: e.detail.value
    }); 
  }, 
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  checkForm() {
    let formData = this.data.formData
    let flag = true
    let msg = "出现未知错误"
    
    if (formData.pass == null || formData.pass == "") {
      flag = false
      msg = "请输入密码"
    } else if (formData.pass != formData.pass2) {
      flag = false
      msg = "密码不一致噢"
    } else {

    }

    if (!flag) {
      wx.showModal({
        title: '失败',
        content: msg,
      })
      return false
    }
    return true
  },
  formSubmit(e) {
    wx.showLoading({
      title: '创建ing',
      mask: true
    })
    if (!this.checkForm()) {
      wx.hideLoading()
      return
    }
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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