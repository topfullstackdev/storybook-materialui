import { BreadcrumbItem } from './breadcrumb';

export interface BreadcrumbItemDefinition {
  text: string;
  href?: string;
  parent?: string;
}

export function getBreadcrumbItems(
  url: string,
  itemDefinitions: BreadcrumbItemDefinition[],
): BreadcrumbItem[] {
  return [...itemDefinitions]
    .reverse()
    .reduce((items, item) => {
      const lastItem = items[0];
      if (lastItem) {
        return item.text === lastItem.parent ? [item, ...items] : items;
      }
      return item.href && url.includes(item.href)
        ? [{ text: item.text, parent: item.parent }] // Leave off href on first match
        : [];
    }, [] as BreadcrumbItemDefinition[])
    .map(({ text, href }) => ({ text, href }));
}
