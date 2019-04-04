
import navBar from './nav-bar-cmp.js';

export default {
    template: `
        <section class="header flex space-between align-center">
            <h1>Miss Books</h1>
            <nav-bar></nav-bar>
        </section> 
    `,
    components: {
        navBar
    }
}