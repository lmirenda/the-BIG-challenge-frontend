<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="sm:p-6">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <div class="flex justify-end">
          <NuxtLink to="/doctor-panel">
            <XIcon
              class="h-7 w-7 flex justify-end hover:cursor-pointer hover:bg-gray-200"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
        <h3 class="text-lg leading-6 font-medium text-gray-900"></h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ petition?.created_at }}
        </p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Full name</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition?.patient?.user?.name }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition?.patient?.user?.email }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Phone number</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition.patient?.patient_phone }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Height and Weight</dt>
            <dd class="mt-1 text-sm text-gray-900">
              Height: {{ petition.patient?.patient_height }} | Weight:
              {{ petition?.patient?.patient_weight }}
            </dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-500">Symptoms</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition?.symptoms }}
            </dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-500">Other Info</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition?.patient?.patient_other_info }}
            </dd>
          </div>
          <div class="sm:col-span-2" v-if="petition?.status != 'pending'">
            <dt class="text-sm font-medium text-gray-500">Doctor</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition?.doctor?.name }}
            </dd>
          </div>
          <div class="sm:col-span-2" v-if="petition?.status == 'pending'">
            <div class="flex-shrink-0">
              <button
                type="button"
                @click.prevent="acceptPetition"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Accept
              </button>
            </div>
          </div>
          <div class="sm:col-span-2" v-if="petition?.status == 'in progress'">
            <BaseDragUpload />
          </div>
        </dl>
      </div>
    </div>
    <AlertSuccess v-if="showAlert == true" @close="close"
      >Petition accepted</AlertSuccess
    >
  </div>
</template>

<script setup>
import { PaperClipIcon, XIcon } from '@heroicons/vue/solid'

const { $apiFetch } = useNuxtApp()
const petition = ref()
const route = useRoute()
const user = ref()
const showAlert = ref(false)

async function getPetition() {
  petition.value = await $apiFetch('/api/petitions/' + route.params.id, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-XSRF-TOKEN': sessionStorage.getItem('validToken'),
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })
  console.log(petition.value)
}

async function acceptPetition() {
  await $apiFetch('/api/petitions/accept/' + petition.value.id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'X-XSRF-TOKEN': sessionStorage.getItem('validToken'),
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })
  console.log(response)
  if (response.status === 200) {
    console.log('success')
  }
}

onBeforeMount(getPetition())
</script>
