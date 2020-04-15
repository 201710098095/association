// pages/newasso/newasso.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: "",
    name: '',
    type: '',
    chargePerson: '',
    phone: '',
    date: '',
    msg: '',
    activity: '',
    recruit: '',
    sponsor: '',
    other: ''
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  resetBtnClick: function (e) {
    this.setData({
    image: "",
    name: '',
    type: '',
    chargePerson: '',
    phone: '',
    date: '',
    msg: '',
    activity: '',
    recruit: '',
    sponsor: '',
    other: ''
    })
  },
  submitBtnClick: function () {
    if (this.data.name.length == 0 || this.data.type.length == 0 ||
      this.data.chargePerson.length == 0 || this.data.phone.length == 0 || this.data.date.length == 0 || this.data.msg.length == 0
      || this.data.activity.length == 0|| this.data.recruit.length == 0|| this.data.sponsor.length == 0|| this.data.other.length == 0
      || this.data.image.length == 0) {
      wx.showToast({
        title: '输入的信息不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      //提交数据给后台
      wx.request({
        url: 'url', 
        data: this.data,//传社团信息
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
      chargePerson: e.detail.value
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
})