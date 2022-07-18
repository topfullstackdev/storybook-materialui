import { css } from '@emotion/react';
import styled from '@emotion/styled';
import InputBase from '@mui/material/InputBase';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';

import { useTheme } from '@bai/utils/theme';

import { ReactComponent as DropdownArrow } from '../../../assets/icons/dropdown-arrow.svg';
import { InputLabel } from '../input-label/input-label';

import { onSelectChange } from './dropdown.utils';

export interface DropdownProps<T> extends Omit<SelectProps, 'onChange'> {
  extractLabel: (value: T) => string;
  extractKey: (value: T) => string;
  onChange?: (event: SelectChangeEvent<string>, value: T) => void;
  options: Readonly<T[]>;
  defaultValue?: T;
  value?: T;
  label?: string;
}

const StyledDropdownArrow = function StyledDropdownArrow() {
  return <DropdownArrow height="42px" width="42px" />;
};

export function Dropdown<T>(props: DropdownProps<T>) {
  const {
    options,
    value,
    label,
    onChange,
    extractLabel,
    extractKey,
    defaultValue,
  } = props;

  const theme = useTheme();

  const BootstrapInput = styled(InputBase)(() => ({
    width: '100%',
    'label + &': {
      marginTop: 0,
    },
    '& .MuiInputBase-input': {
      backgroundColor: 'white',
      height: 28,
      width: '100%',
      borderRadius: 0,
      position: 'relative',
      border: `1px solid ${theme.palette.secondary.light}`,
      fontSize: 14,
      fontFamily: 'Verdana, Arial, sans-serif',
      padding: '9px 12px 3px 12px',
      transition:
        'border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, -webkit-box-shadow 0.15s ease-in-out 0s',

      '&:focus': {
        borderRadius: 0,
        borderColor: `${theme.palette.primary.main}`,
        boxShadow:
          'rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgba(102, 175, 233, 0.6) 0px 0px 8px',
      },
    },
    '& .MuiSelect-nativeInput': {
      background: 'red',
    },
  }));

  return (
    <>
      {label && (
        <InputLabel
          css={css`
            margin-bottom: 10px;
          `}
        >
          {label}
        </InputLabel>
      )}
      <Select
        native
        label={label}
        aria-label={label}
        value={(value && extractKey(value)) ?? ''}
        defaultValue={defaultValue && extractKey(defaultValue)}
        onChange={(e) =>
          onChange && onSelectChange(e, options, extractKey, onChange)
        }
        IconComponent={StyledDropdownArrow}
        input={<BootstrapInput role="listbox" aria-label={label} />}
      >
        {options &&
          options.map((option) => (
            <option key={extractKey(option)} value={extractKey(option)}>
              {extractLabel(option)}
            </option>
          ))}
      </Select>
    </>
  );
}

Dropdown.defaultProps = {
  label: null,
};

export default Dropdown;
