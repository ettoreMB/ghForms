export function transformTitleToKeyName(title: string) {
  return title.replace(/\s/g, '_').normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}