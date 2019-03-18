var app = new Vue({
    el:'#app',
    data:{
        message:'Can Change',
        message1:'Can Not Change',
        rawHtml: '<span style="color:red">This should be red.</span>'
    },
    methods:{
        Changed:function(){
            this.message+=' ha';
            this.message1+=' ha';
        }
    }
});