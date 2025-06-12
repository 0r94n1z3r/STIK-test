<template>
    <h4 class="prod-card-title">{{ product.title }}</h4>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })
</script>

<style lang="scss" scoped>
    h4{
        text-transform: lowercase;

        @media (max-width: $mobile) {
            text-transform: uppercase;
        }
    }
</style>