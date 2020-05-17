//index.js
const app = getApp();

Page({
  data: {
    isSearch: true,
    isClear: false,
    associationinfo: [],
    userInfo:{},
    searchname: '',
  },

  onLoad: function () {
    var that = this;
    var data = {
      "datas": [{
          "id": 1,
          "imgurl": "../../img/a1.png"
        }, {
          "id": 2,
          "imgurl": "../../img/a2.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../img/a3.png"
        }, {
          "id": 4,
          "imgurl": "../../img/a4.jpg"
        }
      ]
    };
     // 所以此处加入 callback 以防止这种情况   
    that.setData({
      lunboData: data.datas
    })
    app.associationInfoReadyCallback = function () {
      that.setData({
        associationinfo:app.globalData.associationinfo
      })
    }
  },

  societyInput: function (e) {
    this.setData({
      searchname: e.detail.value
    })
    if (this.data.searchname.length > 0) {
      this.setData({
        isClear: true,
      })
    } else {
      this.setData({
        isClear: false,
      })
    }
  },
  //清空
  clearTap: function () {
    this.setData({
      searchname: '',
      isClear: false,
    })

  },
  //搜索
  searching:function (e) {
    var that = this;
    var searchname = e.currentTarget.dataset.searchname
    console.log(searchname);
    var reg = RegExp(/协会/);
     if(searchname == ''){
      return;
    }else if(!searchname.match(reg)){
      // 包含     
      searchname = searchname+'协会'     
  }
  wx.request({
    url: 'http://localhost:8080/association/name',
    data:{name:searchname},
    success: (res) => {
      console.log(res.data);
      that.setData({
        //列表数据填充
        associationinfo: res.data.data
        //刷新页面。。。
      })
    },
  })  
   
  },

  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/index/index'
    }
  }
})