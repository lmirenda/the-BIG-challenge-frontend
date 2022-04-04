<template>
  <div
    class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="flex-1 min-w-0">
      <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
        <slot />
      </h1>
    </div>
    <div class="mt-4 flex sm:mt-0 sm:ml-4">
      <NuxtLink :to="props.link">
        <span
          v-if="props.button == true"
          class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
        >
          {{ props.name }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
    default: '/info',
  },
  name: {
    type: String,
    default: 'Edit',
  },
  button: {
    type: Boolean,
    default: false,
  },
})
</script>
