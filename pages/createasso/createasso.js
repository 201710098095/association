// pages/createasso/createasso.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userid:"",
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
    ]
  },
  onLoad: function () {
    this.setData({
      userid:app.globalData.stuInfo.id
    })
    console.log(this.data.association);
    //根据学生id获取管理的社团数据
    wx.request({
      url: 'associatation'+this.data.userid,
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