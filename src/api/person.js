import axios from './index';

//= 验证是否登录的方法
export function checkLogin() {
  return axios.get('/personal/login');
}
//=>获取个人信息
export function queryInfo() {
  return axios.get('/personal/info');
}
//=>退出登录
export function exitLogin() {
  return axios.get('/personal/out');
}
