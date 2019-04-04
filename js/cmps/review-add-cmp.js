
export default {
    template: `
        <section class="review-add">
            <h2>Add review</h2>

            <form @submit.prevent="emitAddReview" class="form-review flex">
                Your name: <input type="text" v-model="review.fullName" ref="fullName">
                Stars: <select v-model="review.stars">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                Read at: <input type="date" v-model="review.readAt">
                Review: <textarea placeholder="Add your review" rows="4" v-model="review.desc"></textarea>
                <button type="submit">Add Review</button>
            </form>
        </section> 
    `,
    data() {
        return {
            review: {
                fullName: 'Books Reader',
                stars: 1,
                readAt: null,
                desc: null
            }
        }
    },
    methods: {
        emitAddReview() {
            this.$emit('reviewAdded', {...this.review});
        }
    },
    mounted() {
        var date = new Date();
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        mm = (mm < 10) ? '0' + mm : mm;
        var yyyy = date.getFullYear();
        this.review.readAt = `${yyyy}-${mm}-${dd}`;

        this.$refs.fullName.focus();
    },
}