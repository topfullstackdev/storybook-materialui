import {
  BreadcrumbItemDefinition,
  getBreadcrumbItems,
} from '../breadcrumb.utils';

const itemDefinitions: BreadcrumbItemDefinition[] = [
  { text: '/', href: '/' },
  { text: 'A', href: '/a', parent: '/' },
  { text: 'B', href: '/a/b', parent: 'A' },
  { text: 'C', href: '/a/c', parent: 'A' },
  { text: 'D', href: '/a/c/d', parent: 'C' },
  { text: 'E', href: '/a/c/e', parent: 'D' }, // Breadcrumb hierarchy doesn't always match url hierarchy
];

describe('Breadcrumb Utils', () => {
  it('should generate base item without href', () => {
    const items = getBreadcrumbItems('/', itemDefinitions);
    expect(items).toStrictEqual([{ text: '/', href: undefined }]);
  });

  it('should generate two items, last without href', () => {
    const items = getBreadcrumbItems('/a/b', itemDefinitions);
    expect(items).toStrictEqual([
      { text: '/', href: '/' },
      { text: 'A', href: '/a' },
      { text: 'B', href: undefined },
    ]);
  });

  it('should generate all items, last without href', () => {
    const items = getBreadcrumbItems('/a/c/e', itemDefinitions);
    expect(items).toStrictEqual([
      { text: '/', href: '/' },
      { text: 'A', href: '/a' },
      { text: 'C', href: '/a/c' },
      { text: 'D', href: '/a/c/d' },
      { text: 'E', href: undefined },
    ]);
  });
});
