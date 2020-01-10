import axios from '@/utils/axios'
//用户模块

// 登陆
export function login(data: any = {}) {
    return axios({
        url: `/login/login`,
        method: "post",
        data
    })
};

//获取用户信息
export function getUserInfo() {
    return axios({
        url: `/user/get-user-info`,
        method: "get",
    })
}

//退出登录
export function logout() {
    return axios({
        url: `/login/loginout`,
        method: "get",
    })
}