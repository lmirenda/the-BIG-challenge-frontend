export default defineNuxtRouteMiddleware((to, from) => {
    const { isDoctor } = useAuth()

    if (process.client) {
        if (!isDoctor.value) {
            window.location.pathname = '/user-panel'
        }
    }
    // return navigateTo('/')
})