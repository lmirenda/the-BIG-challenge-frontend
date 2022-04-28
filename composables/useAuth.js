export function useAuth() {
    function setUser(type) {
        localStorage.setItem('user', JSON.stringify({ type }))
    }

    function getUser() {
        return JSON.partse(localStorage.getItem('user'))
    }

    function removeUser() {
        localStorage.removeItem('user')
    }

    const isLoggedIn = computed(() => {
        if (process.client) {
            return !!localStorage.getItem('user')
        }
    })

    const isDoctor = computed(() => {
        if (process.client) {
            let user = JSON.parse(localStorage.getItem('user'))
            return user.type == 'doctor'
        }
    })

    const isPatient = computed(() => {
        if (process.client) {
            let user = JSON.parse(localStorage.getItem('user'))
            return user.type == 'patient'
        }
    })

    return { setUser, getUser, removeUser, isLoggedIn, isDoctor, isPatient }
}