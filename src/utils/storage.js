/**
 * set存入
 * @param {*} key
 * @param {*} value
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}
/**
 * get获取
 * @param {*} key
 * @returns
 */
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}
/**
 * remove删除
 * @param {*} key
 */
export const removeItem = (key) => {
  localStorage.removeItem(key)
}
/**
 * clear清除
 */
export const clearItem = () => {
  localStorage.clear()
}
