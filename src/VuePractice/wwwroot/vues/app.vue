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
