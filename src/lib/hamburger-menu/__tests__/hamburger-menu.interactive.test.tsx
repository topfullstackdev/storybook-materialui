import { fireEvent, render } from '@testing-library/react';

import { HamburgerMenu } from '../hamburger-menu';

describe('HamburgerMenu', () => {
  it('should be opened the menu when the hamburger clicks', () => {
    function HamburgerMenuWrapper() {
      return (
        <HamburgerMenu
          items={[
            {
              label: 'My Dashboard',
              onClick: () => 'My Dashboard',
            },
            {
              label: 'Profile',
              onClick: () => 'Profile',
            },
          ]}
        />
      );
    }

    const { getByRole, getByText } = render(<HamburgerMenuWrapper />);

    const btn = getByRole('button');
    fireEvent.click(btn);
    expect(getByText('My Dashboard')).toBeInTheDocument();
  });
});
