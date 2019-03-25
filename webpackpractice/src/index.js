import _ from 'lodash';
import './style.css';
import Data from './data.xml';

import Vue from 'vue';
import App from './app.vue';

new Vue({
    el: '#app',
    render: h => h(App)
});

function component() {
    var element = document.createElement('div');

    // x Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // console.log(Data);

    return element;
}

document.body.appendChild(component());