export default {
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL,
    },

    buildModules: ['@nuxtjs/tailwindcss', '@nuxt/typescript-build',],

    // modules: [
    //     '@nuxtjs/axios',
    //     '@nuxtjs/auth-next'
    // ],
    // auth: {
    //     strategies: {
    //         laravelSanctum: {
    //             provider: 'laravel/sanctum',
    //             url: 'http://thebigchallenge.test:8000'
    //         },
    //     }
    // },
    // proxy: {
    //     '/laravel': {
    //       target: 'https://laravel-auth.nuxtjs.app',
    //       pathRewrite: { '^/laravel': '/' }
    //     }
    //   },
 

}
