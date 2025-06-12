<template>
    <div class="pp-actions">
        <Button
            class="to-cart-button"
        >
            добавить в корзину
        </Button>
        <FavButton />
    </div>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })

</script>

<style lang="scss" scoped>
    .pp-actions{
        display: flex;
        align-items: start;
        gap: 1rem;
    }

    .to-cart-button{
        width: 100%;
    }
</style>