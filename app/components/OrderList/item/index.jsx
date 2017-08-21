import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class OrderListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            commentState : 2 //0:未评价 1:评价中 2:已评价
        }
    }
    render() {
        const data = this.props.data;
        console.log(this.state.commentState);
        return (
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0
                            ?
                                <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                            :
                                this.state.commentState === 1
                                ?
                                    <span>评价中...</span>
                                :
                                    <button className="btn unseleted-btn" disabled="true">已评价</button>
                        }

                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                    {
                        this.state.commentState === 1
                        ?
                            <div className="comment-text-container">
                                <textarea className="comment-text" ref="commentText" style={{width: '100%', height: '80px'}} ></textarea>
                                <button className="btn" onClick={this.submitClickHandle.bind(this)}>提交</button>
                                &nbsp;
                                <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                            </div>
                        : ''
                    }
            </div>
        )
    }
    showComment(){
        this.setState({
            commentState : 1
        })
    }
    hideComment(){
        this.setState({
            commentState : 0
        })
    }
    componentDidMount(){
        console.log('commentState',this.props.data.commentState);
        this.setState({
            commentState : this.props.data.commentState
        })
    }
    submitClickHandle(){
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const commentTextDom = this.refs.commentText;
        const value = commentTextDom.value.trim();
        if(!value){
            return;
        }
        //提交评论内容
        submitComment(id,value,this.commentOk.bind(this));
    }
    commentOk()
    {
        this.setState({
            commentState: 2
        })
    }
}
// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = OrderListItem;