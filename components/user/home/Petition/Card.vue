<template>
  <li class="relative col-span-1 flex shadow-sm rounded-md">
    <div
      :class="[
        item.bgColorClass,
        'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
      ]"
    >
      {{ item.initials }}
    </div>
    <div
      class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
    >
      <div class="flex-1 px-4 py-2 text-sm truncate">
        <a href="#" class="text-gray-900 font-medium hover:text-gray-600">
          {{ item.title }}
        </a>
        <p class="text-gray-500">{{ item.status }}</p>
      </div>
      <Menu as="div" class="flex-shrink-0 pr-2">
        <MenuButton
          class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <span class="sr-only">Open options</span>
          <DotsVerticalIcon class="w-5 h-5" aria-hidden="true" />
        </MenuButton>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >View</a
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <span
                  @click="petitionStore.unpinPetition(item.id)"
                  :class="[
                    active
                      ? 'bg-gray-100 text-red-400 cursor-pointer'
                      : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Removed from pinned</span
                >
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </li>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ClockIcon, MenuAlt1Icon, ViewListIcon } from '@heroicons/vue/outline'
import { DotsVerticalIcon } from '@heroicons/vue/solid'
import { usePatientPetitionStore } from '@/stores/patientPetitions'
const petitionStore = usePatientPetitionStore()
const props = defineProps({
  item: {
    type: Object,
    default: {
      id: 3,
      title: 'Dummy Petition',
      initials: 'DP',
      status: 'Unknown',
      pinned: true,
      bgColorClass: 'bg-pink-600',
    },
  },
})
</script>
