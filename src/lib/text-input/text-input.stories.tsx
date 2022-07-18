import { Meta, Story } from '@storybook/react';
import React from 'react';

import { TextInput, TextInputProps } from './text-input';

export default {
  component: TextInput,
  title: 'TextInput',
  argTypes: {
    variant: {
      options: ['standard', 'filled', 'outlined'],
      control: { type: 'select' },
      table: { disable: false },
    },
    onChange: {
      action: 'changed',
      onEmit: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => ({ value: e.target.value }),
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<TextInputProps> = function Template(args) {
  return <TextInput {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
  label: 'Address (Line 1)',
  variant: 'standard',
};
export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Address (Line 1)',
  variant: 'outlined',
};
export const Filled = Template.bind({});
Filled.args = {
  label: 'Address (Line 1)',
  variant: 'filled',
};
export const Multiline = Template.bind({});
Multiline.args = {
  label: 'Notes',
  multiline: true,
  minRows: 2,
};
