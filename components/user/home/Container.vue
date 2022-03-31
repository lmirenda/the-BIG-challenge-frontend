<template>
  <main class="flex-1">
    <!-- Page title & actions -->
    <UserHomeActions />
    <!-- Pinned projects -->
    <UserHomePetitionPinnedCard />
    <!-- Projects table (small breakpoint and up) -->
    <UserHomePetitionTable />
  </main>
</template>
<script>
import { usePatientPetitionStore } from '@/stores/patientPetitions'

const { $apiFetch } = useNuxtApp()

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
}

onMounted(getPetitions)
</script>
