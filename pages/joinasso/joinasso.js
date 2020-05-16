// pages/joinasso/joinasso.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    association: [],
  },
  onLoad: function () {
    var that = this
    //根据用户id获取加入的社团信息
    wx.request({
      url: 'http://localhost:8080/association/userid?id='+app.globalData.stuInfo.id,
      success: (res) => {
        that.setData({
          //加入的社团数据填充
          association: res.data.data
        })
      }
    })
  },

  quitAsso: function (e) {
    var item = e.currentTarget.dataset.item
    wx.showModal({
      title: '提示',
      content: '确定要退出社团吗？',
      success: function (e) {
        if (e.confirm) {
          // 用户点击了确定  
          //后台请求删除
          var _this = this;
          wx.request({
            url: 'http://localhost:8080/association/userexit',
            data: {
              uid:app.globalData.stuInfo.id,
              aid:item.id},
            dataType: 'json',
            success: (res) => {
              console.log("删除成功"); 
              //删除成功
              //更新列表
            },
            fail: (res) => {
              console.log('错误');
            }
          });
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