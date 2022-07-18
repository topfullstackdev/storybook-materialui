import { render } from '@testing-library/react';

import { HamburgerMenu } from '../hamburger-menu';

describe('HamburgerMenu', () => {
  it('should render successfully', () => {
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

    const { container } = render(<HamburgerMenuWrapper />);
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });

  it('should be in hamburger icon', () => {
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

    const { container, getByRole } = render(<HamburgerMenuWrapper />);
    const icon = getByRole('button');
    expect(container).toMatchSnapshot();
    expect(icon).toBeTruthy();
  });

  it('should be in menu', () => {
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

    const { container, getByText } = render(<HamburgerMenuWrapper />);
    const element = getByText('My Dashboard');
    expect(container).toMatchSnapshot();
    expect(element).toBeInTheDocument();
  });
});
