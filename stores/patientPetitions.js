import { defineStore } from 'pinia'

export const usePatientPetitionStore = defineStore('patientPetitions', {
    state: () => {
        return { petitions: [{ title: 'Petition title', symptoms: 'Some symptoms go here' }] }
    },

    // getters: {
    //     doubleCount: (state) => state.count * 2,
    // },

    actions: {
        changePetitions() {
            this.petitions = [{ title: 'Another title', symptoms: 'other symptoms go here', prop: 'new property' }]
        },
        setPetitions(obj) {
            this.petitions = obj
        }
    },
})

