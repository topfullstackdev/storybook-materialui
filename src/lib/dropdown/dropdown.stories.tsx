import { SelectChangeEvent } from '@mui/material/Select';
import { Meta } from '@storybook/react';
import { useState } from 'react';

import { User, users } from './__tests__/TestDropdownData';
import { Dropdown } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;

export function Primary() {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const extractLabel = (u: User) => u.name;
  const extractKey = (u: User) => u.id;
  const onSelectedUser = (event: SelectChangeEvent, u: User) => {
    setSelectedUser(u);
  };

  return (
    <Dropdown
      value={selectedUser}
      onChange={onSelectedUser}
      label="User Selection"
      options={users}
      extractLabel={extractLabel}
      extractKey={extractKey}
    />
  );
}
