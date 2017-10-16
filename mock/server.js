const express = require('express');
const app = express();
app.use(express.static("./home"));
let result = function (data,succeed=true,errorCode='0000000',errorMessage='成功') {
  return {
    "succeed":succeed,
    "errorCode": errorCode,
    "errorMessage": errorMessage,
    "data": data
  }
}

// 首页 —— 广告（超值特惠）
const homeAdData = require('./home/ad.js');

app.get('/api/homead', (req, res) => {
  console.log('首页 —— 广告（超值特惠）')
  res.json(result(homeAdData));
});

// 首页 —— 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js')
app.get('/api/homelist/:city/:page', (req, res) => {
  console.log('首页 —— 推荐列表（猜你喜欢）')
  console.log('当前城市'+req.params.city);
  console.log('当前页'+req.params.page);
  res.json(result(homeListData));
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
app.get('/api/search/:page/:city/:category/:keyword', (req, res) => {
  console.log('搜索结果页 - 搜索结果')

  // 参数
  const params = req.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category
  const paramsKeyword = params.keyword

  console.log('当前页数：' + paramsPage)
  console.log('当前城市：' + paramsCity)
  console.log('当前类别：' + paramsCategory)
  console.log('关键字：' + paramsKeyword)
  res.json(result(searchListData))
})
// 搜索结果页 - 搜索结果 - 两个参数
app.get('/api/search/:page/:city/:category', (req, res) => {
  console.log('搜索结果页 - 搜索结果')

  // 参数
  const params = req.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category

  console.log('当前页数：' + paramsPage)
  console.log('当前城市：' + paramsCity)
  console.log('当前类别：' + paramsCategory)

  res.json(result(searchListData));
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
app.get('/api/detail/info/:id', (req, res) => {
  console.log('详情页 - 商户信息')

  const params = req.params
  const id = params.id

  console.log('商户id: ' + id)
  res.json(result(detailInfo))
})
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
app.get('/api/detail/comment/:page/:id', (req, res) => {
  console.log('详情页 - 用户点评')

  const params = req.params
  const page = params.page
  const id = params.id

  console.log('商户id: ' + id)
  console.log('当前页数: ' + page)
  res.json(result(detailComment))
})

// 订单列表
const orderList = require('./orderlist/orderList.js')
app.get('/api/orderlist/:username', (req, res) => {
  console.log('订单列表')
  const params = req.params
  const username = params.username
  console.log('用户名：' + username)
  res.json(result(orderList))
})


// 购买
app.post('/api/order', (req, res) => {
  console.log('buy')
  res.json(result(null))
});

// 登录
app.post('/api/login', (req, res) => {
  console.log('login')
  res.json(result('登录成功'))
});

// 获取短信验证码
app.post('/api/sms', (req, res) => {
  console.log('获取短信验证码')
  res.json(result('获取短信验证码'))
});


// 提交评论
app.post('/api/submitComment', (req, res) => {
  console.log('提交评论')
  // 获取参数
  res.json(result('提交评论'))

})

app.use(express.static("../build"));

app.listen(3000);