<template>
    <div class="card">
        <h2 v-text="heading"></h2>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['heading']
    }
</script>