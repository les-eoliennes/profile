import { DEFAULT_LANG, UI, type Lang, type UIKey } from './ui';

/** Read the edition out of a URL: /zh/... is Chinese, everything else English. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'zh' ? 'zh' : DEFAULT_LANG;
}

/**
 * Translator for a given edition. Falls back to English so a key that has not
 * been translated yet renders in English rather than as a blank.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return UI[lang][key] ?? UI[DEFAULT_LANG][key];
  };
}

/** Prefix a root-relative path with the edition, e.g. '/' -> '/zh/'. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === DEFAULT_LANG) return path;
  return path === '/' ? '/zh/' : `/zh${path}`;
}

/** Strip the edition prefix back off a path. */
export function stripLang(pathname: string): string {
  const withoutPrefix = pathname.replace(/^\/zh(?=\/|$)/, '');
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
  const base = stripLang(pathname);
  return lang === 'zh' ? base : localizePath(base, 'zh');
}
