import { render } from '@testing-library/react';

import { PageLayout } from '../page-layout';

describe('PageLayout', () => {
  it('should render successfully', () => {
    const { container } = render(<PageLayout>content</PageLayout>);
    expect(container).toMatchSnapshot();
  });
});
