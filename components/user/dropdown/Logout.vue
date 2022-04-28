<template>
  <div>
    <MenuItem v-slot="{ active }">
      <span
        @click.prevent="logout"
        :class="[
          active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
          'block px-4 py-2 text-sm',
        ]"
      >
        Logout
      </span>
    </MenuItem>
  </div>
</template>

<script setup>
import { MenuItem } from '@headlessui/vue'

definePageMeta({
  middleware: ['auth'],
})
const { $apiFetch } = useNuxtApp()
const { removeUser } = useAuth()

async function logout() {
  try {
    await $apiFetch('/api/logout', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
      },
    })
    sessionStorage.clear()

    window.location.pathname = '/login'
  } catch (err) {
    console.log(err.data)
  } finally {
    removeUser()
  }
}
</script>
