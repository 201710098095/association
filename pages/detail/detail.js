Page({
  data:{
    name:'',//社团名字
    type:'',//类型
    chargePersons:'',//会长
    phone:'',//联系方式
    date:'',//建立日期
    image:'',//logo
    msg:'',//简介
    activity:'',//近期活动
    recruit:'',//招募
    sponsor:'',//赞助
    other:''//其他
  },
  onLoad:function(options){
    this.setData({
      name:options.name,
      type:options.type,
      chargePersons:options.chargePersons,
      phone:options.phone,
      date:options.date,
      image:options.image,
      msg:options.msg,
      activity:options.activity,
      recruit:options.recruit,
      sponsor:options.sponsor,
      other:options.other
    }) 
  },
  onShareAppMessage: function () {
    return {
     title: '华广社团管理',
     path: '../../pages/detail/detail'
    }
   },
   joinAsso:function(){
    wx.showModal({      
      title: '提示',      
      content: '确定发出加入社团的申请吗？',      
      success: function (e) {       
         if (e.confirm) {            
           // 用户点击了确定  发出后台请求
           console.log("确定");   
            wx.request({
            url: 'url', 
            data: "name",//传用户名申请加入社团
            dataType: 'json',
            method: 'POST',
              header: {
             'custom-header': 'delete',
              'content-type': 'application/json'
              },
              success: (res) => {
                //申请成功
                wx.showModal({      
                  title: '提示',      
                  content: '您已成功发出申请！',      
                  success: function (e) {       
                     if (e.confirm) {            
                       console.log("确定");        
                       }      
                  }      
              })
            },
            fail: (res) => {
              console.log('错误');
            }
   })
  }}})}
})