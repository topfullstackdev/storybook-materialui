import { Meta, Story } from '@storybook/react';

import { Breadcrumb, BreadcrumbProps } from './breadcrumb';

const items = [
  { text: 'HOME', href: '/' },
  { text: 'SUB-LINK', href: '/' },
  { text: 'CURRENT-PAGE' },
];

export default {
  component: Breadcrumb,
  title: 'Breadcrumb',
} as Meta;

const Template: Story<BreadcrumbProps> = function Template(args) {
  return <Breadcrumb {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  items,
};
