import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material';

import { Text } from '../text/text';

export type AlertProps = MuiAlertProps;

export function Alert({ children, ...props }: AlertProps) {
  return (
    <MuiAlert {...props}>
      <Text>{children}</Text>
    </MuiAlert>
  );
}

export default Alert;
