// pages/feedback/feedback.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    feedback: '',
  },

  inputFeedback: function (e) {
    this.setData({
      feedback: e.detail.value
    })
  },
  submitFeedback: function () {
    if (this.data.feedback.length <= 0) {
      wx.showToast({
        title: '输入的信息不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      console.log(this.data)
      //提交反馈数据给后台
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
    }
  },
  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/feedback/feedback'
    }
  }




})