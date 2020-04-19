const app = getApp();
Page({
  data: {
    //后台返回的信息数组填充
    stuInfo:{ username: "",
    college: "",
    id: "",
    professional: "",
    phone: ""}
  },
  formSubmit: function (e) {
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
            'stuInfo.username':e.detail.value.username,
            'stuInfo.id':e.detail.value.id,
            'stuInfo.college':e.detail.value.college,
            'stuInfo.professional':e.detail.value.professional,
            'stuInfo.phone':e.detail.value.phone
          })
  console.log(this.data.stuInfo);
      wx.request({
        url: 'associatation/'+this.data.stuInfo,
        method:'PUT',
        success: (res) => {
           wx.showToast({
                    title: '添加成功！',
                    icon: 'none',
                    duration: 2000
                  })
        }
      })
    
    }
  },
  onLoad: function () {
    this.setData({
      stuInfo: app.globalData.stuInfo
      });
   console.log(this.data.stuInfo);
   //有用户数据了但是没有填到里面
  },
  
  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/info/info'
    }
  }
})