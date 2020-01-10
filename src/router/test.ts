import MasterLayout from "@/views/layout/master.vue";
//客户
export default [
    {
        path: "/test",
        component: MasterLayout,
        // redirect: '/client/client-manage',
        children: [
            {
                path: "page1",
                name: "page1",
                component: () => import("_v/page1/index.vue"),
                meta: {
                    title: "页面1",
                    name: "page1",
                    authentication: true,
                    keepAlive: true
                }
            },
            {
                path: "page2",
                name: "page2",
                component: () => import("_v/page2/index.vue"),
                meta: {
                    title: "页面2",
                    name: "page2",
                    authentication: true,
                    keepAlive: true
                }
            },
            {
                path: "page3",
                name: "page3",
                component: () => import("_v/page3/index.vue"),
                meta: {
                    title: "页面3",
                    name: "page3",
                    authentication: true,
                    keepAlive: true
                }
            },
            {
                path: "page4",
                name: "page4",
                component: () => import("_v/page4/index.vue"),
                meta: {
                    title: "页面4",
                    name: "page4",
                    authentication: true,
                    keepAlive: true
                }
            },
            {
                path: "page5",
                name: "page5",
                component: () => import("_v/page5/index.vue"),
                meta: {
                    title: "页面5",
                    name: "page5",
                    authentication: true,
                    keepAlive: true
                }
            }
        ]
    }
]


