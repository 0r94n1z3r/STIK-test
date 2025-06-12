<template>
    <Component
        class="button btn"
        :is="component"
        :to="to"
        :class="[
            `button--${type}`,
            fit?'button--fit':''
        ]"
    >
        <slot/>
    </Component>
</template>

<script setup>
    const props = defineProps({
        to: [String, Object],
        type: { // primary / secondary
            type: String,
            default: 'primary'
        },
        fit: Boolean
    })

    const component = computed(()=>
        props.to?defineNuxtLink({}):'div'
    )
</script>

<style lang="scss" scoped>
    .button{
        --color: var(--c-white);
        --background: var(--c-black--dark);
        --brd: var(--c-black--dark);

        --color-hov: var(--c-black--dark);
        --background-hov: var(--c--white);
        --brd-hov: var(--c-black--dark);

        &--secondary{
            --color: var(--c-black--dark);
            --background: var(--c--white);

            --color-hov: var(--c-white);
            --background-hov: var(--c-black--dark);
        }


        color: var(--color);
        background: var(--background);
        border: .1rem solid var(--brd);

        @media (hover: hover) {
            &:hover{
                color: var(--color-hov);
                background: var(--background-hov);
                border: .1rem solid var(--brd-hov);
            }
        }

        transition: .3s;

        cursor: pointer;

        text-transform: uppercase;
        font-size: 1.1rem;

        padding: 1.5rem 2.4rem;
        min-height: 4.4rem;

        text-align: center;

        &--fit{
            padding: 1rem;
            width: fit-content;
        }
    }
</style>