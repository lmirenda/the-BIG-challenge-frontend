<template>
  <div>
    <button @click="counterStore.increment()">
      {{ counterStore.doubleCount }}
    </button>
    <p>{{ petitionStore.petitions }}</p>
    <button @click="petitionStore.pinPetition(data[0].id)" v-bind="data">
      PinPetition
    </button>
    <button @click="petitionStore.unpinPetition(data[0].id)">
      UnpinPetition
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { usePatientPetitionStore } from '@/stores/patientPetitions'


const counterStore = useCounterStore()
const petitionStore = usePatientPetitionStore()
const data = ref([{ title: 'ref title', symptoms: 'ref symptoms', id: 1 }])
</script>
