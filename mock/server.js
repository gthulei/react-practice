const express = require('express');
const app = express();

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad.js');

app.get('/api/homead', (req, res) => {
  console.log('首页 —— 广告（超值特惠）')
  res.json(homeAdData);
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js')
app.get('/api/homelist/:city/:page', (req, res) => {
  console.log('首页 —— 推荐列表（猜你喜欢）')

  // 参数
  const params = this.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('当前城市：' + paramsCity)
  console.log('当前页数：' + paramsPage)
  res.json(homeListData);
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
app.get('/api/search/:page/:city/:category/:keyword', (req, res) => {
  console.log('搜索结果页 - 搜索结果')

  // 参数
  const params = this.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category
  const paramsKeyword = params.keyword

  console.log('当前页数：' + paramsPage)
  console.log('当前城市：' + paramsCity)
  console.log('当前类别：' + paramsCategory)
  console.log('关键字：' + paramsKeyword)
  res.json(searchListData)
})
// 搜索结果页 - 搜索结果 - 两个参数
app.get('/api/search/:page/:city/:category', (req, res) => {
  console.log('搜索结果页 - 搜索结果')

  // 参数
  const params = this.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category

  console.log('当前页数：' + paramsPage)
  console.log('当前城市：' + paramsCity)
  console.log('当前类别：' + paramsCategory)

  res.json(searchListData);
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
app.get('/api/detail/info/:id', (req, res) => {
  console.log('详情页 - 商户信息')

  const params = this.params
  const id = params.id

  console.log('商户id: ' + id)
  res.json(detailInfo)
})
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
app.get('/api/detail/comment/:page/:id', (req, res) => {
  console.log('详情页 - 用户点评')

  const params = this.params
  const page = params.page
  const id = params.id

  console.log('商户id: ' + id)
  console.log('当前页数: ' + page)
  res.json(detailComment)
})

// 订单列表
const orderList = require('./orderlist/orderList.js')
app.get('/api/orderlist/:username', (req, res) => {
  console.log('订单列表')
  const params = this.params
  const username = params.username
  console.log('用户名：' + username)
  res.json(orderList)
})


// 购买
app.post('/api/order', (req, res) => {
  console.log('buy')
  res.json({
    errno: 0,
    msg: 'buy ok',
  })
});

// 登录
app.post('/api/login', (req, res) => {
  console.log('login')
  res.json({
    errno: 0,
    msg: 'loing ok',
    token: 'aaaaaaaaaaaa'
  })
});

// 获取短信验证码
app.post('/api/sms', (req, res) => {
  console.log('获取短信验证码')
  res.json({
    errno: 0,
    msg: 'ok',
    code: 'md5(123456)'
  })
});


// 提交评论
app.post('/api/submitComment', (req, res) => {
  console.log('提交评论')
  // 获取参数
  res.json({
    errno: 0,
    msg: 'ok'
  })

})

app.listen(3000);