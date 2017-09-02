<template>
    <div class="card">
        <h2 class="verb"><router-link :to="`/verb/${verb}`" v-text="verb"></router-link></h2>
        <slot></slot>
        <p class="footer">Documenation: <a v-bind:href="docLink">{{ docLink }}</a></p>
    </div>
</template>

<script>
    export default {
        props: ['verb', 'docLink']
    }
</script>