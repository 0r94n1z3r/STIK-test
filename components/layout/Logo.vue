<template>
    <NuxtLink 
        class="logo"
        to="/" 
    >
        <Image 
            src="/logo.png"
            :ratio="5365/2400"
        />
    </NuxtLink>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .logo{
        display: block;
        width: max-content;
        height: max-content;
        width: 5.365rem;
    }
</style>