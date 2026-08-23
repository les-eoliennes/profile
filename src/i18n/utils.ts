import { DEFAULT_LANG, TRANSLATED_ROUTES, UI, type Lang, type UIKey } from './ui';

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

/** Does this route exist in both editions? */
export function hasTranslation(pathname: string): boolean {
  const base = stripLang(pathname).replace(/\/$/, '') || '/';
  return (TRANSLATED_ROUTES as readonly string[]).includes(base);
}

/** The same page in the other edition. */
export function alternatePath(pathname: string, lang: Lang): string {
  const base = stripLang(pathname);
  return lang === 'zh' ? base : localizePath(base, 'zh');
}
