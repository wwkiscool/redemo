import React, {Component} from 'react';
import axios from '../../utils/axiosUtils';
import HeaderComponent from '../../common/header/header'

export default class you extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameList: []
        }
    }

    jsonp = (obj) => {
        window['__jp0'] = function (object) {
            obj.success(object)
        }
        let script = document.createElement('script');
        script.src = obj.url;
        for (let key in obj.data) {
            script.src += '&' + key + '=' + obj.data[key]
        }
        document.getElementsByTagName('body')[0].appendChild(script);
    }

    gameComponent = (params) => {
        console.log(params)
        return (
            params.map((item) => (
                <div key={item.id} className='game_card'>
                    <div className='card_left'>
                        <img src={item.icon} />
                    </div>
                    <div>{item.game_name}</div>
                    <div>{item.features}</div>
                </div>
            ))

        )
    }

    componentDidMount() {
        console.log(window.navigator)
        this.jsonp({
            url: 'http://yutang.8090.com/app.php/Game/get_h5game_lists_by_type?',
            data: {
                p: 1,
                version: 1,
                callback: '__jp0'
            },
            success: (res) => {
                console.log(res)
                if (res.status == 1) {
                    this.setState({
                        gameList: res.data
                    })
                }
            },
            fail: (e) => {
                console.warn(e)
            }
        })


    }

    render() {
        return (
            <div className='game_wrapper'>
                <HeaderComponent title='游戏列表' backText='返回'></HeaderComponent>
                {
                    this.gameComponent(this.state.gameList)
                }
            </div>
        )
    }
}