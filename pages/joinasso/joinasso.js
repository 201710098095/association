// pages/joinasso/joinasso.js
Page({

  /**
   * 页面的初始数据
   */
data: {
    association:[
      {"name":"工商协会",
      "type":"学术",
       "chargePerson":"李高",
       "date":"2017-01-23",
       "phone":"1523662626",
       "image":"../../img/shangxie.jpg",
       "detail":{
         "msg":"该社团由。。。。。。牛逼哄哄",
         "activity":"校级活动。。。",
         "recruit":"19日开始招募",
         "sponsor":"没有赞助",
         "other":"妇女节按时发不卡"
        }
      }]
  },
 
quitAsso:function(){
  wx.showModal({      
    title: '提示',      
    content: '确定要删除吗？',      
    success: function (e) {       
       if (e.confirm) {            
         // 用户点击了确定  
         //后台请求删除
         console.log("确定");        
         } else if (e.cancel) {
      }        
    }      
  });
}
})