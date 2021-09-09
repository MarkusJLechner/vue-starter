<template>
  <metainfo>
    <!--suppress HtmlUnknownAttribute -->
    <template #title="{ content }">
      {{ content ? `${content} | ${siteName}` : siteName }}
    </template>
  </metainfo>
  <router-view />
</template>

<script setup>
import { useMeta } from 'vue-meta'

const siteName = 'PWAes'

console.log('as')

useMeta({
  title: '',
  htmlAttrs: { lang: 'en', amp: true },
})
</script>
