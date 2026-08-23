import logos from '@iconify-json/logos/icons.json';
import * as simpleIcons from 'simple-icons';

interface SimpleIcon {
  title: string;
  path: string;
  hex: string;
}

export interface Icon {
  /** Raw SVG markup, with the official brand colours baked in. */
  body: string;
  width: number;
  height: number;
}

/**
 * Our slugs mostly match the `logos` set. These are the ones that do not.
 *
 * Several entries in that set are full lockups including the wordmark, which
 * at listing size reduces the actual symbol to a few pixels. Where an
 * icon-only variant exists, it is used instead.
 */
const ALIASES: Record<string, string> = {
  apachekafka: 'kafka-icon',
  linux: 'linux-tux',
  nodedotjs: 'nodejs',
  typescript: 'typescript-icon',
  mysql: 'mysql-icon',
  docker: 'docker-icon',
  astro: 'astro-icon',
};

/**
 * Resolve a mark by slug.
 *
 * Primary source is the Iconify `logos` set — the official, full-colour brand
 * artwork. Anything it does not carry (ClickHouse, currently) falls back to the
 * monochrome simple-icons path, tinted with that brand's colour so the two
 * sources sit together. Build-time only; none of this reaches the client.
 */
export function getIcon(slug: string): Icon {
  const key = ALIASES[slug] ?? slug;
  const icon = (logos.icons as Record<string, { body: string; width?: number; height?: number }>)[key];

  if (icon) {
    return {
      body: icon.body,
      width: icon.width ?? logos.width,
      height: icon.height ?? logos.height,
    };
  }

  const siKey = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const fallback = (simpleIcons as unknown as Record<string, SimpleIcon>)[siKey];

  if (!fallback) {
    throw new Error(
      `No mark for "${slug}" — not in the logos set (looked for "${key}") ` +
        `and not in simple-icons (looked for "${siKey}")`,
    );
  }

  return {
    body: `<path fill="#${fallback.hex}" d="${fallback.path}"/>`,
    width: 24,
    height: 24,
  };
}
