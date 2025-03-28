import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

export default defineNuxtPlugin(() => {
  const { apiUrl } = useRuntimeConfig().public;

  const directus = createDirectus(apiUrl).with(rest());

  return {
    provide: { directus, readItem, readItems },
  };
});
