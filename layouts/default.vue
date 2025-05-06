<template>
  <main>
    <pre>This is default layout</pre>
    <nav class="flex gap-2">
      <NuxtLink to="/">Main</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <slot />
  </main>
</template>
