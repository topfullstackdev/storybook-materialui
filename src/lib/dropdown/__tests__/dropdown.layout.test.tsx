import { SelectChangeEvent } from '@mui/material/Select';
import { render } from '@testing-library/react';
import { useState } from 'react';

import { Dropdown } from '../dropdown';

import { User, users } from './TestDropdownData';

describe('Dropdown', () => {
  it('should render successfully', () => {
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
    const { container } = render(<DropdownWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('label should not be rendered', () => {
    function DropdownWrapper() {
      const [selectedUser, setSelectedUser] = useState(users[0]);
      const onSelectedUser = (event: SelectChangeEvent, u: User) => {
        setSelectedUser(u);
      };

      return (
        <Dropdown
          value={selectedUser}
          onChange={onSelectedUser}
          options={users}
          extractLabel={(u: User) => u.name}
          extractKey={(u: User) => u.id}
        />
      );
    }
    const { container } = render(<DropdownWrapper />);
    expect(container).toMatchSnapshot();
  });
});
