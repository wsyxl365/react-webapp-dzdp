import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from './../../../fetch/detail/detai'
import DetailInfo from './../../../components/DetailInfo/index'
class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state= {
            info: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                    ?
                        <DetailInfo data={this.state.info}/>
                    :
                        ''
                }
            </div>
        )
    }
    componentDidMount(){
        var id = this.props.id;
        var result = getInfoData(id);
        result.then(response=>{
            return response.json();
        }).then(json=>{
            this.setState({
                info : json
            })
        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = Info