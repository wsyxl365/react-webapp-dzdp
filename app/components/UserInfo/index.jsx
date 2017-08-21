import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"></i>
                    {this.props.username}
                </p>
                <p>
                    <i className="icon-map-marker"></i>
                    {this.props.cityName}
                </p>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = UserInfo;