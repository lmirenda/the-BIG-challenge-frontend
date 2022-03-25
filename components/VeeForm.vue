<template>
  <div class="border border-red-500">
    <div>
      <form @submit="onSubmit">
        <Field name="email" type="email" :rules="validateEmail" />
        <ErrorMessage name="email" />
        <button>Sign up</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

function onSubmit(values) {
  console.log(values)
}

function validateEmail(value) {
  if (!value) {
    return 'This field is required'
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  return true
}
</script>
