import styled from '@emotion/styled';
import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

export interface CheckboxProps extends MuiCheckboxProps {
  label: React.ReactElement | string | number;
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

export function Checkbox(props: CheckboxProps) {
  const { label, ...rest } = props;
  return (
    <StyledFormControlLabel
      control={<StyledCheckbox {...rest} />}
      label={label}
    />
  );
}
