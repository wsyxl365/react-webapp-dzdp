import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {getSearchData} from '../../../fetch/search/search'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

//初始化一个组件的 state
const initialState = {
    data : [], //存储列表信息
    hasMore : false, //记录当前状态下，还有没有更过的信息可供加载
    isLoadingMore : false, //记录当前状态下，是"加载中.."还是"点击加载更多"
    page : 0 //下一页的页码
}

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ?
                        <ListComponent data={this.state.data}/>
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
        //获取首页数据
        this.loadFirstPageData()
    }

    //加载更多的数据方法
    loadMoreData(){
        //用到this.resultHandle方法
        //记录状态
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.cityName;
        const keyword = this.props.keyword ||'';
        const category = this.props.category;
        const page = this.state.page //下一页的页码
        const result = getSearchData(page,cityName,category,keyword);
        this.resultHandle(result);

        //增加 page 的计数
        this.setState({
            page:page + 1,
            isLoadingMore:false,
        })
    }

    //加载首页的数据方法
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const keyword = this.props.keyword ||'';
        const category = this.props.category;
        const result = getSearchData(0,cityName,category,keyword);
        this.resultHandle(result);
    }
    //数据处理函数
    resultHandle(result){
        result.then((resposn)=>{
            return resposn.json()
        }).then(json=>{
            const hasMore = json.hasMore;
            const data = json.data;
            //储存
            this.setState({
                hasMore,
                data : this.state.data.concat(data)
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        console.log(123);
        const keyword = this.props.keyword;
        const category = this.props.type;
        //搜索条件完全相等时，忽略。重要！！！
        if(keyword === prevProps.keyword && category == prevProps.type){
            return
        };
        //重置 state
        this.setState(initialState);

        //重新加载数据
        this.loadFirstPageData();
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = List;
