<template>
    <div>
        <h2>单文件组件</h2>
        <vlink link="https://www.enjoycodes.com/ViewNote/2b5c5690-22d8-4f32-8b61-e29081161997" text="参考：">《Vue.js 实战 》笔记</vlink>
        <img src="imgs/vuecomponents.jpg">
        <h5>#本页代码</h5>
        index.html:
        <pre v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;

&lt;script src=&quot;~/js/tool/bundle.js&quot;&gt;&lt;/script&gt;</pre>
        index.js:
        <pre v-pre>import app from &#39;../../vues/app.vue&#39;;

new Vue({
    el: &#39;#app&#39;,
    render: c =&gt; c(app)
})
        </pre>
        app.vue:
        <pre v-pre>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;单文件组件&lt;/h2&gt;
        &lt;vlink link=&quot;https://www.enjoycodes.com/ViewNote/2b5c5690-22d8-4f32-8b61-e29081161997&quot; text=&quot;参考：&quot;&gt;《Vue.js 实战 》笔记&lt;/vlink&gt;
        &lt;h5&gt;#本页代码&lt;/h5&gt;
        index.js:
        &lt;pre v-pre&gt;import app from &amp;#39;../../vues/app.vue&amp;#39;;

new Vue({
    el: &amp;#39;#app&amp;#39;,
    render: c =&amp;gt; c(app)
})
        &lt;/pre&gt;
        app.vue:
        &lt;pre v-pre&gt;&lt;/pre&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
    import vlink from &#39;./components/link.vue&#39;;
    export default {
        components:{
            vlink
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;

&lt;/style&gt;</pre>
    link.vue:
    <pre v-pre>&lt;template&gt;
    &lt;div&gt;
        {{text}}&lt;a :href=&quot;link&quot; target=&quot;_blank&quot; style=&quot;display:inline&quot;&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/a&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
    export default {
        props: {
            text: String,
            link: String
        }
    }
&lt;/script&gt;

&lt;style scoped&gt;
&lt;/style&gt;</pre>
    webpack.config.js:
    <pre v-pre>const path = require(&#39;path&#39;);
const VueLoaderPlugin = require(&#39;vue-loader/lib/plugin&#39;);

module.exports = {
    entry: &#39;./vuepractice/wwwroot/js/tool/index.js&#39;,
    output: {
        filename: &#39;bundle.js&#39;,
        path: path.resolve(__dirname, &#39;vuepractice&#39;, &#39;wwwroot&#39;, &#39;js&#39;, &#39;tool&#39;)
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [
                &#39;vue-loader&#39;
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};</pre>
    package.json
    <pre v-pre>{
  &quot;name&quot;: &quot;vuepractice&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;&quot;,
  &quot;private&quot;: true,
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \&quot;Error: no test specified\&quot; &amp;&amp; exit 1&quot;,
    &quot;dev&quot;: &quot;webpack-dev-server --open --config webpack.config.js&quot;,
    &quot;serve&quot;: &quot;vue-cli-service serve&quot;,
    &quot;build&quot;: &quot;webpack&quot;
  },
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;,
  &quot;devDependencies&quot;: {
    &quot;babel&quot;: &quot;^6.23.0&quot;,
    &quot;babel-core&quot;: &quot;^6.26.3&quot;,
    &quot;babel-loader&quot;: &quot;^8.0.5&quot;,
    &quot;babel-plugin-transform-runtime&quot;: &quot;^6.23.0&quot;,
    &quot;babel-preset-es2015&quot;: &quot;^6.24.1&quot;,
    &quot;babel-runtime&quot;: &quot;^6.26.0&quot;,
    &quot;css-loader&quot;: &quot;^2.1.1&quot;,
    &quot;style-loader&quot;: &quot;^0.23.1&quot;,
    &quot;vue&quot;: &quot;^2.6.10&quot;,
    &quot;vue-hot-reload-api&quot;: &quot;^2.3.3&quot;,
    &quot;vue-loader&quot;: &quot;^15.7.0&quot;,
    &quot;vue-style-loader&quot;: &quot;^4.1.2&quot;,
    &quot;vue-template-compiler&quot;: &quot;^2.6.10&quot;,
    &quot;webpack&quot;: &quot;^4.29.6&quot;,
    &quot;webpack-cli&quot;: &quot;^3.3.0&quot;,
    &quot;webpack-dev-server&quot;: &quot;^3.2.1&quot;
  },
  &quot;dependencies&quot;: {
    &quot;@vue/cli&quot;: &quot;^3.5.1&quot;
  }
}</pre>
    </div>
</template>

<script type="text/javascript">
    import vlink from './components/link.vue';
    export default {
        components:{
            vlink
        }
    }
</script>

<style scoped>

</style>
