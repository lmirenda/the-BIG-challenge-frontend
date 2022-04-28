export default defineNuxtRouteMiddleware((to, from) => {
    const { isPatient } = useAuth()

    if (process.client) {
        if (!isPatient.value) {
            window.location.pathname = '/doctor-panel'
        }
    }
    // return navigateTo('/')
})