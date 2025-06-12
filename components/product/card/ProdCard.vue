<template>
    <NuxtLink 
        class="prod-card"
        to="#"
    >
        <ProdCardImage :="{product}" />
        <div class="prod-card__content">
            <ProdCardTitle :="{product}" />
            <ProdCardPrice :="{product}" />
        </div>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })
</script>

<style lang="scss" scoped>
    .prod-card{
        display: block;
        

        &__content{
            padding: 1.5rem;
            @include flex-col;
            gap: 1rem;

            @media (max-width: $mobile) {
                padding: .9rem .7rem;
                gap: .46rem;
            }
        }
    }
</style>