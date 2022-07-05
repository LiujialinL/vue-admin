/**
 * 检测数据类型
 * @param {*} data 
 * @returns 
 */
const checkDataType = (data) => {
  const dataType = Object.prototype.toString.call(data)
  const dataTypeOptions = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return dataTypeOptions[dataType]
}
/**
 * 深拷贝
 * @param {*} data 
 * @return
 */
const deepcopy = (data) => {
  const type = checkDataType(data)
  let params = null
  if (type === 'array') {
    params = []
    for (let i = 0; i < data.length; i++) {
      params.push(deepcopy(data[i]))
    }
  } else if (type === 'object') {
    params = {}
    for (let i = 0; i < data.length; i++) {
      params[i] = deepcopy(data[i])
    }
  } else {
    return data
  }
  return params
}

export default { deepcopy }