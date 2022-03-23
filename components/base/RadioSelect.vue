<template>
  <RadioGroup v-model="selected">
    <RadioGroupLabel class="sr-only"> Account type </RadioGroupLabel>
    <div class="relative bg-white rounded-md -space-y-px">
      <RadioGroupOption
        as="template"
        v-for="(plan, planIdx) in plans"
        :key="plan.name"
        :value="plan"
        v-slot="{ checked, active }"
      >
        <div
          :class="[
            planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
            planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
            checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
            'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none',
          ]"
        >
          <div class="flex items-center text-sm">
            <span
              :class="[
                checked
                  ? 'bg-indigo-600 border-transparent'
                  : 'bg-white border-gray-300',
                active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                'h-4 w-4 rounded-full border flex items-center justify-center',
              ]"
              aria-hidden="true"
            >
              <span class="rounded-full bg-white w-1.5 h-1.5" />
            </span>
          </div>
          <RadioGroupDescription
            class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
          >
            <span
              :class="[
                checked ? 'text-indigo-900' : 'text-gray-900',
                'font-medium',
              ]"
              >Register as {{ plan.name }}</span
            >
          </RadioGroupDescription>
        </div>
      </RadioGroupOption>
    </div>
    Child value: {{ selected.name }}
  </RadioGroup>
</template>

<script setup>
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'

const plans = [
  {
    name: 'doctor',
  },
  {
    name: 'patient',
  },
]
// const props = defineProps({
//   plans: {
//     type: Array,
//     default: [
//       {
//         name: 'doctor',
//       },
//       {
//         name: 'patient',
//       },
//     ],
//   },
// })

const selected = ref(plans[0])
</script>
