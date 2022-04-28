<template>
  <NuxtLayout name="user">
    <UserPatientField />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
})
</script>
