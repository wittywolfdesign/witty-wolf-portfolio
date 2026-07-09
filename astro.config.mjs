// @ts-check
import { defineConfig } from 'astro/config';
import { slug } from './src/scripts/slug.mjs';

/* Stamp a stable id onto every <p class="note"> in case-study markdown, keyed
   off its text via the shared slug(). This runs at build so the section-index
   anchors resolve even with JavaScript disabled; the runtime scroll-spy re-uses
   the same slug() and so always points at these exact ids. Only .note elements
   are touched, so the rest of the markdown is left alone.

   The notes are authored as inline HTML, which Astro carries through as raw
   string nodes (not parsed elements, so there is no tagName to match) — so we
   rewrite the raw string. An element branch is kept in case that ever changes. */
function rehypeNoteIds() {
  const text = (node) =>
    node.type === 'text'
      ? node.value
      : (node.children || []).map(text).join('');
  const addId = (open, inner) =>
    /\bid=/.test(open) ? null : slug(inner.replace(/<[^>]*>/g, ''));
  const visit = (node) => {
    if (node.type === 'raw' && node.value.includes('class="note"')) {
      node.value = node.value.replace(
        /(<p\b[^>]*class="note"[^>]*>)([\s\S]*?)<\/p>/g,
        (full, open, inner) => {
          const id = addId(open, inner);
          return id ? full.replace(open, open.replace(/>$/, ` id="${id}">`)) : full;
        }
      );
    }
    const cls = [].concat(node.properties?.className || []);
    if (node.type === 'element' && node.tagName === 'p' && cls.includes('note')) {
      node.properties = node.properties || {};
      if (!node.properties.id) node.properties.id = slug(text(node));
    }
    (node.children || []).forEach(visit);
  };
  return (tree) => visit(tree);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://wittywolf.design',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  markdown: {
    rehypePlugins: [rehypeNoteIds],
  },
});
