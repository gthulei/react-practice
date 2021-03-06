import React from 'react'
import {getProduceList} from 'api/produce.api'
import { Link } from 'react-router'
import LoadMore from 'base/load-more/loadMore'

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: '',
      loding:true,
      pageNo:0
    }
  }

  render() {
    const list = [...this.state.data]
    return (
      <div className='home-list'>
        {
          list.map((item,index) => {
            return <Link to={'/produce/' + item.id} key={index}><div className='home-item'>
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
                      <span style={{color: 'red'}} >已售{item.mumber}</span>
                    </div>
                  </div>
                </div>
            </Link>
          })
        }
        <LoadMore loadMore={this.loadMore.bind(this)} loding={this.state.loding}/>
      </div>
    )
  }
  componentDidMount() {
    getProduceList(this.state.pageNo,this.props.city,'category',this.props.id).then(res => {
      if (res.succeed) {
        this.setState({
          data: res.data.data
        });
      }
    }).catch(res => {
      alert(res)
    });
  }
  loadMore() {
    getProduceList(++this.state.pageNo,this.props.city, 'category',this.props.id).then(res => {
      if (res.succeed) {
        this.setState({
          data: this.state.data.concat(res.data.data)
        });
      }
    }).catch(res => {
      alert(res)
    });
  }
}

export default List