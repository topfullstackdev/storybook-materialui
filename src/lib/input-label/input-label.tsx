import {
  InputLabel as MUIInputLabel,
  InputLabelProps as MUIInputLabelProps,
  css,
} from '@mui/material';

export interface InputLabelProps extends MUIInputLabelProps {
  fontColor?: string;
}

export function InputLabel({ children, fontColor, ...props }: InputLabelProps) {
  return (
    <MUIInputLabel
      css={css`
        font-size: 1.2rem;
        color: ${fontColor || 'black'};
        z-index: 1;
        width: auto;
        margin-bottom: 5px;
        font-family: Verdana, Arial, sans-serif;
      `}
      {...props}
    >
      {children}
    </MUIInputLabel>
  );
}

export default InputLabel;
