import React from 'react'
import {getHomeList} from 'api/home.api'

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: ''
    }
  }

  render() {
    const list = [...this.state.data]
    return (
      <div className='home-list'>
        <h2 className="home-list-title">猜你喜欢</h2>
        {
          list.map((item,index) => {
            return <div className='home-item' key={index}>
              <div className='home-img'>
                <img src={item.img} alt="" style={{width: 90, height: 90}}/>
              </div>
              <div className='home-context'>
                <div>
                  <h2 className='title color-three font-14'>{item.title}</h2>
                  <p className='color-six'>{item.subTitle}</p>
                </div>
                <div className='price'>
                  <div>
                    <span  className='font-16 color-main'>{item.price}元 </span>
                  </div>
                  <span>已售{item.mumber}</span>
                </div>
              </div>
            </div>
          })
        }
      </div>
    )
  }

  componentDidMount() {
    getHomeList('北京', 0).then(res => {
      if (res.succeed) {
        this.setState({
          data: res.data.data
        });
      }
      ;
    }).catch(res => {
      alert(res)
    });
  }
}

export default List