//index.js

let timer;
let num = 0;
Page({
  data: {
    winNum: 0,
    btnState: false,
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
    let oldWinNum = wx.getStorageSync('winNum')
    if (oldWinNum != null && oldWinNum != '') {
      this.setData({
        winNum: oldWinNum
      })
    }
    this.tiemGo()
  },

  /**
   * 出拳
   */
  chosseForChosse(e) {
    if (this.data.btnState) {
      return
    }
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
      str = '你赢了';
      wx.setStorageSync(
        'winNum', number
      )
    }
    if (user == '/images/jiandao.png' && ai == '/images/bu.png') {
      number++;
      str = '你赢了';
      wx.setStorageSync(
        'winNum', number
      )
    }
    if (user == '/images/bu.png' && ai == '/images/shitou.png') {
      number++;
      str = '你赢了';
      wx.setStorageSync(
        'winNum', number
      )
    }
    if (user == ai) {
      str = '平局'
    }
    this.setData({
      winNum: number,
      gameResult: str,
      btnState: true
    })

  },
  tiemGo: function() {
    timer = setInterval(this.move, 100) //开启定时器
  },
  move: function() {
    num = parseInt(Math.floor(Math.random() * 3))
    this.setData({
      imageAiSrc: this.data.srcs[num]
    })
  },
  again() {
    if (!this.data.btnState) {
      return
    }
    this.tiemGo();
    this.setData({
      btnState: false,
      gameResult: '',
      imageUserSrc: '/images/timg.jpg'
    })

  }


})