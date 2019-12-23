import axios from 'axios'

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

  return reqConfig;

}, (err) => {
  Promise.reject(err);
});

http.interceptors.response.use(async (res) => {
  if (res.status.toString().charAt(0) === '2') {
    return res.data;
  }
  return new Promise(async (resolve, reject) => {
    resolve(res.data);
  });
}, (err) => {
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
