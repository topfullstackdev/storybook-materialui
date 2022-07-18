import { render } from '@testing-library/react';

import { InputLabel } from '../input-label';

describe('InputLabel', () => {
  it('should render successfully', () => {
    const { container } = render(<InputLabel>Label Text</InputLabel>);
    expect(container).toMatchSnapshot();
  });
});
