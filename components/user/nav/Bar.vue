<template>
  <div>
    <nav class="px-3 mt-6">
      <div v-if="isPatient">
        <UserNavMain />
      </div>
      <div v-if="isDoctor">
        <UserNavSecondary />
      </div>
    </nav>
  </div>
</template>

<script setup>
const { isDoctor, isPatient } = useAuth()
</script>
