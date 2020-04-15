// pages/joinasso/joinasso.js
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
      },
      {
        "name": "体育协会",
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
      }
    ]
  },
  onLoad: function () {
    wx.request({
      url: 'url',
      success: (res) => {
        that.setData({
          //加入的社团数据填充
          association: res.data.association
        })
      }
    })
  },

  quitAsso: function (e) {
    var item = e.currentTarget.dataset.item
    console.log(item.name);
    wx.showModal({
      title: '提示',
      content: '确定要退出社团吗？',
      success: function (e) {
        if (e.confirm) {
          // 用户点击了确定  
          //后台请求删除
          var _this = this;
          wx.request({
            url: 'url',
            data: item,
            dataType: 'json',
            method: 'DELETE',
            header: {
              'custom-header': 'delete',
              'content-type': 'application/json'
            },
            success: (res) => {
              //删除成功
              //更新列表


            },
            fail: (res) => {

            }
          });
          console.log("确定");
        } else if (e.cancel) {}
      }
    });
  },
  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/joinasso/joinasso'
    }
  }
})