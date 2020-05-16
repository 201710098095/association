// pages/memberlist/memberlist.js
Page({

  /**
   * 页面的初始数据
   */
  data:  //成员列表 
  {assocaitionName:'',
    member:[]
  },
  remove:function (e) {
       console.log(e.target.dataset.name);//学生名
       wx.request({
        url: 'http://localhost:8080/user/deletemember',
        //传名称
        data:{
          assocaitionName:this.data.assocaitionName,
          memberName:e.target.dataset.name
        },
        success: (res) => {
          //删除成功
          console.log(res);
        }
      })
  },
 
  onLoad: function (options) {
    var that = this;
    this.setData({
      assocaitionName: options.name
    })    
    console.log(this.data.assocaitionName);
    //发送后台请求显示成员
  wx.request({
    url: 'http://localhost:8080/user/associtionname',
    data:{name:this.data.assocaitionName},
    success: (res) => {
      that.setData({
        //成员数据填充
      member: res.data.data
      })
    }
  })
}
})