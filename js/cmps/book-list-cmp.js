
import bookPreview from './book-preview-cmp.js';

export default {
    props: ['books'],
    template: `
        <ul class="book-list">
                <li :key="book.id" 
                    v-for="book in books">
                    <router-link
                    :to="'/book/' + book.id" 
                    >
                        <book-preview 
                            :book="book">
                        </book-preview>
                    </router-link>
                </li>
            </ul>
    `,
    components: {
        bookPreview
    },
    methods: {
        bookSelect(bookId) {            
            this.$emit('selected', bookId);
        }
    }
}