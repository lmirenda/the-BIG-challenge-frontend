<template>
  <div>
    <LoginForm />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['guest'],
})
</script>
