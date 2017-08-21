import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {getCommentData} from '../../../fetch/detail/detai'
import CommentList from '../../../components/CommentList/index'
import LoadMore from '../../../components/LoadMore/index'
class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data : [], //存储评论列表信息
            hasMore : false, //记录当前状态下，还有没有更过的信息可供加载
            isLoadingMore:false,//记录当前状态下，是"加载中.."还是"点击加载更多"
            page : 1 //下一页评论的页码
        }
    }
    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ?
                        <CommentList data={this.state.data}/>
                    :
                        <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        :
                        <div></div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstPageData();
    }
    loadFirstPageData(){
        const id = this.props.id;
        const page = this.state.page;
        let result = getCommentData(page,id);
        this.resultHandle(result);
    }
    //加载更多评论
    loadMoreData(){
        //记录状态
        this.setState({
            isLoadingMore:true
        })

        const id = this.props.id;
        const page = this.state.page;
        let result = getCommentData(page,id);
        this.resultHandle(result);

        //记录状态
        this.setState({
            page:page + 1,
            isLoadingMore:false
        })
    }
    //数据处理函数
    resultHandle(result){
        result.then((resposn)=>{
            return resposn.json()
        }).then(json=>{
            const hasMore = json.hasMore;
            const data = json.data;
            console.log(data);
            //储存
            this.setState({
                hasMore,
                data : this.state.data.concat(data)
            })
        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = Comment;