
import reviewAdd from '../cmps/review-add-cmp.js'
import longText from '../cmps/long-text-cmp.js';
import bookService from '../services/bookService.js'


export default {
    template: `
        <section class="book-details" :class="{red: book.listPrice.amount > 150,
                green: book.listPrice.amount < 20 }" v-if="book">

            <a class="goBack" @click="goBack">Back</a>
            
            <div class="book-details-container wrapper flex">
                <img class="img-details" v-bind:src="getImg"/>
                <div class="details-container flex space-between">
                    <h1><strong>Title: </strong>{{book.title}}</h1>
                    <h3><strong>Subtitle: </strong>{{book.subtitle}}</h3>
                    <p>
                        <span
                        v-for="author in book.authors"
                        >
                            <strong>Author: </strong>{{author}}
                        </span>
                    </p>

                    <p><strong>Publish date: </strong>{{getDateInfo}}</p>

                    <p v-if="book.description.length < 100">
                        <strong>Description: </strong>{{book.description}} 
                    </p>
                    <long-text
                        v-else
                        v-bind:txt="book.description"
                    >
                    </long-text>

                    <p><strong>Number of pages: </strong>{{getPageCountInfo}}</p>
                    <p> <strong>Categories: </strong>
                        <span
                        v-for="catg in book.categories"
                        >
                            {{catg}}
                        </span>
                    </p>
                    <p><strong>Language: </strong> {{book.language}}</p>
                    <p><strong>Price: </strong>{{book.listPrice.amount}}{{getCurrency}} {{onSale}}</p>
                </div>
            </div>

            <ul>
                <li class="review" v-if="book.reviews" v-for="rev in book.reviews">
                    <div class="review-details"> 
                        {{rev.fullName}}
                        {{rev.stars}}
                        {{rev.readAt}}
                        {{rev.desc}}
                    </div>
                    <button @click="deleteReview(rev)">x</button>
                </li>
            </ul>
            
            <review-add @reviewAdded="addReview" :book="book"></review-add>

        </section> 
    `,
    components: {
        reviewAdd,
        longText
    },
    data() {
        return {
            book: null,
        }
    },
    methods: {
        addReview(review) {
            if (!this.book.reviews) {
                this.$set(this.book, 'reviews', [])
            }
            bookService.addReview(this.book.id, review)
        },
        deleteReview(rev) {
            bookService.deleteReview(this.book, rev);
        },
        goBack() {
            this.$router.go(-1);
        }
    },
    computed: {
        bookChange() {
            return this.book
        },
        getPageCountInfo() {
            var numOfPages = this.book.pageCount;
            if (numOfPages > 500) return numOfPages + '  - Long reading';
            else if (numOfPages > 200) return numOfPages + ' - Decent Reading';
            return numOfPages + ' Light Reading';
        },
        getDateInfo() {
            var year = new Date(Date.now()).getFullYear() - new Date(this.book.publishedDate).getFullYear();
            if (year > 10) return this.book.publishedDate + ' - Veteran Book';
            if (year < 1) return this.book.publishedDate + ' - New!';
        },
        getCurrency() {
            if (this.book.listPrice.currencyCode === "USD") return '€';
            if (this.book.listPrice.currencyCode === "ILS") return '₪';
            if (this.book.listPrice.currencyCode === "EUR") return '$';
        },
        onSale() {
            if (this.book.listPrice.isOnSale) return ' - ON SALE!';
        },
        getImg() {
            return this.book.thumbnail;
        }
    },
    created() {
        const bookId = this.$route.params.bookId;
        bookService.getBooks()
        .then(() => {
            bookService.getBookById(bookId)
            .then(book => this.book = book)
        })
    }
}