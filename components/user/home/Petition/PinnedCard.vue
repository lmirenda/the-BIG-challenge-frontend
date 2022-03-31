<template>
  <div class="px-4 mt-6 sm:px-6 lg:px-8">
    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
      Pinned petitions
    </h2>
    <ul
      role="list"
      class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3"
    >
      <UserHomePetitionCard
        v-for="petition in pinnedPetitions"
        :key="petition.id"
        :item="petition"
        :removeFromPinned="petitionStore.unpinPetition(petition.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import { usePatientPetitionStore } from '@/stores/patientPetitions'
const petitionStore = usePatientPetitionStore()

const petitions = ref(petitionStore.petitions)
const pinned = petitions.value.filter((petition) => petition.pinned)

const pinnedPetitions = ref(pinned)

// TODO: Retrieve all petitions from session API, modify and save to Vuex Storage
</script>
