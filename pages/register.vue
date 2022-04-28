<template>
  <div>
    <RegisterForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['guest'],
})
</script>
