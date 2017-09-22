import React from 'react'
import './loadMore.scss'
class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className='load-more' ref="wrapper">
        加载中,请稍后...
      </div>
    )
  }
  componentDidMount() {
    let clear = '';
    const wrapper = this.refs.wrapper;
    /**
     * 实现原理浏览器的屏幕的高度是固定的,随着往下滑动,元素距离顶部的距离越来越近,
     * 当距离顶部的距离小于屏幕的高度就表示在可视区触发加载更多方法
     */
    window.addEventListener('scroll',() => {
      window.clearTimeout(clear);
      clear = window.setTimeout(()=> {
        // 取一屏的高度
        const windowHeight = window.screen.height;
        // 距离顶部距离
        const top = wrapper.getBoundingClientRect().top;
        console.log(windowHeight)
        console.log(top)
        if(top<windowHeight){
          console.log("触发加载更多")
        }
      },300)
    })
  }
}

export default LoadMore