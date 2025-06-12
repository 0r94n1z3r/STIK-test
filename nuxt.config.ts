// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head: {
            title: 'Stik - test'
        },
    },
    devtools: { enabled: true },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/svg-sprite',
        'nuxt-swiper',
    ],
    css: [
        '@/assets/scss/main.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/scss/_mixins.scss";
                        @import "@/assets/scss/_vars.scss";
                    `
                }
            },
        },
    },
})