import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export interface Report {
  entry: CollectionEntry<'work'>;
  /** Canonical slug, shared by both editions, e.g. 'orderflow'. */
  slug: string;
}

const ZH_PREFIX = 'zh/';

/**
 * Reports for one edition.
 *
 * Chinese reports live in `src/content/work/zh/`, sharing the schema and the
 * cover images one directory up. A directory rather than a `.zh.mdx` suffix
 * because the loader strips dots out of the generated id, which silently turned
 * `chronos.zh` into `chronoszh` and published it as its own English report.
 *
 * A report with no Chinese file falls back to the English one rather than
 * vanishing from the Chinese edition.
 */
export async function getReports(lang: Lang): Promise<Report[]> {
  const all = await getCollection('work', ({ data }) => !data.draft);

  const english = new Map<string, CollectionEntry<'work'>>();
  const chinese = new Map<string, CollectionEntry<'work'>>();

  for (const entry of all) {
    if (entry.id.startsWith(ZH_PREFIX)) {
      chinese.set(entry.id.slice(ZH_PREFIX.length), entry);
    } else {
      english.set(entry.id, entry);
    }
  }

  return [...english.entries()]
    .map(([slug, en]) => ({
      slug,
      entry: (lang === 'zh' ? (chinese.get(slug) ?? en) : en),
    }))
    .sort((a, b) => a.entry.data.order - b.entry.data.order);
}
