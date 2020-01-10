
//页面卡片config
export interface TabConfig {
    title: string
    name: string
    authentication: boolean
    keepAlive: boolean
}

//删除tab时的索引
export interface DelTabIndex {
    start: number
    end: number
}

//用户信息
export interface UserInfoConfig {
    username: string
}