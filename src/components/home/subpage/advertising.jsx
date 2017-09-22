import React from 'react'
import {getAdvertising} from 'api/home.api'

class Advertising extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      data:''
    }
  }
  render() {
    const list = [...this.state.data];
    return (
      <div id="home-ad">
        <h2>超值特惠</h2>
        <div className="ad-container clear-fix">
          {list.map((item, index) => {
            return <div key={index} className="ad-item float-left">
              <a href={item.link} target="_blank">
                <img src={item.img} alt={item.title}/>
              </a>
            </div>
          })}
        </div>
      </div>
    )
  }
  componentDidMount() {
    getAdvertising().then(res => {
      if(res.succeed){
        this.setState({
          data: res.data
        });
      };
    }).catch(res => {
      alert(res)
    });
  }
}

export default Advertising