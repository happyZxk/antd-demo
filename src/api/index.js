import axios from 'axios';
import qs from 'qs';
// 通过NODE_ENV来设置环境变量，如果没有指定则默认为生产环境
var env = process.env.NODE_ENV || 'production';
env = env.toLowerCase();
axios.defaults.baseURL = env == 'development' ? 'http://127.0.0.1:3003/' : 'http://shuchao.ddbb.jpl56.com/';//服务器或者你项目的后台接口地址
axios.defaults.withCredentials = true;//允许请求头携带cookie
let http = {
    post: '',
    get: ''
}
http.get = function (api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.get(api, params)
            .then(res => {
                resolve(res);
            })
            .catch(res => {
                reject(res);
            })
    })
}
http.post = function (api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.post(api, params)
            .then(res => {
                resolve(res)
            })
            .catch((res) => {
                reject(res)
            })
    })
}
export default http;
