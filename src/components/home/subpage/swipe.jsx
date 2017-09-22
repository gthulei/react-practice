import React from 'react'
import { Link } from 'react-router'
import ReactSwipe from 'react-swipe'
import './swipe.scss'
class Swipe extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.state = {
      index: 0
    }
  }
  render() {
    let opt = {
      speed: 400, // 动画过渡
      auto: 2000,// 3毫秒切换一次
      callback: (index) => {
        this.setState({
          index: index
        });
      }
    }
    return (
      <div className='swipe'>
        <ReactSwipe swipeOptions={opt}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/produce/jingdian"><li className="float-left jingdian">景点</li></Link>
              <Link to="/produce/ktv"><li className="float-left ktv">KTV</li></Link>
              <Link to="/produce/gouwu"><li className="float-left gouwu">购物</li></Link>
              <Link to="/produce/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></Link>
              <Link to="/produce/jianshenyundong"><li className="float-left jianshenyundong">健身运动</li></Link>
              <Link to="/produce/meifa"><li className="float-left meifa">美发</li></Link>
              <Link to="/produce/qinzi"><li className="float-left qinzi">亲子</li></Link>
              <Link to="/produce/xiaochikuaican"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
              <Link to="/produce/zizhucan"><li className="float-left zizhucan">自助餐</li></Link>
              <Link to="/produce/jiuba"><li className="float-left jiuba">酒吧</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/produce/meishi"><li className="float-left meishi">美食</li></Link>
              <Link to="/produce/dianying"><li className="float-left dianying">电影</li></Link>
              <Link to="/produce/jiudian"><li className="float-left jiudian">酒店</li></Link>
              <Link to="/produce/xuixianyule"><li className="float-left xuixianyule">休闲娱乐</li></Link>
              <Link to="/produce/waimai"><li className="float-left waimai">外卖</li></Link>
              <Link to="/produce/huoguo"><li className="float-left huoguo">火锅</li></Link>
              <Link to="/produce/liren"><li className="float-left liren">丽人</li></Link>
              <Link to="/produce/dujiachuxing"><li className="float-left dujiachuxing">度假出行</li></Link>
              <Link to="/produce/zuliaoanmo"><li className="float-left zuliaoanmo">足疗按摩</li></Link>
              <Link to="/produce/zhoubianyou"><li className="float-left zhoubianyou">周边游</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/produce/ribencai"><li className="float-left ribencai">日本菜</li></Link>
              <Link to="/produce/spa"><li className="float-left SPA">SPA</li></Link>
              <Link to="/produce/jiehun"><li className="float-left jiehun">结婚</li></Link>
              <Link to="/produce/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></Link>
              <Link to="/produce/xican"><li className="float-left xican">西餐</li></Link>
              <Link to="/produce/huochejipiao"><li className="float-left huochejipiao">火车机票</li></Link>
              <Link to="/produce/shaokao"><li className="float-left shaokao">烧烤</li></Link>
              <Link to="/produce/jiazhuang"><li className="float-left jiazhuang">家装</li></Link>
              <Link to="/produce/chongwu"><li className="float-left chongwu">宠物</li></Link>
              <Link to="/produce/all"><li className="float-left quanbufenlei">全部分类</li></Link>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ''}></li>
            <li className={this.state.index === 1 ? "selected" : ''}></li>
            <li className={this.state.index === 2 ? "selected" : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Swipe