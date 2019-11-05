import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'http://127.0.0.1:3003/';
//服务器或者你项目的后台接口地址
axios.defaults.withCredentials = true;//允许跨域请求头携带cookie
//POST /PUT 请求主体传递给服务器的内容统一处理为X-WWW-URL-ENCODED格式
axios.defaults.transformRequest = (data = {}) => qs.stringify(data);
// 相应拦截器:把服务器返回的信息中响应主体内容拦截返回,以后再THEN中获取的结果就是主题内容
axios.interceptors.response.use(result => result.data);
export default axios;
