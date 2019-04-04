
var interval;

export default {
    template: `
        <section class="about wrapper">
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum aperiam distinctio sit
                    mollitia modi vero magnam dignissimos, ab laudantium tenetur atque temporibus, perspiciatis
                    assumenda. Itaque aperiam iure perspiciatis sequi?
                </p>
        </section> 
    `,
    components: {
    },
    data() {
        return {
            show: false
        }
    },
    destroyed() {
        clearInterval(interval);
    },
    mounted() {
        interval = setInterval(() => {
            console.log('interval');
        }, 10000);
        this.show = !this.show;
    }
}