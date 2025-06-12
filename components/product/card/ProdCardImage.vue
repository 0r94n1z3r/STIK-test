<template>
    <div class="prod-card-image">
        <Image
            class="prod-card-image__image"
            :src="product?.images?.[0].url"
            :alt="product.title"
            :ratio="335/444"
            fit="cover"
        />
    </div>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })
</script>

<style lang="scss" scoped>
    .prod-card-image{
        &__image{
            width: 100%;
        }
    }
</style>