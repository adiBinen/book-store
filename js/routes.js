
import homeCmp from './pages/home-cmp.js'
import aboutCmp from './pages/about-cmp.js'
import bookApp from './pages/book-app-cmp.js'
import bookDetails from './pages/book-details-cmp.js'
import addBook from './pages/book-add-cmp.js'

const routes = [
    { path: '/', component: homeCmp },
    { path: '/about', component: aboutCmp },
    { path: '/book', component: bookApp },
    { path: '/book/:bookId', component: bookDetails },
    { path: '/addBook', component: addBook },
]

export default routes;