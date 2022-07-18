import { Meta } from '@storybook/react';
import { useState } from 'react';

import { DatePicker, DatePickerProps } from './date-picker';

function PrimaryDatePicker({ label }: DatePickerProps) {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePicker
      value={value}
      label={label}
      onChange={(newValue: Date | null) => {
        setValue(newValue);
      }}
    />
  );
}

export default {
  component: PrimaryDatePicker,
  title: 'DatePicker',
  args: {
    label: 'Choose Date',
  }, // Common args
} as Meta<DatePickerProps>;

export const Primary: Partial<DatePickerProps> = {
  // Override args here
};
