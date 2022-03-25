<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">
      <slot></slot>
    </label>
    <div class="mt-1">
      <Field
        :name="name"
        :type="type"
        :required="required"
        v-bind:class="className"
        @change="$emit('update:modelValue', $event.target.value)"
        @blur="handleBlur"
        :rules="validation"
      />
      <ErrorMessage :name="name" class="text-red-500 text-xs" />
      <span class="text-red-500 text-xs" v-if="confirmationError"
        >Comirmation {{ type }}s don't not match</span
      >
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'
const confirmationError = ref(false)
const className = ref(
  'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
)

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  referenceValue: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: true,
  },
  validation: {
    type: Function,
    default: null,
  },
})

function handleBlur() {
  if (props.referenceValue === null) {
  } else {
    if (props.modelValue === props.referenceValue) {
      confirmationError.value = false
    } else {
      confirmationError.value = true
    }
  }
}
</script>
