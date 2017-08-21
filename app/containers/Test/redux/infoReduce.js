/**
 * Created by Administrator on 2017/8/4.
 */
let info = {
    "title":"测试新闻标题",
    "clicknum":0
}
export default (state = info,action)=>
{
    if(action.type === "INFO_ADDCLICK"){
        let oldnum = state.clicknum;
        oldnum++;
        return Object.assign({},state,{clicknum:oldnum})
    }
    return state;
}