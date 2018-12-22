// start.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    opacity: 1,
    threshold: 0,
    tmpmax:20,
    tmpmin:10,
    lightmax:800,
    lightmin:200,
    hummax:400,
    hummin:80,
    },


  send: function(){
     //调用百度天气API
     var that=this
     var tmpmax=this.data.tmpmax
    var tmpmin = this.data.tmpmin
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503222943/datapoints?datastream_id=Light,Temperature,Humidity&limit=1',
        header: {
          'content-type': 'application/json',
          'api-key': 'kfO4m7i1671WRAJ=gS3B260jWzg='
        },

      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var str1 = res.data.data.datastreams[0]
        var str2 = res.data.data.datastreams[1]
        var str3 = res.data.data.datastreams[2]
        var tmp= str1.datapoints[0].value
        var light = str2.datapoints[0].value
        var hum = str3.datapoints[0].value
	//温度高于设置的门限值
        if (tmp > that.data.tmpmax && hum > that.data.hummax && light > that.data.lightmax){
          wx.showModal({
            title: '警报！',
            content: '温度、湿度、光强过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }

        else if (tmp > that.data.tmpmax && hum > that.data.hummax && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '温度、湿度过高！光强过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp > that.data.tmpmax && hum < that.data.hummim && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '温度过高！湿度、光强过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp > that.data.tmpmax && hum < that.data.hummim && light > that.data.lightmax) {
          wx.showModal({
            title: '警报！',
            content: '温度、光强过高！湿度过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && hum > that.data.hummax  && light > that.data.lightmax) {
          wx.showModal({
            title: '警报！',
            content: '温度过低！湿度、光强过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && hum > that.data.hummax && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '温度、光强过低！湿度过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && hum < that.data.hummim && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '温度、光强、湿度过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && hum < that.data.hummim && tmp > that.data.tmpmax) {
          wx.showModal({
            title: '警报！',
            content: '温度、湿度过低！光照过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin))&&hum > that.data.hummax && light > that.data.lightmax) {
          wx.showModal({
            title: '警报！',
            content: '湿度、光强过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin)) &&hum > that.data.hummax && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '湿度过高！光强过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin)) && hum < that.data.hummim && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '湿度、光强过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin)) && hum < that.data.hummim && light > that.data.lightmax ) {
          wx.showModal({
            title: '警报！',
            content: '湿度过低！光强过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp > that.data.tmpmax && ((hum <= that.data.hummax) && (hum >= that.data.hummin))&& light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '温度过高！光强过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp > that.data.tmpmax && ((hum <= that.data.hummax) && (hum >= that.data.hummin)) && light > that.data.lightmax) {
          wx.showModal({
            title: '警报！',
            content: '温度、光强过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && ((hum <= that.data.hummax) && (hum >= that.data.hummin)) && light > that.data.lightmax) {
          wx.showModal({
            title: '警报！',
            content: '温度过低！光强过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && ((hum <= that.data.hummax) && (hum >= that.data.hummin)) && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '温度、光强过低！！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp > that.data.tmpmax && hum > that.data.hummax && ((light <= that.data.lightmax) && (light >= that.data.lightmin))) {
          wx.showModal({
            title: '警报！',
            content: '温度、湿度过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp > that.data.tmpmax && hum < that.data.hummim && ((light <= that.data.lightmax) && (light >= that.data.lightmin))) {
          wx.showModal({
            title: '警报！',
            content: '温度过高！湿度过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && hum < that.data.hummim && ((light <= that.data.lightmax) && (light >= that.data.lightmin))) {
          wx.showModal({
            title: '警报！',
            content: '温度、湿度过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp < that.data.tmpmin && hum > that.data.hummax && ((light <= that.data.lightmax) && (light >= that.data.lightmin))) {
          wx.showModal({
            title: '警报！',
            content: '湿度过高！温度过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin)) && ((hum <= that.data.hummax) && (hum >= that.data.hummin)) && light > that.data.lightmax) {
          wx.showModal({
            title: '警报！',
            content: '光强过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin)) && ((hum <= that.data.hummax) && (hum >= that.data.hummin)) && light < that.data.lightmin) {
          wx.showModal({
            title: '警报！',
            content: '光强过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin)) && hum > that.data.hummax && ((light <= that.data.lightmax) && (light >= that.data.lightmin))) {
          wx.showModal({
            title: '警报！',
            content: '湿度过高！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (((tmp <= that.data.tmpmax) && (tmp >= that.data.tmpmin)) && hum < that.data.hummim && ((light <= that.data.lightmax) && (light >= that.data.lightmin))) {
          wx.showModal({
            title: '警报！',
            content: '湿度过低！',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
        else if (tmp > that.data.tmpmax && ((hum <= that.data.hummax) && (hum >= that.data.hummin)) && ((light <= that.data.lightmax) && (light >= that.data.lightmin))) {
	    //高于门限报警，于是报警
            wx.showModal({
              title: '警报！',
              content: '温度过高！',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }

	//温度低于设置的门限值
        else if (tmp < that.data.tmpmin && ((hum <= that.data.hummax) && (hum >= that.data.hummin)) && ((light <= that.data.lightmax) && (light >= that.data.lightmin)) ){
           //低于门限报警，于是报警
          {
            wx.showModal({
              title: '警报！',
              content: '温度过低！',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        }
        else {
          {
            wx.showModal({
              title: '提示',
              content: '数据完全正常哦~植物正在健康生长！',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }}
          
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  water: function () {
  const abc = wx.request({
    url: 'http://api.heclouds.com/devices/503222943/datapoints?type=3',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'api-key': 'kfO4m7i1671WRAJ=gS3B260jWzg='
      },
      data: {

      
        "water": 1,

      },
      success: function (res) {
        wx.showToast({
          title: '发送成功'
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '系统错误',
        })
      },
      complete: function (res) {
        wx.hideLoading()
      },

    })
  },

  stop: function () {
    const abc = wx.request({
      url: 'http://api.heclouds.com/devices/503222943/datapoints?type=3',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'api-key': 'kfO4m7i1671WRAJ=gS3B260jWzg='
      },
      data: {


        "water": 100000,

      },
      success: function (res) {
        wx.showToast({
          title: '发送成功'
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '系统错误',
        })
      },
      complete: function (res) {
        wx.hideLoading()
      },

    })
  },
  getDataFromOneNet: function(){
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503222943/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'kfO4m7i1671WRAJ=gS3B260jWzg='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        console.log(app.globalData.light)
        //跳转到天气页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../wifi_station/tianqi/tianqi',
        })
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
}
)

