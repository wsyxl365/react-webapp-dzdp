import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import BuyAndStore from '../../../components/BuyAndStore/index'
import {hashHistory} from 'react-router'
import * as storeActionsFromFile from '../../../actions/store'
import {bindActionCreators} from 'redux'
class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            isStore:false
        }
    }
    render() {
        return (
            <BuyAndStore
 isStore={this.state.isStore}
 buyHandle={this.buyHandle.bind(this)}
 storeHandle={this.storeHandle.bind(this)}/>
        )
    }
    componentDidMount(){
        this.checkStoreState();
    }
    //检验当前商户时候已经被收藏
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;
        store.some(item=>{
            if(item.id === id){
                this.setState({
                    isStore:true
                })
            }
            //退出循环
            return true;
        })
    }
    buyHandle(){
        //购买事件
        //验证登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        //购买的流程

        //跳转到用户主页
        hashHistory.push('/User');
    }
    storeHandle(){
        //收藏事件
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if(this.state.isStore){
            //当前商户已经被收藏,点击时即取消收藏
            storeActions.rm({id:id})
        }else{
            //当前商户未被收藏,点击时即执行收藏
            storeActions.add({id:id})
        }

        //修改状态
        this.setState({
            isStore:!this.state.isStore
        })
    }
    //验证登录
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if(!userinfo.username){
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false;
        }
        return true;
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
function mapStateToProps(state){
    return {
        userinfo:state.userinfo,
        store : state.store
    }
}
function MapDispatchToProps(dispatch){
    return {
        storeActions : bindActionCreators(storeActionsFromFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    MapDispatchToProps
)(Buy)