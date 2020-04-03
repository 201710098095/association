Page(
  {
    data:{
      //后台返回的信息数组填充
      name:"",
      college:"",
      id:"",
      professional:"",
      phone:""
    },
    nameInput:function(e){
      this.setData({
      name:e.detail.value
      })
      },
      collegeInput:function(e){
      this.setData({
      college:e.detail.value
      })
      },
      professionalInput:function(e){
        this.setData({
        professional:e.detail.value
        })
        },
        idInput:function(e){
          this.setData({
          id:e.detail.value
          })
          },
          phoneInput:function(e){
            this.setData({
            phone:e.detail.value
            })
            },
            submitBtnClick:function(){
              if(this.data.name.length == 0 || this.data.college.length == 0
               || this.data.id.length == 0 || this.data.professional.length == 0||this.data.phone.length==0){
                wx.showToast({
                  title: '输入的信息不能为空',
                  icon: 'none', 
                  duration: 2000     
                })        
              }else{
              this.setData({
              name:this.data.name,
              college:this.data.college,
              professional:this.data.professional,
              phone:this.data.phone,
              id:this.data.id
              })
              //提交给后台
              wx.showToast({
                title: '添加成功！',
                icon: 'none', 
                duration: 2000     
              }) 
              }
              },

              resetBtnClick:function(e){
              this.setData({
              name: '',
              college: '',
              professional:'',
              id: '',
              phone:'',
              })
              },
              onLoad: function () {
             
                },
                onShareAppMessage: function () {
                  return {
                   title: '华广社团管理',
                   path: '../../pages/info/info'
                  }
                 }
  }
)