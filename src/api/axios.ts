import axios from "axios";

const isDev = import.meta.env.DEV;

export const baseURL = !isDev ? "http://47.88.13.166:8888" : "/api";

const instance = axios.create({
    baseURL,
    timeout: 60 * 1000,
});

const token = localStorage.getItem("token");
if (token) instance.defaults.headers.common.authorization = token;

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
        const token = res.data?.accessToken;
        if (token) {
            localStorage.setItem("token", token);
            instance.defaults.headers.common["authorization"] = token;
        }
        if (res.data?.username) {
            localStorage.setItem("username", res.data.username);
        }
        // const { data, code, message } = res.data as IData;
        // if (code !== 0) {
        //   alert(message);
        //   throw data; // code不为0时reject数据，在useAsyncState的onError中处理后续逻辑
        // }
        // return data; // code为0时resolve数据，在useAsyncState的onSuccess中处理后续逻辑
    }
    return res;
});

export default instance;
