import { fireEvent, render } from '@testing-library/react';

import { Button, ButtonVariant } from '../button';

describe('Button', () => {
  it('should be clicked the button', () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <Button variant={ButtonVariant.ROUNDED} onClick={mockOnClick}>
        Button
      </Button>,
    );
    const btn = getByRole('button', { name: 'Button' });
    fireEvent.click(btn);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
