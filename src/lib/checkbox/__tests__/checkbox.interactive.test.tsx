import { fireEvent, render } from '@testing-library/react';

import { Checkbox } from '../checkbox';

describe('Checkbox', () => {
  it('should call onChange when clicked', () => {
    const hanleOnChange = jest.fn();

    const { getByRole } = render(
      <Checkbox
        id="checkbox"
        checked={false}
        onChange={hanleOnChange}
        label="Remember me"
      />,
    );

    expect(hanleOnChange).not.toHaveBeenCalled();
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(hanleOnChange).toHaveBeenCalledTimes(1);
    expect(hanleOnChange).toBeCalledWith(expect.anything(), true);
  });
});
