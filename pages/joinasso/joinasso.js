// pages/joinasso/joinasso.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    association: [
      {
        image: "",
        name: 'dsf',
        type: 'dsfsopl',
        chargePerson: 'sdfoo',
        phone: 'fdsfo',
        date: 'fdsfddwe',
        msg: 'fds',
        activity: 'sdffq',
        recruit: 'sdffsd',
        sponsor: 'dsff',
        other: 'dsff'
    },
    ],
  },
  onLoad: function () {
    this.setData({
      userid:app.globalData.stuInfo.id
    })
    console.log(this.data.userid);
    //根据用户id获取加入的社团信息
    wx.request({
      url: 'associatation/'+this.data.userid,
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