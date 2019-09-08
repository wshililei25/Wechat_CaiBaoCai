//index.js

let timer;
let num = 0;
Page({
  data: {
    winNum: 0,
    imageAiSrc: '',
    imageUserSrc: '/images/timg.jpg',
    gameResult: '',
    srcs: [
      '/images/shitou.png',
      '/images/jiandao.png',
      '/images/bu.png'
    ]
  },

  onLoad: function() {
    this.tiemGo()
  },
 
  /**
   * 出拳
   */
  chosseForChosse(e) {
    console.log(e)
    this.setData({
      imageUserSrc: this.data.srcs[e.currentTarget.id]
    })
    clearInterval(timer) //停止定时器

    let user = this.data.imageUserSrc;
    let ai = this.data.imageAiSrc;
    let number = this.data.winNum;
    let str = '你输了';

    if (user == '/images/shitou.png' && ai == '/images/jiandao.png') {
      number++;
      src = '你赢了';
      wx.setStorageSync(
        'winNum', number
      )
    }
    if (user == '/images/jiandao.png' && ai == '/images/bu.png') {
      number++;
      src = '你赢了';
      wx.setStorageSync(
        'winNum', number
      )
    }
    if (user == '/images/bu.png' && ai == '/images/shitou.png') {
      number++;
      src = '你赢了';
      wx.setStorageSync(
        'winNum', number
      )
    }
    if (user = ai) {
      str = '平局'
    }
    this.setData({
      winNum: number,
      gameResult: str,
    })
  },
  tiemGo: function () {
    timer = setInterval(this.move, 100) //开启定时器
  },
  move: function () {
    if (num >2) {
      num = 0;
    }
    this.setData({
      imageAiSrc: this.data.srcs[num]
    })
    num++;
  },


})