<template>
  <div>
    <div>Name: {{ user?.name }}</div>
    <div>Email: {{ user?.email }}</div>
    <LogoutButton />
  </div>
</template>

<script setup>
const { $apiFetch } = useNuxtApp()
const user = ref(null)

onMounted(async () => {
  user.value = await $apiFetch('/api/user', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })
})
</script>
