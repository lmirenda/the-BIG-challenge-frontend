<template>
  <NuxtLayout name="user"> <UserHomeContainer /> </NuxtLayout>

</template>

<script setup>
import { usePatientPetitionStore } from '@/stores/patientPetitions'

const { $apiFetch } = useNuxtApp()
const petitionStore = usePatientPetitionStore()
const petitions = ref([])

async function getPetitions() {
  let petition = await $apiFetch('/api/my/petitions', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-XSRF-TOKEN': sessionStorage.getItem('validToken'),
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })

  petitions.value = petition[0]
  console.log(petitions.value)
  petitionStore.setPetitions(petitions.value)
}

onMounted(getPetitions)
</script>
