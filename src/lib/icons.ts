import * as simpleIcons from 'simple-icons';

interface SimpleIcon {
  title: string;
  path: string;
  hex: string;
}

/**
 * 按 slug 取 simple-icons 的官方图标路径与品牌色。
 * 只在构建期调用，图标数据不会进客户端产物。
 */
export function getIcon(slug: string): SimpleIcon {
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = (simpleIcons as unknown as Record<string, SimpleIcon>)[key];

  if (!icon) {
    throw new Error(`simple-icons 中不存在图标 "${slug}"（查找的导出名：${key}）`);
  }

  return icon;
}
