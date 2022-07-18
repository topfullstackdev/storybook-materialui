import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { HamburgerMenu, HamburgerMenuProps } from './hamburger-menu';

export default {
  component: HamburgerMenu,
  title: 'HamburgerMenu',
} as Meta;

const Template: Story<HamburgerMenuProps> = function Template(args) {
  const { items } = args;
  return <HamburgerMenu items={items} />;
};

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      label: 'Dashboard',
      onClick: action('dashboard'),
    },
    {
      label: 'Profile',
      onClick: action('profile'),
    },
  ],
};
