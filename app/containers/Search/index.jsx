import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from './../../components/SearchHeader/index'
import List from './subpage/List'
import {connect} from 'react-redux'
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}/>
                <List keyword={this.props.params.keyword} category={this.props.params.type} cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}


// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Search
function mapStateToProps(state){
    return {
        userinfo : state.userinfo
    }
}
function MapDispatchToProps(dispatch){
    return {

    }
}
export default connect(
    mapStateToProps,
    MapDispatchToProps
)(Search)