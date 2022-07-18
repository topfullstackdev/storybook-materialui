import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { render } from '@testing-library/react';
import { useState } from 'react';

import { DatePicker } from '../date-picker';

const dummyLabelText = 'Date of Birth';
const defaultDate = '01/01/2000';
const newDate = '01/27/2000';

describe('DatePicker', () => {
  beforeAll(() => {
    // Mobile mode is rendered unless this is changed
    window.matchMedia = (query: string): MediaQueryList => ({
      media: query,
      // this is the media query that @material-ui/pickers uses to determine if a device is a desktop device
      matches: query === '(pointer: fine)',
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    });
  });

  it('value should be updated on change', () => {
    function DatePickerWrapper() {
      const [value, setValue] = useState<null | Date>(new Date(defaultDate));

      const handleChange = (date: Date | null) => setValue(date);
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            label={dummyLabelText}
            onChange={handleChange}
          />
        </LocalizationProvider>
      );
    }

    const { getByDisplayValue, getByRole, getByText } = render(
      <DatePickerWrapper />,
    );

    const button = getByRole('button');
    button.click();

    const newDateButton = getByText('27');
    newDateButton.click();

    const input = getByDisplayValue(newDate);
    expect(input).toBeTruthy();
  });
});
