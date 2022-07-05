import axios from 'axios'
import loading from './loading'
const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 5000
})
service.interceptors.request.use((config) => {
  loading.open()
  // TODO 将token请求头发送给后台

  return config
}, (err) => {
  loading.close()
  return Promise.reject(err)
})

service.interceptors.response.use((res) => {
  loading.close()
  return res
}, (err) => {
  loading.close()
  // TODO token过期处理

  return Promise.reject(err)
})
export default service
