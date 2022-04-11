<template>
  <div>
    <NuxtLayout name="user">
      <UserHomePetitionCard />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { usePatientPetitionStore } from '@/stores/patientPetitions'

const counterStore = useCounterStore()
const petitionStore = usePatientPetitionStore()
const data = ref([{ title: 'ref title', symptoms: 'ref symptoms', id: 1 }])
</script>
