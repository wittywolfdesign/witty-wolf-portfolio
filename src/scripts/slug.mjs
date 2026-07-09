/* One slug function, three consumers, so the section index always lines up:
   the build-time rehype plugin that stamps ids onto <p class="note">, the
   CaseIndex nav that renders the anchor hrefs, and the runtime scroll-spy.
   Same input text -> same id everywhere, deterministically. */
export function slug(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
