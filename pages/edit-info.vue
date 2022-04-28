<template>
  <NuxtLayout name="user">
    <UserPatientEditField />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'patient'],
})
</script>
