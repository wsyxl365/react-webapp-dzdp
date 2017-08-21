import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            initDone : false
        }
    }

    componentDidMount(){

        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null){
            cityName = '北京'
        }

        //将城镇信息存储到redux中
        this.props.userInfoActions.update({
            cityName
        })
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

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
)(App)
