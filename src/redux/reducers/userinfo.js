/**
 * Created by hl-it on 2017/9/27.
 * 定义规则
 */
import * as actionTypes from '../constants/ActionTypes'

const initialState = {'test':'test'}
export default function userinfo(state = initialState, action) {
    switch (action.type) {
        case actionTypes.HULEI:
            return action.data
        default:
            return state
    }
}