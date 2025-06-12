<template>
    <div class="pp-section-wrapper">
        <h3>{{ title }}</h3>

        <slot />
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String
    })
</script>

<style lang="scss" scoped>
    h3{
        margin-bottom: .8rem;
        color: var(--c-gray--dark);
    }
</style>