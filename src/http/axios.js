import axios from 'axios';
import config from './config';
import Cookies from 'js-cookie';
import router from '../router';

export default function $axios (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials
    });
    // request 请求拦截器
    instance.interceptors.request.use(
      config => {
        let token = Cookies.get('token');
        if (token) {
          config.headers.token = token;
        } else {
          router.push('/login');
        }
        return config;
      },
      err => { return Promise.reject(err) }
    );
    // response 响应拦截器
    instance.interceptors.response.use(
      resp => { return resp.data },
      err => { return Promise.reject(err) }
    );
    // 请求处理
    instance(options).then(res => {
      resolve(res);
      return false;
    }).catch(err => { reject(err) })
  })
}