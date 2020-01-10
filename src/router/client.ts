import MasterLayout from "@/views/layout/master.vue";
//客户
export default [
    {
        path: "/client",
        component: MasterLayout,
        // redirect: '/client/client-manage',
        children: [
            {
                path: "client-manage",           //客户管理
                name: "client-manage",
                component: () => import("_v/client/clientManage/index.vue"),
                meta: {
                    title: "客户管理",
                    name: "client-manage",
                    authentication: true,
                    keepAlive: true
                }
            },
            {
                path: "bill",           //账单
                name: "bill",
                component: () => import("_v/client/bill/index.vue"),
                meta: {
                    title: "账单",
                    name: "bill",
                    authentication: true,
                    keepAlive: true
                }
            }
        ]
    }
]


