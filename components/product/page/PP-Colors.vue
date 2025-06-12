<template>
    <PP-SectionWrapper 
        class="pp-sizes"
        :title="`Цвет: ${model?.title || ''}`"
    >
        <div class="pp-sizes__container">
            <div 
                class="color-bar"
                v-for="i in product.colors"
                :class="{
                    'color-bar--active': i == model,
                    'color-bar--light': needsGreyBorder(i.value)
                }"
                :style="{'--color': i.value}"
                @click="handleClick(i)"
            >
                <div class="color-bar__color"></div>
            </div>
        </div>
    </PP-SectionWrapper>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })

    const model = defineModel();

    const handleClick = (color)=>{
        model.value = color;
    }

    const needsGreyBorder = (hex) => { // проверка нужна ли обводка светлому цвету
        const rgb = hex.match(/\w\w/g).map(x => parseInt(x, 16) / 255);
        const [r, g, b] = rgb.map(c => c <= 0.03928 ? c / 12.92 : ((c+0.055)/1.055) ** 2.4);
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const contrast = (1.05) / (luminance + 0.05);
        return contrast < 1.12;
    };

</script>

<style lang="scss" scoped>
    .pp-sizes{
        &__container{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
    
    .color-bar{
        padding: .4rem .3rem;
        margin-top: -.3rem;
        position: relative;
        cursor: pointer;

        &__color{
            width: 2.8rem;
            height: 2.7rem;
            background: var(--color);
        }

        &--light{
            .color-bar__color{
                border: .1rem solid var(--c-gray--light);
            }
        }

        &::after{
            @include pseudo-absolute;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: .1rem;
            background: var(--c-gray--dark);
            transition: .3s;
            width: 0;
        }

        &--active{
            &::after{
                width: 100%;
            }
        }
    }
</style>