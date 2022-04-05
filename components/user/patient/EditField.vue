<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <form @submit.prevent="savePatientInformation">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <UserPatientActions :link="'edit-info'" :name="'Save'"
        >Edit personal information
      </UserPatientActions>
    </div>
  </form>
</template>

<script setup>
import { toRaw } from 'vue'
const { $apiFetch } = useNuxtApp()

const user = ref()
const errors = ref()

onBeforeMount(async () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  if (userData.patient_information != null) {
    user.value = userData
  }
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
