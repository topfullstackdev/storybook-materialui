import { render } from '@testing-library/react';

import { Checkbox } from '../checkbox';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Checkbox checked={false} label="Remember me" />,
    );
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it('should render as checked when true is passed into checked prop', () => {
    const { container } = render(<Checkbox checked label="Remember me" />);
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });
});
