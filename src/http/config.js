import { baseUrl } from '../utils/global'

export default {
  method: 'get',
  baseUrl: baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {},
  timeout: 1000,
  withCredentials: true,
  responseType: 'json'
}