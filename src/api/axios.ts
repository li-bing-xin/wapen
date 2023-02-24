import axios from "axios";

export const baseURL = "/api";

const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export interface IData {
  code: number;
  message: string;
  data: any;
}

instance.interceptors.response.use((res) => {
  if (res.status >= 500) {
    alert("servr error.");
  } else if (res.status === 401) {
    alert("not signin, redirect to signin page.");
  } else if (res.status === 400) {
    alert("code has bug");
  } else if (res.status >= 200 && res.status < 300) {
    const { data, code, message } = res.data as IData;
    if (code !== 0) {
      alert(message);
      throw data; // code不为0时reject数据，在useAsyncState的onError中处理后续逻辑
    }
    return data; // code为0时resolve数据，在useAsyncState的onSuccess中处理后续逻辑
  }
  return;
});

export default instance;
