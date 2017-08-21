import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStore
                            ? <button onClick={this.storeClickHandle.bind(this)}>已收藏</button>

                            : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
    buyClickHandle() {
        const buyHandle = this.props.buyHandle;
        buyHandle();
    }
    storeClickHandle() {
        const storeHandle = this.props.storeHandle;
        storeHandle();
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = BuyAndStore;