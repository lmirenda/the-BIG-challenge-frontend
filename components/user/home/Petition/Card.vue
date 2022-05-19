<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="sm:p-6">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <div class="flex justify-end">
          <NuxtLink to="/user-panel">
            <XIcon
              class="h-7 w-7 flex justify-end hover:cursor-pointer hover:bg-gray-200"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ petition.title }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ petition.created_at }}
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
              {{ petition.patient?.patient_weight }}
            </dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-500">Symptoms</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition.symptoms }}
            </dd>
          </div>
          <div class="sm:col-span-2">
            <dt class="text-sm font-medium text-gray-500">Other Info</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition.patient?.patient_other_info }}
            </dd>
          </div>
          <div class="sm:col-span-2" v-if="petition.status == 'in progress'">
            <dt class="text-sm font-medium text-gray-500">Doctor</dt>
            <dd class="mt-1 text-sm text-gray-900">
              {{ petition.doctor.name }}
            </dd>
          </div>
          <div class="sm:col-span-2" v-if="petition.status == 'done'">
            <dt class="text-sm font-medium text-gray-500">Attachments</dt>
            <dd class="mt-1 text-sm text-gray-900">
              <ul
                role="list"
                class="border border-gray-200 rounded-md divide-y divide-gray-200"
              >
                <li
                  class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                >
                  <div class="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      class="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span class="ml-2 flex-1 w-0 truncate">
                      <NuxtLink
                        to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                      >
                        <dd
                          class="mt-1 text-sm text-gray-900 hover:text-blue-500 hover:cursor-pointer"
                        >
                          {{ petition?.file }}
                        </dd>
                      </NuxtLink>
                    </span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon, XIcon } from '@heroicons/vue/solid'

const { $apiFetch } = useNuxtApp()
const petition = ref([])
const route = useRoute()
const user = ref()

async function getPetition() {
  petition.value = await $apiFetch('/api/petitions/' + route.params.id, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })
}

onBeforeMount(getPetition())
</script>
