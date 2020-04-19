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
  remove:function (e) {
       console.log(e.target.dataset);//学生名
       wx.request({
        url: 'associatation',
        //传名称
        data:{
          name:e.target.dataset
        },
        success: (res) => {
          //删除成功
        }
      })
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