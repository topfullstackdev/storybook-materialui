// import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { SelectGroup } from './select-group';

export type Ticket = {
  name: string;
  label: string;
};

export const tickets: Ticket[] = [
  { name: 'product_error', label: 'product error' },
  { name: 'billing_issue', label: 'billing issue' },
];

export default {
  component: SelectGroup,
  title: 'SelectGroup',
} as Meta;

const Template: Story = function Template() {
  const extractLabel = (ticket: Ticket) => ticket.label;
  const extractName = (ticket: Ticket) => ticket.name;
  return (
    <SelectGroup
      options={tickets}
      extractLabel={extractLabel}
      extractName={extractName}
      name="remember"
      label="Remember me"
    />
  );
};

export const Standard = Template.bind({});
Standard.args = {};
