<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <div class="max-w-screen-xl px-4 mx-auto">
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
    <!-- <TableOfContents :toc="home?.body.toc" /> -->
  </div>
</template>
