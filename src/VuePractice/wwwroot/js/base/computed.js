var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        firstName: 'Foo',
        lastName: 'Bar',
        // fullName:'Foo Bar',
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    methods: {
        reversedMessageM: function () {
            return this.message.split('').reverse().join('');
        },
        getDateM: function () {
            this.sleep(10);
            var now = new Date();
            return now.toLocaleTimeString() + ' ' + now.getMilliseconds();
        },
        sleep: function (delay) {
            var start = (new Date()).getTime();
            while ((new Date()).getTime() - start < delay) {
                continue;
            }
        },
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        },
        getDate: function () {
            this.sleep(10);
            var now = new Date();
            return now.toLocaleTimeString() + ' ' + now.getMilliseconds();
        },
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        fullName1: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (n) {
                var names = n.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.debouncedGetAnswer();
        },
        // firstName: function (val) {
        //     this.fullName = val + ' ' + this.lastName
        // },
        // lastName: function (val) {
        //     this.fullName = this.firstName + ' ' + val
        // }
    },
    created: function () {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
});