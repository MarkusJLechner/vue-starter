<template>
  <main class="max-w-5xl p-5 mx-auto my-10 text-center">
    <router-view />
    <div>
      <VButton @click="router.back()"> Go Back </VButton>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useMeta } from 'vue-meta'
import VButton from '~/components/VButton.vue'

useMeta({
  title: '404 - Not found!',
})

const router = useRouter()
</script>
