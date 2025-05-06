<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array,
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
const codeBlock = ref(null);
const copied = ref(false);

const copyCode = async () => {
  try {
    const code =
      codeBlock.value?.querySelector("code")?.innerText || props.code;
    await navigator.clipboard.writeText(code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Не удалось скопировать код:", err);
  }
};
</script>

<template>
  <div>
    <header
      class="flex justify-between px-4 py-2 bg-gray-700 text-gray-200 rounded-t-md"
    >
      <div class="flex items-center gap gap-2 font-mono text-sm">
        <span
          v-if="language && language !== 'text'"
          class="shiki shiki-themes github-dark"
          >{{ language }}</span
        >
        <span v-if="filename">файл: {{ filename }}</span>
      </div>
      <UButton
        :icon="copied ? 'mdi:check' : 'mdi:content-copy'"
        variant="outline"
        size="xs"
        class="cursor-pointer"
        :ui="{
          leadingIcon: 'text-white',
        }"
        @click="copyCode"
      />
    </header>
    <pre :class="[$props.class, 'mt-0 rounded-t-none']"><slot /></pre>
  </div>
</template>

<style>
pre code .line {
  display: block;
}
</style>
