<template>
  <tr>
    <td
      class="px-6 py-3 max-w-0 whitespace-nowrap text-sm font-medium text-gray-900"
    >
      <div class="flex items-center space-x-3 lg:pl-2">
        <div
          :class="[item.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full']"
          aria-hidden="true"
        />
        <a href="#" class="truncate hover:text-gray-600">
          <span> Project title with a very long name here </span>
        </a>
      </div>
    </td>
    <td class="px-6 py-3 text-sm text-gray-500 font-medium">
      <div class="flex items-center space-x-2">
        <div class="flex flex-shrink-0 -space-x-1">
          Dr With a very Long Name Goes here
        </div>
      </div>
    </td>
    <td
      class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left"
    >
      Project Date Goes here
    </td>
    <td class="px-6 py-3 whitespace-nowrap text-center text-sm font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Pin</a>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {
      id: 1,
      title: 'Petition',
      initials: 'PA',
      status: 'Pending',
      pinned: true,
      bgColorClass: 'bg-blue-500',
    },
  },
})
</script>
