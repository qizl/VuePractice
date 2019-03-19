var app = new Vue({
    el: '#app',
    data: {
        awesome: true,
        loginType: 'username',
        keyDescribe: 'Use Different Key',
        txtUserNameKey: 'key',
        txtEmailKey: 'key'
    },
    methods: {
        changeLoginType: function () {
            if (this.loginType == 'username')
                this.loginType = 'email';
            else
                this.loginType = 'username';
        },
        changeKey: function () {
            if (this.keyDescribe == 'Use Different Key') {
                this.keyDescribe = 'Use Same key';
                this.txtUserNameKey = 'username input';
                this.txtEmailKey = 'email key';
            } else {
                this.keyDescribe = 'Use Different Key';
                this.txtUserNameKey = 'key';
                this.txtEmailKey = 'key';
            }
        }
    },
    computed: {
        isAwesome: {
            get: function () {
                return this.awesome;
            },
            set: function (v) {
                if (v == 'true')
                    this.awesome = true;
                else if (v == 'false')
                    this.awesome = false;
                else
                    this.awesome = v;
            }
        }
    }
});