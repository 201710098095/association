//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId              
              this.globalData.userInfo = res.userInfo

               

              //获取社团信息
              wx.request({
                url: 'http://localhost:8080/association/listassocation',
                method:'GET',
                success :(res)=> {
                  this.globalData.associationinfo = res.data.data
                  //这里有数据了
                  if (this.associationInfoReadyCallback) {
                    this.associationInfoReadyCallback(res)
                  }
                },
              }) 
               //获取学生信息
               wx.request({
                url: 'http://localhost:8080/user/ListUserByNickname',
                method:'GET',
                data:{nickname:getApp().globalData.userInfo.nickName},
                success :(res)=> {
                  this.globalData.stuInfo = res.data.data
                  console.log(this.globalData.stuInfo);   
                  //这里有数据了
                  if (this.stuInfoReadyCallback) {
                    this.stuInfoReadyCallback(res)
                  }                    
                },
              }) 
  
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
        
          })
  
        }
      }
    })
   
    
  
  },
  globalData: {
    userInfo: [],
    associationinfo:[],
   //学生信息
    stuInfo:[]
  },
  
  
})