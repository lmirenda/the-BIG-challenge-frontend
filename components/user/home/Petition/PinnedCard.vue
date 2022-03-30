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
        v-for="item in pinnedItems"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    title: 'Petition',
    initials: 'PA',
    status: 'Pending',
    pinned: true,
    bgColorClass: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Petition',
    initials: 'PA',
    status: 'In-progress',
    pinned: true,
    bgColorClass: 'bg-green-600',
  },
  {
    id: 3,
    title: 'Petition',
    initials: 'PA',
    status: 'Finished',
    pinned: true,
    bgColorClass: 'bg-yellow-600',
  },
])
const pinned = projects.value.filter((project) => project.pinned)

const pinnedItems = ref(projects)
</script>
