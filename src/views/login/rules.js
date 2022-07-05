export const validatePassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入密码'))
  }
  if (value.length < 7) {
    callback(new Error('密码不能少于7位'))
  } else {
    callback()
  }
}
export const validateCode=(rule, value, callback)=>{
  if(!value){
    callback(new Error('请输入邮箱'))
  }
}