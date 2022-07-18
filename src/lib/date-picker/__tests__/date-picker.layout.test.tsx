import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { render } from '@testing-library/react';

import { DatePicker } from '../date-picker';

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

  it('should render successfully', () => {
    const { container } = render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker value={null} onChange={jest.fn()} />
      </LocalizationProvider>,
    );
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it('should render successfully with date', () => {
    const { container } = render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker value={new Date('01/01/2022')} onChange={jest.fn()} />
      </LocalizationProvider>,
    );
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });
});
