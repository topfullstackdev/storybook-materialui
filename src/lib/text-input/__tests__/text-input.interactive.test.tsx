import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { TextInput } from '../text-input';

const dummyLabelText = 'Address (Line 1)';
const dummySecondaryLabel = 'Status: Not Provisioned';

describe('TextInput', () => {
  it('value should be updated on change', async () => {
    const user = userEvent.setup();
    function TextInputWrapper() {
      const [value, setValue] = useState('');

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value);
      return (
        <TextInput
          value={value}
          label={dummyLabelText}
          secondaryLabel={dummySecondaryLabel}
          onChange={handleChange}
        />
      );
    }

    const { getByRole } = render(<TextInputWrapper />);

    const element = getByRole('textbox');
    expect(element).toHaveValue('');
    await user.type(element, 'some address is here');
    expect(element).toHaveValue('some address is here');
  });
});
