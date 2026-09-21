import { DEFAULT_LANG, UI, type Lang, type UIKey } from './ui';

/*
  GitHub Pages serves a project site from /<repo>/, so every path a reader
  follows carries that prefix while the routing below reasons about paths
  without it. The prefix is normalised once here (BASE_URL is '/' when the
  site sits at a root, and may or may not carry a trailing slash) so no call
  site has to think about it.
*/
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the deployment base. */
export function withBase(path: string): string {
  return BASE ? `${BASE}${path}` : path;
}

/** Take the deployment base back off a pathname read from `Astro.url`. */
function stripBase(pathname: string): string {
  if (!BASE || !pathname.startsWith(BASE)) return pathname;
  const rest = pathname.slice(BASE.length);
  return rest.startsWith('/') ? rest : `/${rest}`;
}

/** Read the edition out of a URL: /zh/... is Chinese, everything else English. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = stripBase(url.pathname).split('/');
  return first === 'zh' ? 'zh' : DEFAULT_LANG;
}

/**
 * Translator for a given edition. Falls back to English so a key that has not
 * been translated yet renders in English rather than as a blank.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    const raw = UI[lang][key] ?? UI[DEFAULT_LANG][key];
    if (!vars) return raw;
    // Counts and the like are substituted rather than written into the copy,
    // so adding an entry to the data cannot leave the prose stating a stale
    // number in one or both editions.
    return raw.replace(/\{(\w+)\}/g, (_, name: string) =>
      name in vars ? String(vars[name]) : `{${name}}`,
    );
  };
}

/**
 * Turn a root-relative path into an href: edition prefix, then deployment
 * base. Everything a reader can click goes through here.
 */
export function localizePath(path: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) return withBase(path);
  return withBase(path === '/' ? '/zh/' : `/zh${path}`);
}

/** Strip the deployment base and the edition prefix back off a path. */
export function stripLang(pathname: string): string {
  const withoutPrefix = stripBase(pathname).replace(/^\/zh(?=\/|$)/, '');
  return withoutPrefix === '' ? '/' : withoutPrefix;
}

/**
 * Merge an item's `zh` overrides over its English fields. Data files keep the
 * English shape and carry the translation alongside it, so an untranslated
 * field falls back rather than rendering blank.
 */
export function localize<T extends { zh?: Record<string, unknown> }>(
  item: T,
  lang: Lang,
): T {
  // The constraint stays deliberately loose: the data files use `as const`, so
  // their fields are readonly literal types that will not unify with a
  // Partial<T> parameter. The spread is checked by the shape of the data, not
  // by this signature.
  return lang === 'zh' && item.zh ? ({ ...item, ...item.zh } as T) : item;
}

/** The same page in the other edition. */
export function alternatePath(pathname: string, lang: Lang): string {
  const path = stripLang(pathname);
  return lang === 'zh' ? withBase(path) : localizePath(path, 'zh');
}
