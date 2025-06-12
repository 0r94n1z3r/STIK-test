<template>
    <nav class="nav">
        <ul>
            <li v-for="i in navList">
                <NuxtLink 
                    class="nav__link"
                    :to="i.to"
                >
                    <Icon :name="i.icon"/>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    const props = defineProps({
        list: {
            type: Array,
            default: [
                'search',
                'favorites',
                'user',
                'cart'
            ]
        }
    })

    const allList = [
        {
            name: 'search',
            icon: 'search',
            to: '/search',
        },
        {
            name: 'favorites',
            icon: 'favorite',
            to: '/favorites',
        },
        {
            name: 'user',
            icon: 'user',
            to: '/user',
        },
        {
            name: 'cart',
            icon: 'basket',
            to: '/cart',
        }
    ]

    const navList = computed(()=>
        props.list.reduce((acc, name) => {
            const res = allList.find(e => e.name === name);
            if(res)acc.push(res);
            return acc;
        }, [])
    )
</script>

<style lang="scss" scoped>
    .nav{
        ul{
            display: flex;
            gap: 1.6rem;
        }

        &__link{
            display: block;
            @include virtual-area(.6rem);
        }
    }
</style>