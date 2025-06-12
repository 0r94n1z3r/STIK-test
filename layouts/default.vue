<template>
    <div class="page">
        <Header/>
        <div class="page__content">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .page{
        &__content{
            min-height: calc(100 * var(--vh));
            padding-bottom:  10rem;
        }
    }
</style>