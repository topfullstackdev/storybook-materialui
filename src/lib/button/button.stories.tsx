import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps, ButtonVariant } from './button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      name: 'children',
      control: {
        required: true,
      },
    },
    variant: {
      name: 'variant',
      control: {
        required: true,
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = function Template(args) {
  const { children, ...rest } = args;
  return <Button {...rest}>{children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.ROUNDED,
  children: 'Button',
};
