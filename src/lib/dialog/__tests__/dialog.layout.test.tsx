// Uses snapshot to test layout rendering
import { render } from '@testing-library/react';

import { Dialog } from '../dialog';

describe('Dialog', () => {
  it('should render as closed', () => {
    const { baseElement } = render(<Dialog open={false}>Contents</Dialog>);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render as open', () => {
    const { baseElement } = render(<Dialog open>Contents</Dialog>);
    expect(baseElement).toMatchSnapshot();
  });
});
