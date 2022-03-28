<template>
  <div>
    <NuxtLink
      :to="item.href"
      class="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
    >
      <span
        :class="[item.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']"
        aria-hidden="true"
      />
      <span class="truncate">
        {{ item.name }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Array,
    default: { name: 'Item', href: '#', bgColorClass: 'bg-grey-500' },
  },
})
</script>
