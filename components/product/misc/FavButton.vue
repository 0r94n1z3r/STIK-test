<template>
    <Button
        class="fav-button"
        :class="{
            'fav-button--active': active
        }"
        type="secondary"
        fit
        @click="active = !active"
    >
        <Icon 
            class="fav-button__icon--nofav"
            name="favorite"
            size="24"
        />
        <Icon 
            class="fav-button__icon--fav"
            name="favorite"
            size="24"
            type="fill"
        />
    </Button>
</template>

<script setup>
    const active = ref();
</script>

<style lang="scss" scoped>
    .fav-button{
        position: relative;

        &__icon{
            transition: .3s;

            &--fav{
                position: absolute;
                @include all-directions(0);
                margin: auto;
            }
        }

        &--active{
            .fav-button__icon--nofav{
                opacity: 0;
            }
        }

        &:not(&--active){
            .fav-button__icon--fav{
                opacity: 0;
            }
        }
    }
</style>