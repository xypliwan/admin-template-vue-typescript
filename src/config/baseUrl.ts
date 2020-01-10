
//接口地址

let baseURL: string;

if (process.env.NODE_ENV === 'production') {
    if (process.env.VUE_APP_FLAG === 'pro') {
        //production 生产环境
        baseURL = 'xxx-pro';
    } else if (process.env.VUE_APP_FLAG === 'test') {
        //test 测试环境
        baseURL = 'xxx-test';

    } else if (process.env.VUE_APP_FLAG === 'intr') {
        //intr 内网环境
        baseURL = 'http://172.16.0.117:8082/';
    }


} else {
    //dev 开发环境
    baseURL = 'http://172.16.0.117:8082/';
}

export default baseURL!;