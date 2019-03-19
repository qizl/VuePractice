var app = new Vue({
    el:'#app',
    data:{
        message:'Can Change',
        message1:'Can Not Change',
        rawHtml: '<span style="color:red">This should be red.</span>',
        url:'http://baidu.com',
        attr:'href'
    },
    methods:{
        Changed:function(){
            this.message+=' ha';
            this.message1+=' ha';
        },
        Clicked:function(){
            alert('clicked');
        }
    }
});