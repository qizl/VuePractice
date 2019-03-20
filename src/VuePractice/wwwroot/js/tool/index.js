import Vue from 'vue'
import hello from '~/components/HelloWorld.vue'

var app = new Vue({
    el: '#app',
    render: c => c(hello)
})