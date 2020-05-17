const app = getApp();
Page({
  data: {
    //后台返回的信息数组填充
 stuInfo:[]
  },
  formSubmit: function (e) {
     console.log(this.data.stuInfo);
  
    if (e.detail.value.username == 0 || e.detail.value.id.length == 0 ||
      e.detail.value.professional.length == 0 || e.detail.value.college.length == 0 || e.detail.value.phone.length == 0) {
      wx.showToast({
        title: '输入的信息不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    else{
   this.setData({
            'stuInfo.name':e.detail.value.name,
            'stuInfo.id':e.detail.value.id,
            'stuInfo.college':e.detail.value.college,
            'stuInfo.professional':e.detail.value.professional,
            'stuInfo.phone':e.detail.value.phone
          })    
      wx.request({
        url: 'http://localhost:8080/user/updateuser',
        data:{uid:this.data.stuInfo.id,
          name:this.data.stuInfo.name,
          college:this.data.stuInfo.college,
          phone:this.data.stuInfo.phone,
          professional:this.data.stuInfo.professional
        },
        success: (res) => {
           wx.showToast({
                    title: '修改信息成功！',
                    icon: 'none',
                    duration: 2000
                  })
        }
      })
    
    }
  },
onShow:function () {
  this.setData({
          stuInfo:app.globalData.stuInfo[0]
  })
},
  
  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/info/info'
    }
  }
})