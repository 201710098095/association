Page({
  data:{
    name:'',
    type:'',
    chargePerson:'',
    phone:'',
    date:'',
    image:'',
    msg:'',
    activity:'',
    recruit:'',
    sponsor:'',
    other:''
  },
  onLoad:function(options){
    this.setData({
      name:options.name,
      type:options.type,
      chargePerson:options.chargePerson,
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
           //通知用户
           wx.showModal({      
            title: '提示',      
            content: '您已成功发出申请！',      
            success: function (e) {       
               if (e.confirm) {            
                 console.log("确定");        
                 } else if (e.cancel) {
              }        
            }      
          });     
           } else if (e.cancel) {
        }        
      }      
    });
  },
})