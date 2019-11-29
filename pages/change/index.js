// pages/change/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {'method': 'toMain'},
    fromName: 'VNS',
    toName: 'CXE',
    rate: '0.88337880',
    picker: ['token1', 'token2', 'token3'],
    otherTokenValue: 0.00000000, 
  },
  radioChange(e) {
    console.log(e)
    this.setData({
      ['formData.method']: e.currentTarget.dataset.method
    })
  },
  formInputChange: function (e) {
    console.log(e)
    const { field } = e.currentTarget.dataset;
    this.setData({
      [`formData.${field}`]: e.detail.value
    });
    console.log(this.data.formData);
    if (field == "mainTokenAmount") {
      this.setData({
        otherTokenValue: "*" + this.data.rate + "=" + this.data.formData.mainTokenAmount*this.data.rate
      })
    }
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value,
      [`formData.otherToken`]: this.data.picker[parseInt(e.detail.value)]
    }) 
  },
  checkForm() {
    let formData = this.data.formData; 
    let flag = true
    let msg = "出现未知错误"
    if (formData.mainTokenAmount == null || formData.mainTokenAmount == "") {
      flag = false
      msg = "请输入主Token数量"
    } else {
      let pat = /^[0-9]+.[0-9]+/
      let pat2 = /[0-9]*?[0-9]$/
      if(pat.test(formData.mainTokenAmount) || pat2.test(formData.mainTokenAmount)) {

      } else {
        flag = false
        msg = "token数量格式不对"
      }
    }

    if (formData.otherToken == null) {
      flag = false
      msg = "请选择一种Token"
    }
 
    if (!flag) {
      wx.showModal({
        title: '失败',
        content: msg,
        showCancel: false
      })
      return false
    }
    
    return true
  },
  formSubmit(e) {
    console.log(this.data.formData)
    wx.showLoading({
      title: '兑换ing',
      mask: true
    })
    if (!this.checkForm()) {
      wx.hideLoading()
      return
    }

    wx.hideLoading()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
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