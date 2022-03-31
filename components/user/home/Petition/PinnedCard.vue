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
      />
    </ul>
  </div>
</template>

<script setup>
const petitions = ref([
  {
    id: 1,
    title: 'Petition',
    initials: 'PA',
    status: 'Pending',
    pinned: true,
    bgColorClass: 'bg-pink-600',
  },
  {
    id: 2,
    title: 'Petition',
    initials: 'PA',
    status: 'In-progress',
    pinned: true,
    bgColorClass: 'bg-yellow-600',
  },
  {
    id: 3,
    title: 'Petition',
    initials: 'PA',
    status: 'Finished',
    pinned: true,
    bgColorClass: 'bg-blue-500',
  },
])
const pinned = petitions.value.filter((project) => project.pinned)

const pinnedPetitions = ref(pinned)

// TODO: Retrieve all petitions from session API, modify and save to Vuex Storage
</script>
