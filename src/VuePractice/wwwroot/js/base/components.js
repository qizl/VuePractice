Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('blog-post1', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text')">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('blog-post2', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text',.1)">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
    `
});

Vue.component('custom-input', {
    props: ['value'],
    template: `<input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">`
});

var app = new Vue({
    el: '#app',
    data: {
        posts: [{
            id: 1,
            title: 'My journey with Vue'
        },
        {
            id: 2,
            title: 'Blogging with Vue'
        },
        {
            id: 3,
            title: 'Why Vue is so fun'
        }
        ],
        postFontSize: 1,
        searchText: ''
    },
    methods: {
        onEnlargeText: function (x) {
            this.postFontSize += x;
        }
    }
});