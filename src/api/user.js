import service from "../utils/request"
export const captcha = () => {
  console.log('cap')
  return service({ url: '/captcha', method: 'GET' })
}
/**
 * 用户登录接口
 * @param {*} data
 * @returns
 */
export const login = (data) => {
  console.log(data)
  return service({ url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`, method: 'POST' })
}

