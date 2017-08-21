import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {getOrderListData , postComment} from './../../../fetch/user/orderlist';
import OrderListTpl from './../../../components/OrderList/index';
class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data : []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ?
                        <OrderListTpl orderListData = {this.state.data} submitComment={this.submitComment.bind(this)}/>
                    :
                        <div>亲，还有没有订单哦</div>
                }
            </div>
        )
    }
    componentDidMount(){
        const username = this.props.username;
        if(username){
            this.getOrderData(username);
        }

    }
    getOrderData(username){
        getOrderListData(username)
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    data : json
                });
                console.log(json)
            })
    }
    //提交评价
    submitComment(id,value,callback){
        const result = postComment(id , value)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            if(json.errno === 0){
                //已经评价，修改状态
                callback();
            }
        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = OrderList;