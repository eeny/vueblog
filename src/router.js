import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

const routes = [
    {
        path: "/list",      // 브라우저에서 접속할 경로
        component: List,    // 보여줄 컴포넌트
        // component: {
        //     List: List,
        //     Comment: Comment,   // named views 여러개 컴포넌트 보여줄 때
        // }
    },
    {
        path: "/",
        component: Home,
    },
    {
        path: "/detail/:id",    // :작명(파라미터), /:id1/:id2/... 여러 개 가능, /:id(\\d+) 정규식 가능, /:id* 반복 가능
        component: Detail,
        children: [ // nested routes특정 페이지 안에서 route를 나눌 때
            {
                path: "author",     // 상대경로로 기입해야함
                component: Author,
            },
            {
                path: "comment",
                component: Comment,
            }
        ]
    },
    // {
    //     path: "/:anything(.*)",  // 404 에러 페이지 가능
    //     component: Home,
    // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 