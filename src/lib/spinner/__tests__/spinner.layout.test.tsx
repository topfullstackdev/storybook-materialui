// Uses snapshot to test layout rendering
import { ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';

import { createTheme } from '@bai/utils/theme';

import { SpinnerProps, Spinner as SpinnerRaw } from '../spinner';

const theme = createTheme({
  branding: {
    primaryColor: '#B22028',
  },
});

describe('Spinner', () => {
  function Spinner(props: SpinnerProps) {
    return (
      <ThemeProvider theme={theme}>
        <SpinnerRaw {...props} />
      </ThemeProvider>
    );
  }

  // The only prop affects CSS, which doesn't render in the snapshot
  it('should render successfully', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
