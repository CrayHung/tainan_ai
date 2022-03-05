import axios from "axios"   // npm install axios
import { getStoreToken } from "./localstore"
import { serverUrl } from "./cfg"
import { clearStore } from "./localstore";


// 創建一個axios instance
// ==> 方便後續的request, response攔截處理等的coding
// ==> and encapsulation for http methods - get, post, put, del
const instance = axios.create({
    baseURL: serverUrl,
    // headers: { 'Content-Type': 'application/json' },
    timeout: 5000,
});


// request global interceptor, 發送request前攔截
instance.interceptors.request.use(
    function (config) {
        // before request is sent
        config.headers["Authorization"] = "Bearer " + getStoreToken();
        return config;
    },
    function (error) {
        // if request error
        return Promise.reject(error);
    }
);

// global response interceptor, 攔截返回的response
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // 攔截處理 response
        // console.log("response.status =", typeof(response.status))   // a number, 若未授權(token expired)是401

        return response.data;
    },
    // function (error) {
    //     // Any status codes that falls outside the range of 2xx cause this function to trigger
    //     // if response error
    //     // console.log(error.response.status)

    //     if (error.response.status === 401) {
    //         console.log("response.status =", response.status)
    //         window.location = '/login'
    //         // return <Redirect to={{ pathname: "/login" }} />
    //     }
    //     return Promise.reject(error);
    // }

    function (error) {
        if (401 === error.response.status) {
            window.alert("授權過期, 請重新登入")
            clearStore()
            window.location = '/login'
        } else {
            return Promise.reject(error);
        }
    }
);


const loginApi = (user) => {
    return post("/login", user);
}


// ** for CURD
// ** GET
// url: 請求url
// params: url參數
const get = (url, params) => {
    return instance.get(url, {
        params,
    });
}

// ** POST
const post = (url, data) => {
    return instance.post(url, data);
}

// ** PUT
const put = (url, data) => {
    return instance.put(url, data);
}

// ** DELETE
const del = (url) => {
    return instance.delete(url);
}

export {
    get,
    post,
    put,
    del,
    loginApi,
};