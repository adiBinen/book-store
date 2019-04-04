
import bookApp from './pages/book-app-cmp.js';
import headerCmp from './cmps/header-cmp.js';
import myRoutes from './routes.js';
import userMsg from './cmps/user-msg-cmp.js'

const myRouter = new VueRouter({routes: myRoutes})

window.vueApp = new Vue({
    el: '#app',
    router: myRouter,
    components: {
        headerCmp,
        userMsg,
        bookApp
    }
})
