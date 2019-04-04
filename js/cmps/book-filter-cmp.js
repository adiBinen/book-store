
export default {
    template: `
        <section class="book-filter">
            Filter: 
            <form @submit.prevent="emitFilter">
                
                    <input class="input-title" type="text" v-model="filterBy.title" />
                    <input type="number" v-model="filterBy.fromPrice" value="0"/>
                    <input type="number" v-model="filterBy.toPrice" value="0"/>
                    <button type="submit">Filter</button>

            </form >
        </section> 
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: null,
                toPrice: null
            }
        }
    },
    methods: {
        emitFilter() {
            console.log('Emitting to Parent');
            this.$emit('filtered', { ...this.filterBy })
        }
    }
}