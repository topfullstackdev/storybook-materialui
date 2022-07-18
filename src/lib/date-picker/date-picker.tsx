import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@mui/lab';

import { TextInput } from '../text-input/text-input';

export type DatePickerProps = Omit<MuiDatePickerProps<Date>, 'renderInput'> & {
  renderInput?: MuiDatePickerProps<Date>['renderInput'];
};

export function DatePicker({
  renderInput = TextInput,
  ...props
}: DatePickerProps) {
  return <MuiDatePicker renderInput={renderInput} {...props} />;
}

export default DatePicker;
