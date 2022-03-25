<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Already have an account?
        <NuxtLink
          to="/login"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Log in
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form class="space-y-6" @submit="handleSubmit">
          <BaseInputField
            :name="'name'"
            :type="'text'"
            v-model="fullName"
            :validation="validateName"
          >
            Full name
          </BaseInputField>
          <BaseInputField
            :name="'email'"
            :type="'email'"
            v-model="email"
            :validation="validateEmail"
          >
            Email
          </BaseInputField>
          <BaseInputField
            :name="'confirmedEmail'"
            :type="'email'"
            v-model="confirmedEmail"
            :referenceValue="email"
            :validation="validateRequired"
          >
            Confirm email
          </BaseInputField>

          <BaseInputField
            :name="'password'"
            :type="'password'"
            v-model="password"
            :validation="validatePassword"
          >
            Password
          </BaseInputField>

          <BaseInputField
            :name="'confirmedPassword'"
            :type="'password'"
            v-model="confirmedPassword"
            :referenceValue="password"
            :validation="validateRequired"
          >
            Confirm Password
          </BaseInputField>

          <BaseRadioSelect v-model="type" @updateType="updateParent"
            >Account Type: {{ type }}</BaseRadioSelect
          >

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
            <span
              class="mt-1 text-red-500 text-xs"
              v-if="showUnprocessableError"
              >Unprocessable. Check your inputs.</span
            >
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
  </div>
</template>

<script setup>
import {
  validateName,
  validatePassword,
  validateEmail,
  validateRequired,
  validateAllFields,
} from '../helpers/validators/registration'
import { Form } from 'vee-validate'

const { $apiFetch } = useNuxtApp()

const fullName = ref('')
const email = ref('')
const confirmedEmail = ref('lightit@mail.com')
const password = ref('')
const confirmedPassword = ref('')
const type = ref('')
const errors = ref([])
const isLoading = ref(false)
const showUnprocessableError = ref('')

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function register() {
  isLoading.value = true
  await csrf()

  try {
    await $apiFetch('/api/register', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
        confirmed_password: confirmedPassword.value,
        name: fullName.value,
        type: type.value,
      },
    })
    window.location.pathname = '/login'
  } catch (err) {
    console.log(err.data)
    errors.value = Object.values(err.data.errors).flat()
  }
  isLoading.value = false
}

function handleSubmit(values) {
  console.log(values)
  let process = validateAllFields(values)
  console.log(process)
  if (process) {
    showUnprocessableError.value = false
    register()
  } else {
    showUnprocessableError.value = true
  }
}

function updateParent(value) {
  type.value = value
}
</script>
