<template>
    <PP-SectionWrapper 
        class="pp-sizes"
        title="Размеры"
    >
        <div class="pp-sizes__container">
            <div 
                class="size-bar"
                v-for="i in product.sizes"
                :class="{
                    'size-bar--active': i == model,
                    'size-bar--disabled': !i.count
                }"
                @click="handleClick(i)"
            >
                <div class="size-bar__block">
                    {{ i.title }}
                </div>
                <p 
                    class="size-bar__subtext"
                    v-if="getSign(i)"
                >
                    {{ getSign(i) }}
                </p>
            </div>
        </div>
    </PP-SectionWrapper>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })

    const model = defineModel();

    const getSign = (size)=>{ // подпись к размеру
        if(!size.count)return 'подписка';
        if(size.count <= 3)return 'мало';
    }

    const handleClick = (size)=>{
        if(!size.count)return;
        model.value = size;
    }

</script>

<style lang="scss" scoped>
    .pp-sizes{
        &__container{
            display: flex;
            flex-wrap: wrap;
            gap: 1.4rem;
        }
    }

    .size-bar{
        --color: var(--c-black--middle);
        --sub-color: var(--c-gray--middle);
        user-select: none;

        cursor: pointer;

        &__block{
            @include flex-c;
            text-align: center;
            min-width: 6.5rem;
            padding: .9rem;
            padding-bottom: .8rem;
            border: .1rem solid var(--color);
            color: var(--color);
            margin-bottom: .3s;
        }

        &__subtext{
            width: 100%;
            text-align: center;
            color: var(--sub-color);
        }

        &--disabled{
            --color: var(--c-gray--light);
            --sub-color: var(--c-gray--light);
        }
    }
</style>