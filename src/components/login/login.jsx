import React from 'react'
import {hashHistory} from 'react-router'
import Header from 'base/header/header'
import {isMobile,isSms} from "util/util";
import './login.scss'
class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      numberCode: '',
      smsCode:'',
      code:null,
      timing:60,
      clearTime:null
    }
  }
  render() {
    return (
      <div>
        <Header title='登录'/>
        <div id="login-container">
          <div className="input-container phone-container">
            <i className="icon-tablet"></i>
            <input
              type="text"
              placeholder="输入手机号"
              maxLength='11'
              onChange={this.changeNumber.bind(this)}
              value={this.state.numberCode}
            />
          </div>
          <div className="input-container password-container">
            <i className="icon-key"></i>
            <button onClick={this.getCode.bind(this)} disabled={this.state.timing == 60 ? false : true}>
              {
                this.state.timing == 60 ? '发送验证码' : this.state.timing
              }
              </button>
            <input
              type="text"
              placeholder="输入验证码"
              maxLength='6'
              value={this.state.smsCode}
              onChange={this.changeSmsCode.bind(this)}
            />
          </div>
          <button className="btn-login" onClick={this.doLogin.bind(this)}>登录</button>
        </div>
      </div>
    )
  }
  changeNumber(e) {
    this.setState({
      numberCode: e.target.value
    });
  }
  changeSmsCode(e){
    this.setState({
      smsCode: e.target.value
    });
  }
  getCode(){
    let Num = '';
    if (!isMobile(this.state.numberCode)){
      alert('请输入正确的手机号码');
      return;
    }
    for(var i=0;i<6;i++) {
      Num+=Math.floor(Math.random()*10);
    }
    alert('短信验证码:'+Num);
    this.setState({
      code: Num
    });
    times(this);
    function times(_this) {
      if (_this.state.timing == _this.state.timing) {
        if(_this.state.timing == 1){
          _this.setState({
            timing: 60
          });
          return;
        }
        _this.setState({
          timing: --_this.state.timing
        });
        _this.state.clearTime = setTimeout(() => {
          times(_this)
        }, 1000);
      }
    }
  }
  doLogin() {
    if (!isMobile(this.state.numberCode)){
        alert('请输入正确的手机号码');
        return;
    }
    if(!isSms(this.state.smsCode,6)){
      alert('请输入6位短信验证码');
      return;
    }
    if(this.state.smsCode != this.state.code){
      alert('验证错误');
      return;
    }
    window.clearTimeout(this.state.clearTime);
    hashHistory.push('/userHome');
  }
}

export default Login