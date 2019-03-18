Vue.component('todo-item',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app = new Vue({
    el:'#app',
    data:{
        message:'Vue Practice',
        mt:'页面加载于：'+new Date().toLocaleString(),
        seen:true,
        todos:[
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ],
        groceryList:[
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    },
    methods:{
        reverseMessage: function ()
        {
            this.message=this.message.split('').reverse().join('');
        }
    }
});