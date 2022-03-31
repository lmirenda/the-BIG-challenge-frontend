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
              Doctor
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
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-100">
          <UserHomePetitionRow
            v-for="petition in petitionStore.petitions"
            :key="petition.id"
            :item="petition"
            :pin="petitionStore.pinPetition(petition.id)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { usePatientPetitionStore } from '@/stores/patientPetitions'
const petitionStore = usePatientPetitionStore()

const petitions = ref(petitionStore.petitions)
</script>
