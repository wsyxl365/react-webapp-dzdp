import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li><span onClick={this.clickHandle.bind(this,'北京')}>北京</span></li>
                    <li><span onClick={this.clickHandle.bind(this,'上海')}>上海</span></li>
                    <li><span onClick={this.clickHandle.bind(this,'杭州')}>杭州</span></li>
                    <li><span onClick={this.clickHandle.bind(this,'广东')}>广东</span></li>
                    <li><span onClick={this.clickHandle.bind(this,'合肥')}>合肥</span></li>
                    <li><span onClick={this.clickHandle.bind(this,'南京')}>南京</span></li>
                </ul>
            </div>
        )
    }
    clickHandle(newCity){
        let changeFn = this.props.changeFn;
        changeFn(newCity)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = CityList;