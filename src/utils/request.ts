import axios from "axios";
import { Toast } from "antd-mobile";

// 创建 axios 实例
const service = axios.create({
  timeout: 10000, // 请求超时时间
},);

const err = (error: any) => {
  if (error.response) {
    Toast.show(error.response.data.message);
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (true) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpoYW5ndGFvMjUiLCJpZCI6MSwicm9sZXMiOlsiIl0sImlhdCI6MTY1NDk2MTE4MiwiZXhwIjoxOTcwNTM3MTgyfQ.VbHgEEB4TztwrSaSIdWjf8hX9fsSYqkbHydFus_opaI`,
        },
      };
    }
    return config;
  },
  err,
);

service.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  err,
);

export default service;
