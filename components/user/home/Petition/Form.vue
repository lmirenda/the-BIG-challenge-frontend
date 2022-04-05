<template>
  <div class="mx-6 my-6">
    <form class="relative" @submit.prevent="createPetition">
      <div
        class="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
      >
        <label for="title" class="sr-only">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          class="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 px-3"
          placeholder="Title"
          v-model="title"
        />
        <label for="description" class="sr-only">Description</label>
        <textarea
          rows="2"
          name="description"
          id="description"
          class="block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm px-3"
          placeholder="Describe your symptoms..."
          v-model="symptoms"
        />

        <!-- Spacer element to match the height of the toolbar -->
        <div aria-hidden="true">
          <div class="py-2">
            <div class="h-9" />
          </div>
          <div class="h-px" />
          <div class="py-2">
            <div class="py-px">
              <div class="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 inset-x-px">
        <div
          class="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3"
        >
          <div class="flex-shrink-0">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
    <div class="my-6">
      <AlertSuccess v-if="showAlert == true" @close="close" />
    </div>
  </div>
</template>

<script setup>
const title = ref('')
const symptoms = ref('')
const showAlert = ref(false)
const { $apiFetch } = useNuxtApp()

async function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}
async function createPetition() {
  await csrf()
  try {
    let petition = await $apiFetch('/api/petitions/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'X-XSRF-TOKEN': sessionStorage.getItem('validToken'),
        Authorization: 'Bearer ' + sessionStorage.getItem('validToken'),
      },
      body: {
        title: title.value,
        symptoms: symptoms.value,
      },
    })
    console.log(petition)
    showAlert.value = true
    clearForm()
  } catch (error) {
    console.log(error)
  }
}
function close() {
  showAlert.value = false
}

function clearForm() {
  title.value = ''
  symptoms.value = ''
}
</script>
