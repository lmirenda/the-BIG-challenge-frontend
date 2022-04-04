<template>
  <NuxtLayout name="user">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form class="space-y-6" @submit="handleSubmit">
          <BaseInputField
            :name="'phone'"
            :type="'text'"
            v-model="phone"
            :validation="validateRequired"
          >
            Phone number
          </BaseInputField>
          <BaseInputField
            :name="'height'"
            :type="'number'"
            v-model="height"
            :validation="validateRequired"
          >
            Height
          </BaseInputField>
          <BaseInputField
            :name="'weight'"
            :type="'number'"
            v-model="weight"
            :validation="validateRequired"
          >
            Weight
          </BaseInputField>
          <BaseInputField
            :name="'info'"
            :type="'text'"
            v-model="otherInfo"
            :validation="validateRequired"
          >
            Other Info
          </BaseInputField>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit information and continue
            </button>
          </div>
        </Form>
        <div>
          <span class="mt-1 text-red-500 text-xs" v-if="errors.length > 0">
            <ul>
              <li v-for="error in errors" :key="error">
                {{ error }}
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { Form } from 'vee-validate'
import {
  validateRequired,
  validateAllFields,
} from '../helpers/validators/registration'
const { $apiFetch } = useNuxtApp()

const phone = ref('')
const height = ref('')
const weight = ref('')
const otherInfo = ref('')

const errors = ref([])

function handleSubmit(values) {
  console.log(values)
  registerPatient()
}

async function csrf() {
  $apiFetch('/sanctum/csrf-cookie')
}

async function registerPatient() {
  await csrf()
  try {
    await $apiFetch('/api/patient/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'X-XSRF-TOKEN': sessionStorage.getItem('validToken'),
        Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
      },
      body: {
        patient_phone: phone.value,
        patient_height: height.value,
        patient_weight: weight.value,
        patient_other_info: otherInfo.value,
      },
    })
    await saveUser()
    window.location.pathname = '/info'
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
  return rawData
}
</script>
