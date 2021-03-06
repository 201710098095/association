// pages/assoinfo/assoinfo.js
Page({
  data: {
    image: "",
    name: '',
    type: '',
    chargePersons: '',
    phone: '',
    date: '',
    msg: '',
    activity: '',
    recruit: '',
    sponsor: '',
    other: ''
  },
  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  typeInput: function (e) {
    this.setData({
      type: e.detail.value
    })
  },

  chargePersonInput: function (e) {
    this.setData({
      chargePersons: e.detail.value
    })
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  dateInput: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  msgInput: function (e) {
    this.setData({
      msg: e.detail.value
    })
  },
  sponsorInput: function (e) {
    this.setData({
      sponsor: e.detail.value
    })
  },
  recruitInput: function (e) {
    this.setData({
      recruit: e.detail.value
    })
  },
  activityInput: function (e) {
    this.setData({
      activity: e.detail.value
    })
  },
  otherInput: function (e) {
    this.setData({
      other: e.detail.value
    })
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
          image: tempFilePaths
        })
      }
    })
  },
  
  onLoad: function (options) {
    this.setData({
      name: options.name,
      type: options.type,
      chargePersons: options.chargePersons,
      phone: options.phone,
      date: options.date,
      image: options.image,
      msg: options.msg,
      activity: options.activity,
      recruit: options.recruit,
      sponsor: options.sponsor,
      other: options.other
    })
  },

  submitBtnClick: function () {
    if (this.data.name.length == 0 || this.data.type.length == 0 || this.data.chargePersons.length == 0 || this.data.activity.length == 0 ||
      this.data.phone.length == 0 || this.data.date.length == 0 || this.data.sponsor.length == 0 || this.data.other.length == 0 ||
      this.data.recruit.length == 0 || this.data.msg.length == 0 || this.data.image.length == 0
    ) {
      wx.showToast({
        title: '输入的信息不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      //提交给后台
      console.log(this.data);
      wx.request({
        url: "http://localhost:8080/association/updateassociation", //接口地址
        data: {
          name: this.data.name,
          type: this.data.type,
          chargePersons: this.data.chargePersons,
          phone: this.data.phone,
          date: this.data.date,
          image: this.data.image,
          msg: this.data.msg,
          activity: this.data.activity,
          recruit: this.data.recruit,
          sponsor: this.data.sponsor,
          other: this.data.other
        },
        success(res) {
          console.log(res.data)
          wx.showToast({
            title: '修改成功！',
            icon: 'none',
            duration: 2000,
          })
        },
        fail:(res)=>{
          console.log('错误');
          console.log(res);    
        }
      })
    }
  },

  resetBtnClick: function (options) {
    this.setData({
      name: "",
      type: "",
      chargePerson: "",
      phone: "",
      date: "",
      image: "",
      msg: "",
      activity: "",
      recruit: "",
      sponsor: "",
      other: ""
    })
  },
  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/assoinfo/assoinfo'
    }
  }
})