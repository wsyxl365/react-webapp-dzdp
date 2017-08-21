import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import {hashHistory} from 'react-router'
import Header from './../../components/Header/index';
import UserInfo from './../../components/UserInfo/index';
import OrderList from './subpage/OrderList';
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const username = this.props.userinfo.username;
        const cityName = this.props.userinfo.cityName;
        return (
            <div>
                <Header title="用户中心" backRouter="/"/>
                <UserInfo username={username} cityName={cityName}/>
                <OrderList username={username}/>
            </div>
        )
    }

    componentDidMount(){
        if(!this.props.userinfo.username){
            hashHistory.push('/Login');
        }
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default User
function mapStateToProps(state){
    return {
        userinfo:state.userinfo,
    }
}
function MapDispatchToProps(dispatch){
    return {

    }
}
export default connect(
    mapStateToProps,
    MapDispatchToProps
)(User)