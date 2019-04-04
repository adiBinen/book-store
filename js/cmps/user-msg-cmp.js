
import {eventBus, EVENT_SUCCESS, EVENT_FAIL} from '../event-bus.js';


export default {
    template: `
        <section class="user-msg" v-if="title">
            <p v-if="isSuccess">Book {{title}} was successfully added!</p>
            <p v-else>Book {{title}} already exist</p>
        </section> 
    `,
    data() {
        return {
            title: null,
            isSuccess: null
        }
    },
    created() {
        eventBus.$on(EVENT_SUCCESS, title =>{
            console.log('Got a ', title);
            this.title = title;
            this.isSuccess = true;
        })
        eventBus.$on(EVENT_FAIL, title =>{
            console.log('Fail a ', title);
            this.title = title;
            this.isSuccess = false;
        })
    }
}