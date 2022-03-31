import { defineStore } from 'pinia'

export const usePatientPetitionStore = defineStore('patientPetitions', {
    state: () => {
        return { petitions: [{ title: 'Petition title', symptoms: 'Some symptoms go here', id: 1 }] }
    },

    // getters: {
    //     pinned: (state) => state.count * 2,
    // },

    actions: {
        pinPetition(id) {
            for (let i = 0; i < this.petitions.length; i++) {
                if (this.petitions[i].id == id) {

                    (this.petitions[i].pinned = true)
                }
            }
        },
        unpinPetition(id) {
            for (let i = 0; i < this.petitions.length; i++) {
                if (this.petitions[i].id == id) {

                    (this.petitions[i].pinned = false)
                }
            }
        },
        setPetitions(obj) {
            this.petitions = obj
        },
        setColors(id) {
            for (let i = 0; i < this.petitions.length; i++) {
                if (this.petitions[i].id == id) {
                    if (this.petitions[i].status == 'pending') {
                        this.petitions[i].bgColorClass = 'bg-pink-600'
                    } else if (this.petitions[i].staus == 'in progress') {
                        this.petitions[i].bgColorClass = 'bg-yellow-600'
                    } else if (this.petitions[i].status == 'done') {
                        this.petitions[i].bgColorClass = 'bg-blue-500s'
                    }
                }
            }
        }
    },
})

