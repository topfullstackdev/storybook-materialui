import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Button } from '../button/button';

import { Dialog, DialogProps } from './dialog';

function DialogDemo({ open: controlledOpen, ...props }: DialogProps) {
  const [open, setOpen] = useState(controlledOpen);
  useEffect(() => {
    setOpen(controlledOpen);
  }, [controlledOpen]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog {...props} open={open}>
        <h1>Dialog</h1>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Dialog>
    </>
  );
}

export default {
  component: DialogDemo,
  title: 'Dialog',
  args: { open: true }, // Common args
} as Meta<DialogProps>;

export const Variant: Partial<DialogProps> = {
  // Override args here
};
