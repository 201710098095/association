// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback:'',

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  inputFeedback:function(e){
    this.setData({
      feedback:e.detail.value
    })
  },
  submitFeedback:function(){
    if(this.data.feedback.length<=0){
      wx.showToast({
        title: '输入的信息不能为空',
        icon: 'none', 
        duration: 2000     
      })     
    }else{
    this.setData({
      feedback:this.data.feedback,
      })
      //提交给后台
      wx.showToast({
        title: '提交成功',
        icon: 'success', 
        duration: 2000     
      })     
    }
  }
  
  

 
})