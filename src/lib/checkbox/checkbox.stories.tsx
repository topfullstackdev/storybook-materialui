import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import { useState } from 'react';

import { Checkbox, CheckboxProps } from './checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
} as Meta;

const Template: Story<CheckboxProps> = function Template(args) {
  const { label, name } = args;
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(...e) => {
        setChecked(!checked);
        action('changed')(...e);
      }}
      name={name}
      label={label}
    />
  );
};

export const Standard = Template.bind({});
Standard.args = {
  label: 'Remember me',
  name: 'remember',
};
