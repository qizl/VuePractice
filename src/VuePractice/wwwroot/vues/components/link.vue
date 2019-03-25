<template>
    <div>
        {{text}}<a :href="link" target="_blank" style="display:inline"><slot></slot></a>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            text: String,
            link: String
        }
    }
</script>

<style scoped>
</style>
