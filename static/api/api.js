import axios from 'axios'
import config from './config'
import Vue from 'Vue'
import { Notification} from 'element-ui'
Vue.prototype.$notify = Notification;
import Bus from '../../src/components/Bus'

/*
* 测试test
*/
let test = function() {
    axios.get(config.test).then(res => {
        console.log('this is test: ', res)
    }).catch(err => {
        console.log(err);
    })
}
/**
 * 登录
 */
let login = function (username, password) {
    axios.get(config.loginUrl, {
        params: {
            username: username,
            password: password
        }
    })
        .then(function (res) {
            console.log(res.data);
            if(res.data.status!==200){
                console.log('登陆失败')
                Vue.prototype.$notify({
                    title: '登录失败',
                    message: '请检查账户',
                    type: 'error',
                    offset:50,
                    duration: 1000
                })
                return false;
            }else if(res.data.status===200){
                Vue.prototype.$notify({
                    title: '登录成功',
                    message: `你好,${res.data.data[0].nickname}!`,
                    type: 'success',
                    offset:50,
                    duration: 1000
                })
                console.log('登陆成功')
                sessionStorage.setItem('userInfo', JSON.stringify(res.data.data[0]));
                Bus.$emit('userInfo',JSON.stringify(res.data.data[0]))
                return true;
            }
        })
        .catch(function (error) {
            console.log(error);
        });  
}
let getChoiceList = function(){
    axios.get(config.getChoiceList).then(res => {
        Bus.$emit('getChoiceList')
    }).catch(err => {
        console.log(err);
    })
}
export default {
    test,
    login,
    getChoiceList
}