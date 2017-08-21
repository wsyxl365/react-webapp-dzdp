import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OrderListItem from './item/index';
import './style.less'


class OrderListTpl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const data = this.props.orderListData;
        const submitComment = this.props.submitComment;
        return (
            <div>
                {
                    data.map((item,index)=>{
                        return <OrderListItem key={index} data={item} submitComment={submitComment}/>
                    })
                }
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = OrderListTpl;