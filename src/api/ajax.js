/*
ajax 请求函数模块
*/
import axios from 'axios'

/**
 * 对外暴露一个函数
 */
export default function aj(url, data={},type='GET') {
    return new Promise(function(resolve,reject) {
      // 定义对象
      let promise;
      // 通过传来的type类型发送不同的请求
      if (type === "GET") {
        // get请求 将参数拼接到url路径后面
        let dataStr ; 
        Object.keys(data).forEach(item => {
          dataStr += item + '=' + data[item] + '&';
        })
        if (dataStr !== '') {
          dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
          url = url + '?' + dataStr;
        }
        promise = axios.get(url);
      }else {
        // 发送 post 请求
        promise = axios.post(url, data)
      }
      promise.then(response => {
        // 成功回调resolve()
        resolve(response.data)
      })
        .catch(error => {
          // 失败回调reject()
          reject(error)
        })
    })
}
/**
 * 向外部暴露一个函数 ajax
 * @param {*} url 请求路径，默认为空
 * @param {*} data 请求参数，默认为空对象
 * @param {*} type 请求方法，默认为GET
 */
export default function ajax (url = '', data = {}, type = 'GET') {
  // 返回值 Promise对象 （异步返回的数据是response.data，而不是response）
  return new Promise(function (resolve, reject) {
    // （利用axios）异步执行ajax请求
    let promise // 这个内部的promise用来保存axios的返回值(promise对象)
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' // 数据拼接字符串，将data连接到url
      // 通过object方法 得到这个对象中的全部keys值，并循环得到这个value的值。然后拼接到url路径后面
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        // 截取
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      // 成功回调resolve()
      resolve(response.data)
    })
      .catch(error => {
        // 失败回调reject()
        reject(error)
      })
  })
}
