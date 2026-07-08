// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wittywolf.design',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
