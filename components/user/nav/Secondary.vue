<template>
  <div class="mt-8">
    <h3
      class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
      id="desktop-teams-headline"
    >
      Petition Status
    </h3>

    <UserNavItemSecondary
      v-for="item in secondaryItems"
      :key="item.name"
      :to="item.href"
      :item="item"
      class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
    />
  </div>
</template>

<script setup>
const secondaryItems = ref([
  { name: 'Pending', href: '/doctor-panel/', bgColorClass: 'bg-indigo-500' },
  {
    name: 'In Progress',
    href: '/petitions/doctor/accepted/',
    bgColorClass: 'bg-green-500',
  },
  { name: 'Completed', href: '#', bgColorClass: 'bg-yellow-500' },
])
</script>
