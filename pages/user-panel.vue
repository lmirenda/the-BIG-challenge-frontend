<template>
  <NuxtLayout name="user"> <UserHomeContainer /> </NuxtLayout>
</template>

<script setup>
import { toRaw } from 'vue'
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
  // console.log(toRaw(petitions.value))
  console.log(petitions.value)
}

onMounted(getPetitions)
</script>
