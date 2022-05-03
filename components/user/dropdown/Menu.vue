<template>
  <Menu as="div" class="px-3 relative inline-block text-left">
    <div>
      <UserDropdownContainerButton />
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
      >
        <div>
          <UserDropdownItem
            v-for="item in menuItems"
            :key="item.title"
            :item="item"
          />
        </div>
        <div>
          <UserDropdownLogout />
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuItems } from '@headlessui/vue'
import { SelectorIcon } from '@heroicons/vue/solid'

const menuItems = ref([
  {
    title: 'View Profile',
    page: '/info',
  },
  {
    title: 'Settings',
    page: '',
  },
  {
    title: 'Support',
    page: '',
  },
])

const logoutItem = ref({
  title: 'Logout',
  page: '/logout',
})
</script>
