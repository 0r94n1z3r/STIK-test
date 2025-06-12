<template>
    <div class="recommended-prods content-wrapper">
        <h2>похожие товары</h2>
        <div class="recommended-prods__list">
            <ProdCard 
                v-for="i in prodsList"
                :product="i"
            />
        </div>
    </div>
</template>

<script setup>
    const prodsList = ref([
        {
            id: 2,
            title: 'ПЛАТЬЕ С V-ОБРАЗНЫМ ВЫРЕЗОМ, БЕЛЫЙ',
            price: 8000,
            price_old:  14900,
            images: [
                {url: '/images/products/2/0.png'}
            ]
        },
        {
            id: 3,
            title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ',
            price: 8900,
            images: [
                {url: '/images/products/3/0.png'}
            ]
        },
        {
            id: 4,
            title: 'ПЛАТЬЕ МАКСИ С ЯРУСАМИ, БЕЛЫЙ',
            price: 10500,
            images: [
                {url: '/images/products/4/0.png'}
            ]
        },
        {
            id: 5,
            title: 'КОМБИНЕЗОН СО СТОЙКОЙ, ЧёРНЫЙ',
            price: 9500,
            images: [
                {url: '/images/products/5/0.png'}
            ]
        },
    ])
</script>

<style lang="scss" scoped>
    .recommended-prods{
        h2{
            margin-bottom: 3.1rem;
        }

        &__list{
            display: grid;
            gap: 1.6rem .9rem;
            grid-template-columns: repeat(4, minmax(16.7rem, 1fr));

            @media (max-width: 800px) {
                grid-template-columns: repeat(2, minmax(16.7rem, 1fr));
            }

        }
        
        @media (max-width: $mobile) {
            h2{
                margin-bottom: 2.7rem;
            }
        
            &__list{
                column-gap: .8rem;
            }
        }
    }
</style>