import styled from '@emotion/styled';
import { Box, TextField, TextFieldProps } from '@mui/material';

import { InputLabel } from '../input-label/input-label';

export type TextInputProps = TextFieldProps & {
  secondaryLabel?: string | React.ReactNode;
  helpText?: string;
};

const StyledTextInput = styled(TextField)`
  display: flex;
  margin-top: 10px;
  legend {
    display: none;
  }
  input {
    z-index: 1;
    margin: 3px;
    padding: 5.5px 11px;
    font-size: 1.4rem;
    font-family: Verdana, Arial, sans-serif;
  }
  .MuiInputBase-root {
    background: #fff;
    fieldset {
      border-radius: 4px;
    }
  }
  .Mui-disabled {
    & input::placeholder {
      opacity: 1;
    }
    background: #eee;
    fieldset {
      background: #eee;
    }
  }
  .Mui-error {
    font-family: Verdana, Arial, sans-serif;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function TextInput({
  secondaryLabel,
  variant = 'outlined',
  size = 'small',
  label = '',
  helpText,
  ...props
}: TextInputProps) {
  return (
    <>
      <LabelContainer>
        <InputLabel htmlFor={props.name}>{label}</InputLabel>
        {secondaryLabel && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {secondaryLabel}
          </Box>
        )}
      </LabelContainer>
      <StyledTextInput
        id={props.name}
        variant={variant}
        size={size}
        {...props}
      />
    </>
  );
}
