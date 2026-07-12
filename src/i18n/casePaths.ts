import { getCollection } from "astro:content";

/* One path builder for every locale's case routes. Entries live under
   src/content/work/<locale>/<slug>.md; the public slug is shared across
   locales (never translated), so /work/urbiqo, /nl/work/urbiqo and
   /es/work/urbiqo are the same page in three languages. */
export async function casePaths(locale: string) {
  const work = (await getCollection("work"))
    .filter((e) => e.slug.startsWith(`${locale}/`))
    .sort((a, b) => a.data.order - b.data.order);
  return work.map((entry, i) => {
    /* the next-case rotation skips drafts, so no published page ever
       leads into one; draft pages still build for review */
    let next = work[(i + 1) % work.length];
    for (let hop = 0; next.data.status !== "published" && hop < work.length; hop++) {
      next = work[(work.indexOf(next) + 1) % work.length];
    }
    return {
      params: { slug: entry.slug.split("/").pop() },
      props: { entry, next },
    };
  });
}

/* published entries for the two index pages, locale-filtered and ordered */
export async function workFor(locale: string) {
  return (await getCollection("work"))
    .filter((e) => e.slug.startsWith(`${locale}/`) && e.data.status === "published")
    .sort((a, b) => a.data.order - b.data.order);
}
