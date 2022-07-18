import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Breadcrumb } from '../breadcrumb';

const items = [
  { text: 'HOME', href: '/' },
  { text: 'SUB-LINK', href: '/sub-link' },
  { text: 'CURRENT-PAGE' },
];

describe('Breadcrumb', () => {
  it('should render successfully', () => {
    const { container } = render(
      <BrowserRouter>
        <Breadcrumb items={items} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should be added the link', () => {
    const { container, getByText } = render(
      <BrowserRouter>
        <Breadcrumb items={items} />
      </BrowserRouter>,
    );
    expect(getByText('SUB-LINK').closest('a')).toHaveAttribute(
      'href',
      '/sub-link',
    );
    expect(container).toMatchSnapshot();
  });
});
