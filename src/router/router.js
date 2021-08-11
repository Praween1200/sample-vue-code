import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        name:'home',
        component:HelloWorld,
        meta:{
            isPublic:true
        }
    }
]
const router = new VueRouter({
    mode:'history',
    base:process.env.Base_URL,
    routes
})

router.beforeResolve((to,from,next) => {
    next();
})