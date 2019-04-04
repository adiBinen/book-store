
export default {
    props: ['txt'],
    template: `
        <section class="long-text">
            <p v-if="isCollapse"><strong>Description: </strong>{{shortTxt}}</p>
            <p v-else><strong>Description: </strong>{{txt}}</p>
            <span class="readMoreLess" v-if="isLongTxt" @click="isCollapse = !isCollapse">
                {{isCollapse? 'show more' : 'show less'}}
            </span>
        </section> 
    `,
    components: {
    },
    data() {
        return {
            isCollapse: true,
        }
    },
    methods: {
    },
    computed: {
        isLongTxt() {
            return this.txt.length > 100
        },
        shortTxt() {
            if (this.isLongTxt) return this.txt.slice(0,100) + '...';
            else return this.txt;
        }
    },
    created() {
    }
}