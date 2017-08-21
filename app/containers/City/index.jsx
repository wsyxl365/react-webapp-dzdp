import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from './../../actions/userinfo'
import Header from './../../components/Header/index'
import CurrentCity from './../../components/CurrentCity/index'
import CityList from './../../components/CityList/index'
import localStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'
import {hashHistory} from 'react-router'
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity){
        if(newCity == null){
            return
        }
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);
        //修改localStorage
        localStore.setItem(CITYNAME,newCity);
        //跳转到首页
        hashHistory.push('/');
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
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
)(City)