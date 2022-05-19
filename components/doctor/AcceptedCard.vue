<template>
  <div class="sm:p-6">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <div class="flex justify-end">
          <NuxtLink to="/petitions/doctor/accepted/">
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
              {{ petition?.patient?.patient_phone }}
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">Height and Weight</dt>
            <dd class="mt-1 text-sm text-gray-900">
              Height: {{ petition?.patient?.patient_height }} | Weight:
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
          <div class="sm:col-span-2" v-if="petition?.status == 'in progress'">
            <dt class="text-sm font-medium text-gray-500">Doctor</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition?.doctor?.name }}
            </dd>
          </div>
          <div class="sm:col-span-2" v-if="petition?.status == 'pending'">
            <div class="flex-shrink-0">
              <button
                type="button"
                :disabled="showAlert"
                @click.prevent="acceptPetition"
                class="disabled:bg-indigo-200 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {{ !showAlert ? 'Accept' : 'Accepted' }}
              </button>
            </div>
          </div>
          <div class="sm:col-span-2" v-if="petition?.status == 'in progress'">
            <BaseDragUpload @drop.prevent="drop" @change="selectedFile" />
            <dd class="mt-1 text-sm text-gray-900">
              {{ dropzoneFile?.name }}
            </dd>
            <button
              v-if="dropzoneFile"
              type="button"
              @click="finishPetition"
              :disabled="showAlert"
              class="mt-3 disabled:bg-indigo-200 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Finish
            </button>
          </div>

          <div class="sm:col-span-2" v-if="petition?.status == 'done'">
            <dt class="text-sm font-medium text-gray-500">
              Download prescription
            </dt>
            <NuxtLink
              to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            >
              <dd
                class="mt-1 text-sm text-gray-900 hover:text-blue-500 hover:cursor-pointer"
              >
                {{ petition?.file }}
              </dd>
            </NuxtLink>
          </div>
        </dl>
      </div>
    </div>
    <div class="mt-6">
      <AlertSuccess v-if="showAlert == true" @close="close">
        <div class="inline-block">Petition completed successfully.</div>
      </AlertSuccess>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon, XIcon } from '@heroicons/vue/solid'

const { $apiFetch } = useNuxtApp()
const petition = ref()
const route = useRoute()
const user = ref()
const showAlert = ref(false)
const dropzoneFile = ref()

const selectedFile = () => {
  dropzoneFile.value = document.querySelector('input[type=file]').files[0]
}

const drop = (e) => {
  dropzoneFile.value = e.dataTransfer.files[0]
}

const close = () => {
  showAlert.value = false
}

const reload = () => {
  window.location.reload()
}

async function finishPetition() {
  let formData = new FormData()
  formData.append('file', dropzoneFile.value)
  formData.append('petition_id', petition.value.id)
  console.log({ formdata: formData, dropzoneFile: dropzoneFile.value })

  await $apiFetch('/api/petitions/accepted/finish/' + route.params.id, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
      'Content-Type': 'multipart/form-data',
    },
    body: {
      file: dropzoneFile.value,
    },
  })
  showAlert.value = true
}

async function getPetition() {
  petition.value = await $apiFetch('/api/petitions/' + route.params.id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })
}

async function acceptPetition() {
  await $apiFetch(
    '/api/petitions/accept/' + petition.value.id,
    {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
      },
    },
    (showAlert.value = true)
  )
}

onBeforeMount(getPetition())
</script>
