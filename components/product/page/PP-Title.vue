<template>
    <div class="pp-title">
        <div class="pp-title__content">
            <h1>{{ product.title }}</h1>
            <ProdCardPrice :="{product}"/>
        </div>
        <FavButton
            class="mob-visible"
        />
        <!-- fav-mob -->
    </div>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })
</script>

<style lang="scss" scoped>
    .pp-title{
        display: flex;
        align-items: start;
        gap: 8rem;

        h1{
            margin-bottom: .8rem;
        }

        :deep(.fav-button){
            margin-left: auto;
            margin-right: calc(-1 * var(--pad));
            margin-top: -1.8rem;
            --brd: transparent;
            --color-hov: var(--c-black--dark);
            --background-hov: transparent;
            --brd-hov: transparent;
        }
    }

    @include mob-display($mobile);
</style>