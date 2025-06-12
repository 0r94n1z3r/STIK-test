<template>
    <div class="prod-card-price">
        <p 
            class="prod-card-price__value--current"
        >
            {{ splitNumber(product.price) }} RUB
        </p>
        <p 
            v-if="product.price_old" 
            class="prod-card-price__value--old" 
        >
            {{ splitNumber(product.price_old) }} RUB
        </p>
    </div>
</template>

<script setup>
    import { splitNumber } from '@/helpers/num.js'

    const props = defineProps({
        product: Object
    })


</script>

<style lang="scss" scoped>
    .prod-card-price{
        display: flex;
        gap: 1rem;

        &__value{
            &--old{
                color: var(--c-gray--middle);
                text-decoration: line-through;
            }
        }
    }
</style>