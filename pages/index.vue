<template>
    <div class="product">
        <div class="product__content content-wrapper">
            <PP-Slider :="{product}"/>
            <div class="product__aside">
                <PP-Title :="{product}" />

                <PP-Sizes 
                    :="{product}"
                    v-model="size"
                />

                <PP-Colors
                    :="{product}"
                    v-model="color"
                />

                <PP-Actions 
                    class="desk-visible"
                    :="{product}" 
                />

                <PP-Info :="{product}" />
            </div>
        </div>

        <RecommendedProds/>
    </div>
</template>

<script setup>
    const product = ref({
            id: 1,
            title: 'ЖАКЕТ УДЛИНЁННЫЙ, БЕЛЫЙ',
            price: 8900,
            images: [
                {url: '/images/products/1/0.png'},
                {url: '/images/products/1/1.png'},
                {url: '/images/products/1/2.png'},
            ],

            // естественно понятно, что система вариантов сложнее 😅
            sizes: [
                {title: 'XS', count: 2},
                {title: 'S', count: 10},
                {title: 'М', count: 0}
            ],
            colors: [
                {title: 'белый', value: '#ffffff'},
                {title: 'черный', value: '#000000'},
                {title: 'бежевый', value: '#F9F1DC'}
            ],
            description: 'Cupidatat consequat ut non incididunt adipisicing anim aliqua sunt laboris esse nisi duis ullamco.',
            material: 'Sunt ea do qui et esse esse culpa ipsum quis adipisicing non.'
        })

    const size = ref(product.value.sizes[0]);
    const color = ref(product.value.colors[0]);
</script>

<style lang="scss" scoped>
    .product{
        &__content{
            display: flex;
            gap: 3.1rem 6.1rem;
            margin-bottom: 4.2rem;
            max-width: calc(109.6rem + (2 * var(--pad)));

            :deep(.pp-slider){
                max-width: 61.8rem;
            }

            @media (min-width: 961px){
                :deep(.swiper-pagination){
                    display: none;
                }
            }

            @media(max-width: 960px){
                :deep(.pp-slider){
                    .pp-slider-thumbs{display: none;}
                    .pp-slider-slider{width: 100%;}
                }
            }
        }

        &__aside{
            position: sticky;
            top: 3rem;
            left: 0;
            @include flex-col;
            gap: 3.6rem;
            flex-shrink: 0;
            width: 36rem;
            height: max-content;

            :deep(.pp-title){
                margin-bottom: -.5rem;
            }
        }

        @media(max-width: 680px){
            &__content{
                flex-direction: column;
                :deep(.pp-slider){
                    .pp-slider-slider{
                        max-width: unset;
                    }
                }
            }

            &__aside{
                width: 100%;
            }
        }

        @media(max-width: $mobile){
            &__content{
                :deep(.pp-slider){
                    margin-left: calc(-1 * var(--pad));
                    width: 100vw;
                }
            }

            &__aside{
                gap: 3.1rem
            }
        }
    }

    @include mob-display($mobile);
</style>