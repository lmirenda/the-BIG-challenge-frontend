<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">
      <slot></slot>
    </label>
    <div class="mt-1">
      <input
        :name="name"
        :type="type"
        :required="required"
        :class="className"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
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
  className: {
    type: String,
    default:
      'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
  },
  required: {
    type: Boolean,
    default: true,
  },
})
</script>
