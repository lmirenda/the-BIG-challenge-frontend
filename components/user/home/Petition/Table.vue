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
            v-for="petition in petitions"
            :key="petition.id"
            :item="petition"
          />
        </tbody>
      </table>
    </div>
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
</script>
