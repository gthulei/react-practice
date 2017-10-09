/**
 * Created by hl-it on 2017/9/27.
 * 定义规则
 */
import * as actionTypes from '../constants/ActionTypes'

export default function userinfo(state = {}, action) {
    switch (action.type) {
        case actionTypes.CITY:
            return action.data
        default:
            return state
    }
}