<template>
  <div class="space-y-1">
    <UserNavItemMain v-for="item in mainItems" :key="item.name" :item="item" />
  </div>
</template>

<script setup>
import { HomeIcon, ViewListIcon } from '@heroicons/vue/outline'

const mainItems = ref([
  { name: 'Home', href: '/user-panel', icon: HomeIcon, current: true },
  {
    name: 'My petitions',
    href: '/petitions',
    icon: ViewListIcon,
    current: false,
  },
])
</script>
