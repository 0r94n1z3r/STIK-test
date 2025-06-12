<template>
    <div class="pp-slider">
        <div class="pp-slider-thumbs">
            <Slider
                watch-slides-progress
                free-mode
                lazy
                mousewheel
                direction="vertical"
                slides-per-view="auto"
                :modules="[SwiperMousewheel, SwiperFreeMode]"
                @swiper="swiperThumbsRef = $event"
            >
                <SwiperSlide 
                    v-for="i in product.images"
                    :key="i.url" 
                    style="height:max-content;"
                >
                    <div class="pp-slider-thumbs__thumb">
                        <Image 
                            :src="i.url"
                            :alt="product.title"
                            fit="cover"
                            :ratio="70/87.84"
                        />
                    </div>
                </SwiperSlide>
            </Slider>
        </div>
        <div class="pp-slider-slider">
            <Slider
                :modules="[SwiperThumbs, SwiperKeyboard, SwiperZoom, SwiperNavigation, SwiperPagination]"
                :thumbs="{ swiper: swiperThumbsRef }"
                lazy
                arrows
                navigation
                pagination
            >
                <!-- slides-per-view="1" -->
                <SwiperSlide 
                    v-for="i in product.images"
                    :key="i.url"
                >
                    <!-- style="width: min-content;" -->
                    <img 
                        :src="i.url" 
                        :alt="product.title"
                    >
                </SwiperSlide>
            </Slider>   
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })

    const swiperThumbsRef = ref();
    
</script>

<style lang="scss" scoped>
    .pp-slider{
        display: flex;
        gap: 3rem;
        height: 69.3rem;
        width: 100%;
        min-width: 0;
    }

    .pp-slider-thumbs{
        flex-shrink: 0;
        width: 7rem;

        :deep(.swiper){
            height: 100%;

            .swiper-slide-thumb-active{
                opacity: .5;
            }
        }


        &__thumb{
            padding: .2rem 0;

            img{
                width: 100%;
            }
        }
    }

    .pp-slider-slider{
        max-width: 51.8rem;
        width: calc(100% - 10rem);

        :deep(.swiper){
            height: 100%;
            width: 100%;
        }

        img{
            display: block;
            height: 100%;
            width: 100%;
            object-fit: cover;
        }


    }

    

</style>