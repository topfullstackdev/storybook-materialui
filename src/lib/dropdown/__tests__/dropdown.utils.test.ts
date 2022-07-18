import { SelectChangeEvent } from '@mui/material/Select';

import { onSelectChange } from '../dropdown.utils';

import { User, users } from './TestDropdownData';

describe('Dropdown Utils', () => {
  it('onSelectChange', () => {
    const mockEvent = {
      target: {
        value: users[2].id,
      },
    } as unknown as SelectChangeEvent;
    const extractKey = (u: User) => u.id;
    const onChange = jest.fn();

    onSelectChange(mockEvent, users, extractKey, onChange);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(mockEvent, users[2]);
  });
});
