/**
 * Schools referenced by the education page.
 *
 * `slug` doubles as the crest filename: drop `src/assets/crests/<slug>.svg`
 * (or .png/.webp) into place and Crest.astro picks it up automatically. Until
 * a file exists, the component falls back to a monogram badge in the school's
 * colour — university crests are trademarked, so the real artwork has to be
 * added deliberately rather than pulled from an icon set.
 *
 * The colours below are the schools' publicly used brand reds, close enough to
 * read correctly beside the crest; verify against each school's brand guide if
 * this is going anywhere official.
 */
export interface School {
  /** Crest filename and lookup key. */
  slug: string;
  name: string;
  nameZh: string;
  /** Shown when no crest image has been supplied. */
  monogram: string;
  color: string;
  /**
   * Optical correction. Equal height flatters wide wordmarks and starves tall
   * narrow marks, so a tall crest gets scaled up to carry comparable weight in
   * a mixed row. 1 means "use the given height as-is".
   */
  scale?: number;
}

export const SCHOOLS: Record<string, School> = {
  szu: {
    slug: 'szu',
    name: 'Shenzhen University',
    nameZh: '深圳大学',
    monogram: '深大',
    // Sampled from the crest itself rather than a published spec.
    color: '#A4123F',
  },
  mit: {
    slug: 'mit',
    name: 'Massachusetts Institute of Technology',
    nameZh: '麻省理工学院',
    monogram: 'MIT',
    color: '#A31F34',
  },
  stanford: {
    slug: 'stanford',
    name: 'Stanford University',
    nameZh: '斯坦福大学',
    monogram: 'SU',
    color: '#8C1515',
    // The tree-and-S mark is taller than it is wide (0.65:1); at the shared
    // height it reads far lighter than the wordmarks beside it.
    scale: 1.5,
  },
  cmu: {
    slug: 'cmu',
    name: 'Carnegie Mellon University',
    nameZh: '卡内基梅隆大学',
    monogram: 'CMU',
    color: '#C41230',
  },
};
