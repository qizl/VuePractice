﻿<template>
    <div>
        <h1>
            <slot></slot>
        </h1>
        <a :href="'#'+link">{{text}}</a>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            text: {
                type: String,
                default: 'components'
            },
            link: String
        }
    }
</script>

<style scoped>

</style>
