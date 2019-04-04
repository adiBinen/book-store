

export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <div class="preview" :style="getBgImg"></div>
            <div class="preview-details">
                <p>{{book.title}} <br> {{book.listPrice.amount}}{{getCurrency}}</p>
            </div>
    </section> 
    `,
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        getCurrency() {
            if (this.book.listPrice.currencyCode === "USD") return '€';
            if (this.book.listPrice.currencyCode === "ILS") return '₪';
            if (this.book.listPrice.currencyCode === "EUR") return '$';
        },
        getBgImg() {
            return {
                'background-image': `url('${this.book.thumbnail}')`
            };
        }
    },
    created() {
    }
}