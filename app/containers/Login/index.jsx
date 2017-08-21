import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import Header from '../../components/Header/index'
import LoginItem from '../../components/Login/index'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            checking:true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                    ?
                        <div>{/*等待中*/}</div>
                    :
                        <LoginItem loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount(){
        this.doCheck();
    }

    loginHandle(username){
        //登录成功之后的业务处理
        //保存用户名
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo);

        //跳转链接
        const params = this.props.params;
        const router = params.router;
        if(router){
            //跳转到指定的页面
            hashHistory.push(router)
        }else{
            //跳转到用户中心
            this.goUserPage()
        }
    }
    doCheck(){
        const userinfo = this.props.userinfo;
        if(userinfo.username){
            //已经登录
            this.goUserPage()
        }else{
            //尚未登录
            this.setState({
                checking:false
            })
        }
    }
    goUserPage(){
        hashHistory.push('/User')
    }
}

//redux查找userinfo信息
function mapStateToProps(state){
    return {
        userinfo : state.userinfo
    }
}
function MapDispatchToProps(dispatch){
    return {
        userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}
export default connect(
    mapStateToProps,
    MapDispatchToProps
)(Login)