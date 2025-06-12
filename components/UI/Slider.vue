<template>
    <Swiper 
        class="slider"
        :="$attrs"
    >
        <slot />
    </Swiper>
</template>

<script setup>

</script>

<style lang="scss">
    .slider{
        .swiper-button-next,
        .swiper-button-prev{
            width: 3.2rem!important;
            height: 3.2rem!important;
            background: var(--c-white--transparent);
            border-radius: 50%;

            &::after{
                height: 2rem;
                width: 2rem;
                font-size: unset;
                display: block;
            }
        }

        .swiper-button-next::after{
            content: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18 10L12.7246 15L11.7566 14.0825L15.3795 10.6488L3 10.6488L3 9.35125L15.3795 9.35125L11.7566 5.91747L12.7246 5L18 10Z' fill='currentColor'/%3E%3C/svg%3E%0A") !important;
        }

        .swiper-button-prev::after{
            content: url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 10L8.27542 15L9.24343 14.0825L5.62051 10.6488L18 10.6488L18 9.35125L5.62051 9.35125L9.24343 5.91747L8.27542 5L3 10Z' fill='currentColor'/%3E%3C/svg%3E%0A") !important;
        }

        --swiper-pagination-bottom: 1.4rem;
        --swiper-pagination-bullet-horizontal-gap: .3rem;

        .swiper-pagination-bullet{
            background: var(--c-white--transparent);
            width: .7rem;
            height: .7rem;
            opacity: 1;
        }

        .swiper-pagination-bullet-active{
            background: var(--c-white);
        }
    }
</style>
        