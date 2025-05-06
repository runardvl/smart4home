<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path(route.path).first(),
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <UContainer>
    <UiSearch />
    <ContentRenderer v-if="page" :value="page" class="prose" />
    <div v-else>Page not found</div>
  </UContainer>
</template>
