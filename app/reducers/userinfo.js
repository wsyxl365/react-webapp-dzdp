import * as actionTypes from '../constants/userinfo'

const initialState = {}
//对值做处理
export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_LOGIN:
            return action.data
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}
