<template>
  <MenuButton
    class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
  >
    <span class="flex w-full justify-between items-center">
      <span class="flex min-w-0 items-center justify-between space-x-3">
        <img
          class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          alt=""
        />
        <span class="flex-1 flex flex-col min-w-0">
          <span class="text-gray-900 text-sm font-medium truncate">{{
            user.name
          }}</span>
          <span class="text-gray-500 text-sm truncate">{{ user.type }}</span>
        </span>
      </span>
      <SelectorIcon
        class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
    </span>
  </MenuButton>
</template>

<script setup>
import { MenuButton } from '@headlessui/vue'
import { SelectorIcon } from '@heroicons/vue/solid'

const props = defineProps({
  user: {
    type: Object,
    default: {
      name: 'User Name',
      type: 'User type',
    },
  },
})
</script>
