export
    const formatColor = (petitionObj) => {
        switch (petitionObj.status) {
            case 'completed':
                return petitionObj.bgColorClass = 'bg-yellow-100 text-yellow-500'
            case 'pending':
                return petitionObj.bgColorClass = 'bg-blue-100 text-blue-500'
            case 'in progress':
                return petitionObj.bgColorClass = 'bg-green-100 text-green-500'
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