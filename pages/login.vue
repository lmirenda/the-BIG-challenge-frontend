<template></template>

<script setup>

import {useNuxtApp, useState} from "nuxt3/app";

const title = useState('title')
const email = ref('')
const password = ref('')
const inLoading = ref(false)
const error = ref([])

const { $apiFetch } = useNuxtApp()

async function login() {
  alert('logging in')
}
</script>
