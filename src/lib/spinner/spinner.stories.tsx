import { Meta, Story } from '@storybook/react';

import { Spinner, SpinnerProps } from './spinner';

export default {
  component: Spinner,
  title: 'Spinner',
  args: {}, // Common args
} as Meta<SpinnerProps>;

function Template(props: SpinnerProps) {
  return <Spinner {...props} />;
}

export const Primary: Story<SpinnerProps> = Template.bind({});
