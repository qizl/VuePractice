!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("单文件组件")]),e._v(" "),t("vlink",{attrs:{link:"https://www.enjoycodes.com/ViewNote/2b5c5690-22d8-4f32-8b61-e29081161997",text:"参考："}},[e._v("《Vue.js 实战 》笔记")]),e._v(" "),t("img",{attrs:{src:"imgs/vuecomponents.jpg"}}),e._v(" "),t("h5",[e._v("#本页代码")]),e._v("\n        index.html:\n        "),t("pre",{pre:!0},[e._v('<div id="app"></div>\n\n<script src="~/js/tool/bundle.js"><\/script>')]),e._v("\n        index.js:\n        "),t("pre",{pre:!0},[e._v("import app from '../../vues/app.vue';\n\nnew Vue({\n    el: '#app',\n    render: c => c(app)\n})\n        ")]),e._v("\n        app.vue:\n        "),t("pre",{pre:!0},[e._v('<template>\n    <div>\n        <h2>单文件组件</h2>\n        <vlink link="https://www.enjoycodes.com/ViewNote/2b5c5690-22d8-4f32-8b61-e29081161997" text="参考：">《Vue.js 实战 》笔记</vlink>\n        <h5>#本页代码</h5>\n        index.js:\n        <pre v-pre>import app from &#39;../../vues/app.vue&#39;;\n\nnew Vue({\n    el: &#39;#app&#39;,\n    render: c =&gt; c(app)\n})\n        </pre>\n        app.vue:\n        <pre v-pre></pre>\n    </div>\n</template>\n\n<script type="text/javascript">\n    import vlink from \'./components/link.vue\';\n    export default {\n        components:{\n            vlink\n        }\n    }\n<\/script>\n\n<style scoped>\n\n</style>')]),e._v("\n    link.vue:\n    "),t("pre",{pre:!0},[e._v('<template>\n    <div>\n        {{text}}<a :href="link" target="_blank" style="display:inline"><slot></slot></a>\n    </div>\n</template>\n\n<script type="text/javascript">\n    export default {\n        props: {\n            text: String,\n            link: String\n        }\n    }\n<\/script>\n\n<style scoped>\n</style>')]),e._v("\n    webpack.config.js:\n    "),t("pre",{pre:!0},[e._v("const path = require('path');\nconst VueLoaderPlugin = require('vue-loader/lib/plugin');\n\nmodule.exports = {\n    entry: './vuepractice/wwwroot/js/tool/index.js',\n    output: {\n        filename: 'bundle.js',\n        path: path.resolve(__dirname, 'vuepractice', 'wwwroot', 'js', 'tool')\n    },\n    module: {\n        rules: [{\n            test: /\\.vue$/,\n            use: [\n                'vue-loader'\n            ]\n        }]\n    },\n    plugins: [\n        new VueLoaderPlugin()\n    ]\n};")])],1)};r._withStripped=!0;var o=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[this._v("\n    "+this._s(this.text)),n("a",{staticStyle:{display:"inline"},attrs:{href:this.link,target:"_blank"}},[this._t("default")],2)])};function i(e,n,t,r,o,i,p,s){var l,a="function"==typeof e?e.options:e;if(n&&(a.render=n,a.staticRenderFns=t,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),p?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(p)},a._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(a.functional){a._injectStyles=l;var u=a.render;a.render=function(e,n){return l.call(n),u(e,n)}}else{var c=a.beforeCreate;a.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:a}}o._withStripped=!0;var p=i({props:{text:String,link:String}},o,[],!1,null,"5928103a",null);p.options.__file="vuepractice/wwwroot/vues/components/link.vue";var s=i({components:{vlink:p.exports}},r,[],!1,null,"5207d3b1",null);s.options.__file="vuepractice/wwwroot/vues/app.vue";var l=s.exports;new Vue({el:"#app",render:e=>e(l)})}]);