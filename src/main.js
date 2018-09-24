import Vue from 'vue'
import App from './app.vue'
import './asserts/css/global.scss'

new Vue({
    el: '#app',
    components: { App },
    data: {
        eventHub: new Vue()
    },
    template: '<App/>'
})