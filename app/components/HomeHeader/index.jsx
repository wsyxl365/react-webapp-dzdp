import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Link,hashHistory} from 'react-router'
import SearchInput from './../SearchInput/index'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            kwd:''
        }
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <Link to="/city" className="home-header-left float-left">
                    {this.props.cityName}
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </Link>
                <Link to="/login">
                    <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                </Link>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value){
       hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = HomeHeader