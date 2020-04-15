// pages/memberlist/memberlist.js
Page({

  /**
   * 页面的初始数据
   */
  data:  //成员列表 
  {
    member:[
      //后台请求
      {
        name:'张三'
      },
      {
        name:'李四'
      },
      {
        name:'王五'
      },
      {
        name:'张三'
      }, {
        name:'张三'
      }, {
        name:'张三'
      },
    ]
  },
  onLoad: function () {
  wx.request({
    url: 'url',
    success: (res) => {
      that.setData({
        //成员数据填充
        member: res.data.member
      })
    }
  })
}


})