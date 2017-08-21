import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {createStore} from 'redux'
import infoReduce from './redux/infoReduce'
let store = createStore(infoReduce);

class Test extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            infoData: store.getState()
        }
    }
    addClick(){
        store.dispatch({
            type:"INFO_ADDCLICK"
        })
        this.setState({
            infoData: store.getState()
        })
    }
    render() {
        return (
            <div>
                <h2>新闻标题:{this.state.infoData.title}</h2>
                <span>点击量:{this.state.infoData.clicknum}</span>
                <div>
                    <button onClick={this.addClick.bind(this)}>修改点击量</button>
                </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = Test