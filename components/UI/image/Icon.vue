<template>
    <div
        class="icon"
        :style="{
            '--default-size': Number(size)/10+'rem'
        }"
    >
        <SvgIcon 
            :name="`icons/${name}--${size}--${type}`"
        />
    </div>
</template>

<script setup>
    // Иконки хранятся в svg формате в /assets/sprite/svg
    // ВАЖНО дефолтный цвет менять на "currentColor"

    const props = defineProps({
        name: String,
        size: {
            type: [String, Number],
            default: 20
        },
        type: {
            type: String,
            default: 'stroke'
        }
    })
</script>

<style lang="scss" scoped>
    .icon{
        flex-shrink: 0;
        width: var(--icon-size, var(--default-size));
        height: var(--icon-size, var(--default-size));

        svg{
            color: inherit;
            display: block;
            width: 100%;
            height: 100%;
        }
    }
</style>