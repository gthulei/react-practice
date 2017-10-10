/**
 * 操作数据
 */
import * as actionTypes from '../constants/ActionTypes'

export function update(data) {
  return {
    type: actionTypes.CITY,
    data
  }
}

export function isLogin(data) {
  return {
    type: actionTypes.ISLOGIN,
    data
  }
}