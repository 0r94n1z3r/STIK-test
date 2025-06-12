<template>
    <div class="pp-info">
        <div class="accordion">
            <div 
                class="accordion__block" 
                v-for="i in parsedData"
                :class="{'accordion__block--active': i.active}" 
            >
                <div 
                    class="accordion__title"
                    @click="i.active = !i.active"
                >
                    <h3>{{ i.title }}</h3>
                    <Icon 
                        class="accordion__close"
                        name="plus"
                        size="12"
                    />
                </div>
                <div class="accordion__content-block">
                    {{ i.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        product: Object
    })

    const parsedData = ref([
        {
            title: 'Описание',
            content: props.product.description,
        },
        {
            title: 'Состав и уход',
            content: props.product.material,
        },
    ])

</script>

<style lang="scss" scoped>
    .accordion{
        &__block{
            width: 100%;
            border-bottom: 1px solid var(--c-gray--lighter);

            &:first-child{
                border-top: 1px solid var(--c-gray--lighter);
            }

            &:not(&--active){
                .accordion{
                    &__content-block{
                        display: none;
                    }
                }
            }

            &--active{
                .accordion{
                    &__close{
                        transform: rotate(.125turn);
                    }
                }
            }
        }

        &__title{
            display: flex;
            align-items: start;
            padding: 1.4rem 0 1.1rem;
            cursor: pointer;

            h3{
                text-transform: uppercase;
            }
        }

        &__content-block{
            margin-bottom: 1.1rem;
            margin-top: -.4rem;
        }

        &__close{
            transition: .3s;
            will-change: transform;
            margin-left: auto;
            color: var(--c-gray--middle);
        }
    }
</style>