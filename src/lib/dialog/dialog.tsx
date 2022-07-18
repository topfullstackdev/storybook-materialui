import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from '@mui/material';

export type DialogProps = MuiDialogProps;

export function Dialog({ children, ...props }: DialogProps) {
  return <MuiDialog {...props}>{children}</MuiDialog>;
}

export default Dialog;
