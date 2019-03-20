import hello from '~/components/hello.vue'

var app=new Vue({
    el: '#app',
    render:c=>c(hello)
})