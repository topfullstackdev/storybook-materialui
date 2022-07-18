import { Meta, Story } from '@storybook/react';

import { Alert, AlertProps } from './alert';

const AlertDemo: Story<AlertProps> = function AlertDemo({
  severity,
  ...props
}: AlertProps) {
  return (
    <Alert {...props} severity={severity}>
      Alert of type <code> {severity}</code>
    </Alert>
  );
};

export default {
  component: Alert,
  title: 'Alert',
  args: {
    children: 'Alert message',
  },
} as Meta<AlertProps>;

export const Error = AlertDemo.bind({});
Error.args = {
  severity: 'error',
};
export const Warning = AlertDemo.bind({});
Warning.args = {
  severity: 'warning',
};
export const Info = AlertDemo.bind({});
Info.args = {
  severity: 'info',
};
export const Success = AlertDemo.bind({});
Success.args = {
  severity: 'success',
};
