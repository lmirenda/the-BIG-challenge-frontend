<template>
  <div>
    <MenuItem v-slot="{ active }">
      <NuxtLink
        :to="item.page"
        :class="[
          active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
          'block px-4 py-2 text-sm',
        ]"
      >
        {{ item.title }}
      </NuxtLink>
    </MenuItem>
  </div>
</template>

<script setup>
import { MenuItem } from '@headlessui/vue'

const props = defineProps({
  item: {
    type: Object,
    default: {
      title: 'Title',
      page: '',
    },
  },
})
</script>
