
import bookService from '../services/bookService.js';
import bookList from '../cmps/book-list-cmp.js';
import bookFilter from '../cmps/book-filter-cmp.js';
import bookDetails from './book-details-cmp.js';

export default {
    template: `
        <section class="book-app wrapper">
            <book-filter
                @filtered="setFilter"
            >
            </book-filter>

            <book-list class="grid items-center"
                :books="booksToShow"
            >
            </book-list>
        </section> 
    `,
    components: {
        bookList,
        bookFilter,
        bookDetails,
    },
    data() {
        return {
            books: [],
            filterBy: {
                byName: '',
                fromPrice: null,
                toPrice: null
            }
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        booksToShow() {
            var booksToShow =  this.books.slice();

            if (this.filterBy.title) {
                booksToShow = booksToShow.filter(book => {
                    return book.title.includes(this.filterBy.title.toLowerCase());
                });
            }
            
            if (this.filterBy.fromPrice > 0) {
                booksToShow = booksToShow.filter(book => {
                    return book.listPrice.amount >= this.filterBy.fromPrice
                });
            }

            if (this.filterBy.toPrice > 0) {
                booksToShow = booksToShow.filter(book => {
                    return book.listPrice.amount <= this.filterBy.toPrice
                });
            }
            return booksToShow;
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    }
}