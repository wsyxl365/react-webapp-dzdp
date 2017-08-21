import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
           <div id="home-ad">
               <h2>超值特惠</h2>
               <div className="ad-container clear-fix">
                   {data.map((item,index)=>{
                       return <div key={index} className="ad-item float-left">
                           <a href={item.link} target="_blank">
                               <img src={item.img}  alt=""/>
                           </a>
                       </div>
                   })}
               </div>
           </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = HomeAd