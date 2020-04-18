const app = getApp();
Page({
  data: {
    //后台返回的信息数组填充
    stuInfo:{ username: "",
    college: "",
    id: "",
    professional: "",
    phone: ""}
  },
  nameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  collegeInput: function (e) {
    this.setData({
      college: e.detail.value
    })
  },
  professionalInput: function (e) {
    this.setData({
      professional: e.detail.value
    })
  },
  idInput: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  submitBtnClick: function () {
    if (this.data.username.length == 0 || this.data.college.length == 0 ||
      this.data.id.length == 0 || this.data.professional.length == 0 || this.data.phone.length == 0) {
      wx.showToast({
        title: '输入的信息不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      console.log(this.data)
      //提交用户信息数据给后台
      wx.showToast({
        title: '添加成功！',
        icon: 'none',
        duration: 2000
      })
    }
  },

  resetBtnClick: function (e) {
    this.setData({
      username: '',
      college: '',
      professional: '',
      id: '',
      phone: '',
    })
  },
  onLoad: function () {
    this.setData({
      stuInfo: app.globalData.stuInfo
   });
   console.log(this.data.stuInfo);
   //有用户数据了但是没有填到里面
  },
  
  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/info/info'
    }
  }
})