<template>
  <div>
    <button @click="counterStore.increment()">
      {{ counterStore.doubleCount }}
    </button>
    <p>{{ petitionStore.petitions }}</p>
    <button @click="petitionStore.changePetitions()">Change petition</button>
    <button @click="petitionStore.setPetitions(data)">Get API petitions</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'
import { usePatientPetitionStore } from '@/stores/patientPetitions'

export default {
  setup() {
    const counterStore = useCounterStore()
    const petitionStore = usePatientPetitionStore()
    const data = ref([{ title: 'ref title', symptoms: 'ref symptoms' }])

    return { counterStore, petitionStore, data }
  },
}
</script>
