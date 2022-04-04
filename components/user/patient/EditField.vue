<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <form @submit.prevent="savePatientInformation">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <UserPatientActions :link="'edit-info'" :name="'Save'"
        >Edit personal information
      </UserPatientActions>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <label class="text-sm font-medium text-gray-500">Full name</label>
            <input
              type="text"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              :placeholder="user?.name"
              disabled="true"
            />
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <label class="text-sm font-medium text-gray-500"
              >Account type</label
            >
            <input
              type="text"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              :placeholder="user?.type"
              disabled="true"
            />
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <label class="text-sm font-medium text-gray-500"
              >Email address</label
            >
            <input
              type="text"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
              :placeholder="user?.email"
              disabled="true"
            />
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <label class="text-sm font-medium text-gray-500"
              >Phone number</label
            >
            <input
              type="text"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 border border-grey-200"
              v-model="user.patient_information.patient_phone"
            />
          </div>

          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <label class="text-sm font-medium text-gray-500">Weight</label>
            <input
              type="number"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 border border-grey-200"
              v-model="user.patient_information.patient_weight"
            />
          </div>

          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <label class="text-sm font-medium text-gray-500">Height</label>
            <input
              type="number"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 border border-grey-200"
              v-model="user.patient_information.patient_height"
            />
          </div>

          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <label class="text-sm font-medium text-gray-500"
              >Other information</label
            >
            <textarea
              type="text"
              class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 border border-grey-200"
              :placeholder="user?.patient_information.patient_other_info"
              v-model="user.patient_information.patient_other_info"
            />
          </div>
        </dl>
      </div>
    </div>
    <button type="submit">save info</button>
  </form>
</template>

<script setup>
import { toRaw } from 'vue'
const { $apiFetch } = useNuxtApp()

const user = ref()
const errors = ref()

onBeforeMount(async () => {
  user.value = JSON.parse(sessionStorage.getItem('user'))
})

async function csrf() {
  $apiFetch('/sanctum/csrf-cookie')
}
async function savePatientInformation() {
  await csrf()

  try {
    await $apiFetch('/api/patient/create', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
      },
      body: {
        patient_phone: user.value.patient_information.patient_phone,
        patient_height: user.value.patient_information.patient_height,
        patient_weight: user.value.patient_information.patient_weight,
        patient_other_info: user.value.patient_information.patient_other_info,
      },
    })
    await saveUser()

    // window.location.pathname = '/info'
  } catch (err) {
    console.log(err.data)
    errors.value = Object.values(err.data.errors).flat()
  }
  isLoading.value = false
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
}
</script>
