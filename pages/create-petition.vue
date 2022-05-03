<template>
  <NuxtLayout name="user">
    <UserPatientActions :link="'user-panel'" :name="'Go back'" :button="true"
      >Create Petition
    </UserPatientActions>
    <UserHomePetitionForm />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'patient'],
})
</script>
