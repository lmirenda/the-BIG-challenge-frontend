<template>
  <NuxtLayout name="user">
    <UserPatientActions>Home</UserPatientActions>
    <DoctorAcceptedTable />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'doctor'],
})
</script>
