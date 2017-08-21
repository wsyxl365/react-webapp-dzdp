import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import {connect} from 'react-redux'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
                {this.props.userinfo.cityName ? <List cityName={this.props.userinfo.cityName}/> : null }
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function MapDispatchToProps(dispatch){
    return {

    }
}
export default connect(
    mapStateToProps,
    MapDispatchToProps
)(Home)

