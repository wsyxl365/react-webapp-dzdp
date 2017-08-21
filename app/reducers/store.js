/**
 * Created by Administrator on 2017/8/2.
 */
import * as actionTypes from '../constants/store'

const initialState = [];
//对值做处理
export default function store (state = initialState, action) {
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            state.unshift(action.data)
            return state;
        case actionTypes.STORE_RM:
            return state.filter(item=>{
                if(item.id !== action.data.id){
                    return item;
                }
            })
        default:
            return state
    }
}