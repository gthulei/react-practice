/**
 * Created by hl-it on 2017/9/27.
 * 合拼规则，统一管理
 */
import {combineReducers} from 'redux'
import userinfo from './userinfo'
import login from './login'

export default combineReducers({
  userinfo,
  login
})