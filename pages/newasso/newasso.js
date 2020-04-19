// pages/newasso/newasso.js
Page({
  data: {
    association:{
      image: "",
      name: '1',
      type: '1',
      chargePerson: '1',
      phone: '1',
      date: '1',
      msg: '1',
      activity: '1',
      recruit: '1',
      sponsor: '1',
      other: '1'
  }
  },
  getLogo: function () {
     var that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          'association.image': tempFilePaths
        })
        console.log(that.data.association.image);
      }
    })

  },
   formSubmit: function (e) {
    if (e.detail.value.name.length == 0 || e.detail.value.type.length == 0 ||
      e.detail.value.chargePerson.length == 0 || e.detail.value.phone.length == 0 || 
      e.detail.value.date.length == 0 ||e.detail.value.msg.length == 0
      || e.detail.value.activity.length == 0|| e.detail.value.recruit.length == 0||
      e.detail.value.sponsor.length == 0|| e.detail.value.other.length == 0|| this.data.association.image.length == 0
      ) {
      wx.showToast({
        title: '输入的信息不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
       this.setData({
                'association.name':e.detail.value.name,
                'association.type':e.detail.value.type,
                'association.image':this.data.association.image,
                'association.chargePerson':e.detail.value.chargePerson,
                'association.phone':e.detail.value.phone,
                'association.date':e.detail.value.date,
                'association.msg':e.detail.value.msg,
                'association.activity':e.detail.value.activity,
                'association.recruit':e.detail.value.recruit,
                'association.sponsor':e.detail.value.sponsor,
                'association.other':e.detail.value.other,
              })
        console.log(this.data.association);   
      //提交数据给后台
      wx.request({
        url: 'url', 
        data: this.data.association,//传社团信息
        dataType: 'json',
        method: 'POST',
        success: (res) => {
            //申请成功
          wx.showToast({
            title: '等待管理员审核',
            icon: 'none',
            duration: 2000
          })
        }
    })
  }
  },

  
 
})