var data={
    a: 'Click Me !',
    aChangedValue: ''
};

// Object.freeze(data);

var vm = new Vue({
    el:'#app',
    data: data,
    methods:{
        changeA: function () {
            // if (this.b)
            // {
            //     this.b += ' ha';
            // }
            this.a += ' ha';
        }
    }
});

vm.b = "dataB";

vm.$watch('a', function (newV, oldV) {
    vm.aChangedValue = 'oldV:' + oldV + ',newV:' + newV;
});