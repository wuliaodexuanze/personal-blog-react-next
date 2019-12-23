import axios from 'axios'
import {
  message,
  notification
} from 'antd'
import {
  getToken,
  saveAccessToken
} from './token'
import ErrorCode from '../config/error-code'
import 'antd/es/message/style/index.css'
import 'antd/es/notification/style/index.css'


const config = {
  baseURL: 'http://localhost:5000',
  timeout: 5 * 1000, // 请求超时时间
  crossDomain: true,
  validateStatus(status) {
    return status >= 200 && status < 510;
  }
}

const http = axios.create(config);

http.interceptors.request.use((originConfig) => {
  message.destroy();
  const reqConfig = { ...originConfig };
  if (!reqConfig.url) {
    console.error('请求需要url');
    throw new Error({
      source: 'axiosInterceptors',
      message: '请求需要url'
    })
  }

  // 设置默认请求
  if (!reqConfig.method) {
    reqConfig.method = 'get';
  }

  // 请求大写处理
  reqConfig.method = reqConfig.method.toLowerCase();

  // 参数处理
  if (reqConfig.method === 'get') {
    // get请求的时候，参数以data方式传递
    if (!reqConfig.params) {
      reqConfig.params = reqConfig.data || {};
    }
  } else if (reqConfig.method === 'post') {
    // 同理上面
    if (!reqConfig.data) {
      reqConfig.data = reqConfig.params || {};
    }
    // 检查是否包含文件类型，若包含则进行 formData 封装
    let hasFile = false;
    Object.keys(reqConfig.data).forEach((key) => {
      if (typeof reqConfig.data[key] === 'object') {
        const item = reqConfig.data[key];
        if (item instanceof FileList || item instanceof File || item instanceof Blob) {
          hasFile = true;
        }
      }
    });

    // 检测到文件，进行 formData 处理
    if (hasFile) {
      const formData = new FormData();
      Object.keys(reqConfig.data).forEach((key) => {
        formData.append(key, reqConfig.data[key]);
      });
      reqConfig.data = formData;
    }
  }else {
    console.warn(`其他请求类型：${reqConfig.method}，暂无自动处理`);
  }

  // 用户登录信息处理
  if (reqConfig.url === 'cms/user/refresh') {
    const refreshToken = getToken('refresh_token')
    if (refreshToken) {
      // eslint-disable-next-line no-param-reassign
      reqConfig.headers.Authorization = refreshToken
    }
  } else {
    // 有access_token
    const accessToken = getToken('access_token')
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      reqConfig.headers.Authorization = accessToken
    }
  }

  return reqConfig;

}, (err) => {
  Promise.reject(err);
});

http.interceptors.response.use(async (res) => {
  message.destroy();
  let { error_code, msg } = res.data;
  if (res.status.toString().charAt(0) === '2') {
    return res.data;
  }

  return new Promise(async (resolve, reject) => {
    const { params, url } = res.config;

    if (error_code === 10000 || error_code === 10100) {
      message.error(msg);
      // token失效直接跳到登录页面
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
      resolve(res.data);
      return
    }

    // refresh_token 异常，直接登出
    if (error_code === 10000 || error_code === 10100) {
      setTimeout(() => {
        // 执行登出操作
        // const { origin } = window.location
        // window.location.href = origin
      }, 1500)
      resolve(null)
      return
    }

    // 令牌相关，刷新令牌
    if (error_code === 10040 || error_code === 10050) {
      const cache = {}
      if (cache.url !== url) {
        cache.url = url
        const refreshResult = await http('cms/user/refresh')
        saveAccessToken(refreshResult.access_token)
        // 将上次失败请求重发
        const result = await http(res.config)
        resolve(result)
        return
      }
    }

    if (params && params.handleError) {
      reject(res);
      return;
    } else {
      const errorArr = Object.entries(ErrorCode).filter(v => v[0] === error_code.toString())
      // 匹配到前端自定义的错误码
      if (errorArr.length > 0) {
        if (errorArr[0][1] !== '') {
          msg = errorArr[0][1]
        } else {
          msg = ErrorCode['777']
        }
      }
    }
    console.log('msg', msg);
    message.error(msg);

    resolve(res.data);
  });
}, (err) => {
  if (!err.response) {
    notification.error({
      message: 'Network Error',
      description: '请检查 API 是否异常'
    });

    console.log('error', err);
  }
  
  if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
    message.warning('请求超时');
  }

  return Promise.reject(err);
});

/**
 * 
 * @param {*} url 
 * @param {*} params 
 */
export function get(url, params={}) {
  return http({
    method: 'get',
    url,
    params
  });
}

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} params 
 */
export function post(url, data = {}, params = {}) {
  return http({
    method: 'post',
    url,
    data,
    params,
  })
}

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @param {*} params 
 */
export function put(url, data = {}, params = {}) {
  return http({
    method: 'put',
    url,
    params,
    data,
  })
}

/**
 * 
 */
export function del(url, params = {}) {
  return http({
    method: 'delete',
    url,
    params,
  })
}

export default http;
