<template>
    <div class="header">
        <div class="header__container content-wrapper">
            <Logo class="header__logo" src="stik"/>
            
            <Nav class="desk-visible"/>
            <Nav class="mob-visible" :list="['user', 'search']"/>
            <Nav class="mob-visible" :list="['cart']"/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .header{
        padding: 3.1rem 0;

        &__container{
            min-height: 2.4rem;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: end;
            padding: 0 calc(var(--pad) + .8rem);
           
            @media (max-width: $mobile){
                justify-content: space-between;
                padding: 0 var(--pad);
            }
        }

        :deep(.header__logo){
            position: absolute;
            @include all-directions(0);
            margin: auto;
        }

        @media (max-width: $mobile){
            padding: 1.3rem 0;

            :deep(.header__logo){
                width: 3.8rem;
            }

            &__container{
                min-height: 2.4rem;
            }
        }
    }

    


    @include mob-display($mobile);
</style>