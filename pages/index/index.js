//index.js
Page({
  data: {
    isSearch: true,
    isClear: false,
    association: [
      //后端数据
      {
        "name": "工商管理爱好者协会",
        "type": "学术科技",
        "chargePerson": "李高",
        "phone": "15612354512",
        "date": "2017-01-23",
        "image": "../../img/shangxie.jpg",
        "msg": "该社团由。。。。。。牛逼哄哄",
        "activity": "校级活动。。。",
        "recruit": "19日开始招募",
        "sponsor": "没助",
        "other": "双方都是双方都是远古法u覆盖爱上v阿萨双方都是远古法u覆盖爱上v阿萨双方都是远古法u覆盖爱上v阿萨远古法u覆盖爱上v阿萨"
      },
      {
        "name": "工商协会",
        "type": "学术",
        "chargePerson": "李高",
        "phone": "15612354512",
        "date": "2017-01-23",
        "image": "../../img/shangxie.jpg",
        "msg": "该社团由。。。。。。牛逼哄哄",
        "activity": "校级活动。。。",
        "recruit": "19日开始招募",
        "sponsor": "没有赞助",
        "other": "妇女节按时发不卡"
      },
      {
        "name": "乒乓球协会",
        "type": "体育",
        "chargePerson": "王小欧",
        "phone": "15612354512",
        "date": "2018-05-12",
        "image": "../../img/shangxie.jpg",
        "msg": "sfdsdf",
        "activity": "asdsda",
        "recruit": "19日开始招募",
        "sponsor": "没有赞助",
        "other": "妇女节按时发不卡"
      },
      {
        "name": "街舞协会",
        "type": "体育",
        "chargePerson": "小明",
        "phone": "15612354512",
        "date": "2015-12-03",
        "image": "../../img/shangxie.jpg",
        "msg": "sfdsdf",
        "activity": "asdsda",
        "recruit": "19日开始招募",
        "sponsor": "没有赞助",
        "other": "妇女节按时发不卡"
      }
    ],
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
    wx.request({
      url: 'url',
      success: (res) => {
        that.setData({
          //列表数据填充
          association: res.data.association
        })
      }

    })
    that.setData({
      lunboData: data.datas
    })
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
    var that = this
    var searchname = e.currentTarget.dataset.searchname
    console.log(searchname) 
    wx.request({
      url: 'url',
      success: (res) => {
        that.setData({
          //列表数据填充
          association: res.data.association
          //刷新页面。。。
        })
      }
    })
  },

  onShareAppMessage: function () {
    return {
      title: '华广社团管理',
      path: '../../pages/index/index'
    }
  }
})