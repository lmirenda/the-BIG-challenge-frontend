<template>
  <div>
    <NuxtLink
      :to="item.href"
      :class="[
        item.current
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
      ]"
      :aria-current="item.current ? 'page' : undefined"
    >
      <component
        :is="item.icon"
        :class="[
          item.current
            ? 'text-gray-500'
            : 'text-gray-400 group-hover:text-gray-500',
          'mr-3 flex-shrink-0 h-6 w-6',
        ]"
        aria-hidden="true"
      />
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {
      name: 'Name',
      href: '',
      icon: 'iconPLACEHOLDER',
      current: false,
    },
  },
})
</script>
