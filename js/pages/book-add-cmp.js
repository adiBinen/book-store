
import utilService from '../services/utilService.js'
import bookService from '../services/bookService.js';
import { eventBus, EVENT_SUCCESS, EVENT_FAIL } from '../event-bus.js'

export default {
    template: `
        <section class="bookAdd">
                <h2>Book Add</h2>
                <input type="search" @input="searchBook" v-model="bookNameToSearch">
                <ul v-if="booksRes">
                    <li v-for="book in booksRes.items" :key="book.id">
                        {{book.volumeInfo.title}} <button @click="addBook(book)">+</button>
                    </li>
                </ul>
        </section> 
    `,
    data() {
        return {
            bookNameToSearch: null,
            booksRes: null
        }
    },
    methods: {
        searchBook() {
            console.log('input', this.bookNameToSearch);
            var booksStorage = utilService.loadFromStorage('testBooks');
            console.log('booksStorage', booksStorage);
            if (!booksStorage) {
                bookService.searchBook(this.bookNameToSearch)
                    .then((books) => {
                        utilService.saveToStorage('testBooks', books);
                        this.booksRes = books;
                    })
            } else this.booksRes = booksStorage;
        },
        // searchBook() {
        //     bookService.searchBook(this.bookNameToSearch)
        //         .then((books) => {
        //             this.booksRes = books;
        //         })
        // },
        addBook(book) {
            console.log('book to add:', book);
            bookService.addGoogleBook(book)
                .then((book) => {
                    eventBus.$emit(EVENT_SUCCESS, book.title);
                })
                .catch((bookExist) => {
                    eventBus.$emit(EVENT_FAIL, bookExist.title);
                })
        }
    },
    computed: {
        allBooks() {
            return this.booksRes;
        }
    },
    created() {
    }
}