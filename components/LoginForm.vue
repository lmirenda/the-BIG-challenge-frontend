<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" @submit.prevent="login">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              required=""
              v-model="email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              v-model="password"
              required=""
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <ul v-if="errors.length > 0" class="mt-1 text-red-500 text-xs">
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { toRaw } from 'vue'
import { formatColor, unpinPetition, initials } from '~~/helpers/formatPetition'
const { $apiFetch } = useNuxtApp()

const email = ref('')
const password = ref('')
const errors = ref([])
const isLoading = ref(false)

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function saveUser() {
  let user = await $apiFetch('/api/user', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })
  let rawData = toRaw(user)
  sessionStorage.setItem('user', JSON.stringify(rawData))
  return rawData
}

async function login() {
  isLoading.value = true
  await csrf()

  try {
    const token = await $apiFetch('/api/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    })
    const { setUser } = useAuth()
    sessionStorage.setItem('validToken', token)
    const userData = await saveUser()
    setUser(userData.type)
    if (userData.type == 'patient' && userData.patient_information == null) {
      window.location.pathname = '/create-patient'
    } else {
      window.location.pathname = '/user-panel'
    }
  } catch (err) {
    console.log(err.data)
    errors.value = Object.values(err.data.errors).flat()
  }
  isLoading.value = false
}
</script>
