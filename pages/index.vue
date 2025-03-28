<template>
  <h1
    :data-directus="
      setAttr({ collection: 'global', item: '1', field: 'title' })
    "
  >
    {{ global.title }}
  </h1>
  <p
    :data-directus="
      setAttr({ collection: 'global', item: '1', field: 'description' })
    "
  >
    {{ global.description }}
  </p>
</template>

<script setup>
import { apply, setAttr } from "@directus/visual-editing";
const { $directus, $readItems } = useNuxtApp();
const { directusUrl } = useRuntimeConfig().public;

const { data: global } = await useAsyncData("global", () => {
  return $directus.request($readItems("global"));
});

onMounted(() => {
  apply({ directusUrl });
});
</script>
