export
    const formatColor = (petitionObj) => {
        switch (petitionObj.status) {
            case 'done':
                return petitionObj.bgColorClass = 'bg-pink-600'
            case 'pending':
                return petitionObj.bgColorClass = 'bg-yellow-600'
            case 'in progress':
                return petitionObj.bgColorClass = 'bg-blue-500'
        }
    }

export const unpinPetition = (petitionObj) => {
    petitionObj.pinned = false
}

export const pinPetition = (petitionObj) => {
    petitionObj.pinned = true
}

export const initials = (petitionObj) => {
    petitionObj.initials = (petitionObj.title[0] + petitionObj.title[1]).toUpperCase()
}