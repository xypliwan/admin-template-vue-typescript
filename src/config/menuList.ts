export default [
    {
        "id": "1",
        "name": "模块1",
        "menu_icon": "icon-wode",
        "menu_lev": "1",
        "path": "test",
        "children": [
            {
                "id": "1-1",
                "name": "页面1",
                "menu_icon": "icon-wode",
                "menu_lev": "2",
                "path": "/test/page1",
                "parent": "1"
            },
            {
                "id": "1-2",
                "name": "页面2",
                "menu_icon": "icon-wode",
                "menu_lev": "2",
                "path": "/test/page2",
                "parent": "1",
            },


        ]
    },
    {
        "id": "2",
        "name": "模块2",
        "menu_icon": "icon-yunying",
        "menu_lev": "2",
        "path": "test",
        "children": [
            {
                "id": "2-1",
                "name": "页面3",
                "menu_icon": "icon-wode",
                "menu_lev": "2",
                "path": "/test/page3",
                "parent": "2"
            },
            {
                "id": "2-2",
                "name": "页面4",
                "menu_icon": "icon-wode",
                "menu_lev": "2",
                "path": "/test/page4",
                "parent": "2"
            },
        ]
    },
    {
        "id": "3",
        "name": "页面5",
        "menu_icon": "icon-peizhi",
        "menu_lev": "1",
        "path": "/test/page5",
        "parent": "",
    }
]