let app = getApp()
Page({
  data: {
    list: [{
      title: '我的钱包',
      img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
      url: '/mine/mine'
    },
    {
      title: '创建钱包',
      img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
      url: '/create/create'
    },
    {
      title: '导入钱包',
      img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
      url: '/import/import'
    } 
    ] 
  }, 
  toChild(e) {
    let theUrl = e.currentTarget.dataset.url
    if (theUrl == "/import/import" || theUrl == "/mine/mine") {
      wx.showToast({
        icon: 'none',
        title: '敬请期待'
      })
      return
    }
    wx.navigateTo({
      url: '/pages/wallet' + theUrl
    })
  }, 
})