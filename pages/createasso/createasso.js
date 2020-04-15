// pages/createasso/createasso.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    association: [{
      "name": "工商协会",
      "type": "学术",
      "chargePerson": "李高",
      "date": "2017-01-23",
      "phone": "1523662626",
      "image": "../../img/shangxie.jpg",
      "detail": {
        "msg": "该社团由。。。。。。牛逼哄哄",
        "activity": "校级活动。。。",
        "recruit": "19日开始招募",
        "sponsor": "没有赞助",
        "other": "妇女节按时发不卡"
      }
    }]

  },
  onLoad: function () {
    wx.request({
      url: 'url',
      success: (res) => {
        that.setData({
          //管理的社团数据填充
          association: res.data.association
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/createasso/createasso'
    }
  }
})