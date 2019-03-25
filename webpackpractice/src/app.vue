<template>
    <div>
        Hello {{name}}
        <cTitle link="main" text="from app.vue">innerHtml</cTitle>
    </div>
</template>
<script>
    import cTitle from './title.vue';
    export default{
        data(){
            return{
                name:'Vue.js'
            }
        },
        components:{
            cTitle
        }
    }
</script>
<style scoped>
    div{
        color:#f60;
        font-size:24px;
    }
</style>