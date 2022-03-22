<template>
  <button
    class="justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    @click.prevent="logout"
  >
    Logout
  </button>
</template>

<script setup>
const { $apiFetch } = useNuxtApp()

async function logout() {
  try {
    await $apiFetch('/api/logout', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
      },
    })
    sessionStorage.setItem('validToken', '')
    window.location.pathname = '/login'
  } catch (err) {
    console.log(err.data)
  }
}
</script>
