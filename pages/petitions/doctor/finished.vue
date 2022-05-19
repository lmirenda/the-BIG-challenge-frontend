<template>
  <NuxtLayout name="user">
    <UserPatientActions>Home</UserPatientActions>
    <DoctorFinishedTable />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'doctor'],
})
</script>
