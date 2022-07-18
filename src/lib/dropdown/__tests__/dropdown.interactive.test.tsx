import { SelectChangeEvent } from '@mui/material/Select';
import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';

import { Dropdown } from '../dropdown';

import { User, users } from './TestDropdownData';

describe('Dropdown', () => {
  it('value should be updated on change', () => {
    function DropdownWrapper() {
      const [selectedUser, setSelectedUser] = useState(users[0]);
      const onSelectedUser = (event: SelectChangeEvent, u: User) => {
        setSelectedUser(u);
      };

      return (
        <Dropdown
          value={selectedUser}
          onChange={onSelectedUser}
          label="User Selection"
          options={users}
          extractLabel={(u: User) => u.name}
          extractKey={(u: User) => u.id}
        />
      );
    }
    const { getByRole } = render(<DropdownWrapper />);
    const element = getByRole('option', { name: 'person 1' });
    fireEvent.change(element, { target: { value: '2' } });
    expect(element.getAttribute('value')).toBe('2');
  });
});
