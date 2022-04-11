<template>
  <div class="hidden mt-8 sm:block">
    <div class="align-middle inline-block min-w-full border-b border-gray-200">
      <table class="min-w-full">
        <thead>
          <tr class="border-t border-gray-200">
            <th
              class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <span class="lg:pl-2">Petition Title</span>
            </th>
            <th
              class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Patient
            </th>
            <th
              class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Pin to home
            </th>
            <th
              class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Accept
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-100">
          <DoctorRow
            v-for="petition in petitions"
            :key="petition.id"
            :item="petition"
            @updateRow="acceptPetition(petition.id)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const { $apiFetch } = useNuxtApp()
const petitions = ref()

async function getPetitions() {
  let petition = await $apiFetch('/api/petitions', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-XSRF-TOKEN': sessionStorage.getItem('validToken'),
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })

  petitions.value = petition[0].data
  console.log(petitions.value)
}

async function acceptPetition(id) {
  await $apiFetch('/api/petitions/accept/' + id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'X-XSRF-TOKEN': sessionStorage.getItem('validToken'),
      Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
    },
  })
  getPetitions()
}

onMounted(getPetitions)
</script>
