<template>
  <NuxtLayout name="user">
    <ClientOnly>
      <DoctorAcceptedCard />
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
})
</script>
