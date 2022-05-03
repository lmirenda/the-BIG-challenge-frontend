<template>
  <NuxtLayout name="user">
    <UserPatientActions>Home</UserPatientActions>
    <DoctorTable />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'doctor'],
})
</script>
