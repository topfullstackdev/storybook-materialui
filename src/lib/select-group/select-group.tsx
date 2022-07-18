import styled from '@emotion/styled';
import {
  FormControlLabel,
  FormGroup,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

export interface SelectGroupProps<T> {
  name: string;
  label: string;
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  extractLabel: (value: T) => string;
  extractName: (value: T) => string;
  options: Readonly<T[]>;
}

const StyledFormControlLabel = styled(FormControlLabel)`
  display: flex;
  align-items: baseline;
  .MuiFormControlLabel-label {
    font-size: 14px;
    margin-left: 4px;
  }
`;

const StyledCheckbox = styled(MuiCheckbox)<MuiCheckboxProps>`
  border-radius: 0px;
  padding: 0px;
  vertical-align: baseline;
  & > svg {
    display: none;
  }
  & > input {
    opacity: 1;
    width: auto;
    height: auto;
    position: static;
    margin: 4px 0 0;
  }
`;

export function SelectGroup<T>(props: SelectGroupProps<T>) {
  const { extractLabel, extractName, options, register, name } = props;
  return (
    <FormGroup>
      {options &&
        options.map((option) => (
          <StyledFormControlLabel
            control={<StyledCheckbox {...(register && register(name))} />}
            key={extractName(option)}
            value={extractName(option)}
            label={extractLabel(option)}
          />
        ))}
    </FormGroup>
  );
}
