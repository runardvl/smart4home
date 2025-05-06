<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: null,
  },
});
console.log(props.class);
</script>

<template>
  <code
    :class="[
      $props.class,
      'px-1.5 py-0.5 text-sm font-mono font-medium rounded-[calc(var(--ui-radius)*1.5)] inline-block border border-(--ui-border-muted) text-(--ui-text-highlighted) bg-(--ui-bg-muted)',
    ]"
  >
    <slot
  /></code>
</template>
