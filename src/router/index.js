import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             redirect: '/login'
//         },
//         {
//             path: '/pro/:type',
//             component: resolve => require(['../components/common/Home.vue'], resolve),
//             children:[
//                 {
//                     path: '/',
//                     component: resolve => require(['../components/page/Readme.vue'], resolve),
//                     meta: {
//                         requireAuth: true,      //表示这个路由是需要登录的
//                     }

//                 },
//                 {
//                     path: 'brand',
//                     component: resolve => require(['../components/page/Brand.vue'], resolve),
//                      meta: {
//                         requireAuth: true,      //表示这个路由是需要登录的
//                     }
//                 },
//                 {
//                     path: 'compare',
//                     component: resolve => require(['../components/page/VueEditor.vue'], resolve),    // Vue-Quill-Editor组件
//                      meta: {
//                         requireAuth: true,      //表示这个路由是需要登录的
//                     }
//                 },
//                 {
//                     path: 'pro',
//                     component: resolve => require(['../components/page/Markdown.vue'], resolve),     // Vue-Quill-Editor组件
//                      meta: {
//                         requireAuth: true,      //表示这个路由是需要登录的
//                     }
//                 },
//                 {
//                     path: 'newpro',
//                     component: resolve => require(['../components/page/Upload.vue'], resolve),       // Vue-Core-Image-Upload组件
//                      meta: {
//                         requireAuth: true,      //表示这个路由是需要登录的
//                     }
//                 },
//                 {
//                     path: 'onlineMarket',
//                     component: resolve => require(['../components/page/MixCharts.vue'], resolve),    // vue-echarts-v3组件
//                      meta: {
//                         requireAuth: true,      //表示这个路由是需要登录的
//                     }
//                 }
//             ]
//         },
//         {
//             path: '/login',
//             component: resolve => require(['../components/page/Login.vue'], resolve)
//         },
//     ]
// });
const routes = [{
    path: "/",
    redirect: '/login'
}, {
    path: '/pro/:type',
    components: resolve => require(['../components/common/Home.vue'], resolve),
    children: [{
        path: "/",
        components: resolve => require(['../components/page/Readme.vue'], resolve),
        meta: {
            requireAuth: true,         //表示这个路由需要登录
        },
        path: "brand",
        components: resolve => require(['../components/page/Brand.vue'], resolve),
        meta: {
            requireAuth: true
        }
    }]
}, {
    path: "/login",
    components: resolve => require(['../components/page/Login.vue'], resolve)
}];
const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: "/login",
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }

});


export default router;
