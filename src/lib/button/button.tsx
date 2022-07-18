import styled from '@emotion/styled';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

import { useTheme } from '@bai/utils/theme';

export enum ButtonVariant {
  ROUNDED = 'ROUNDED',
  SQUARE = 'SQUARE',
  SQUARE_INVERTED = 'SQUARE_INVERTED',
  SUBMIT = 'SUBMIT',
  TEXT = 'TEXT',
}

export interface ButtonProps
  extends Omit<MuiButtonProps, 'variant' | 'buttonVariant'> {
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  useBrandColor?: boolean;
}

interface StyledButtonProps {
  buttonVariant: ButtonVariant;
  theme: ReturnType<typeof useTheme>;
  mainColor: string;
  contrastTextColor: string;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop: string) =>
    !['buttonVariant', 'mainColor', 'contrastTextColor'].includes(prop),
})<StyledButtonProps>`
  padding: ${({ buttonVariant }) =>
    buttonVariant === ButtonVariant.TEXT ? '10px 15px' : '10px 50px'};
  min-width: fit-content;
  height: 4.2rem;
  text-transform: capitalize;
  text-decoration: ${({ buttonVariant }) =>
    buttonVariant === ButtonVariant.TEXT ? 'underline' : ''};
  font-family: ${({ buttonVariant }) => {
    if (buttonVariant === ButtonVariant.TEXT) {
      return 'Verdana,Arial,sans-serif';
    }
    return '';
  }};
  font-size: ${({ buttonVariant }) =>
    buttonVariant === ButtonVariant.TEXT ? '1.6rem' : ''};
  border: ${({ buttonVariant, mainColor, contrastTextColor }) => {
    if (buttonVariant === ButtonVariant.TEXT) {
      return '';
    }
    return buttonVariant === ButtonVariant.SQUARE_INVERTED
      ? `2px solid ${mainColor}`
      : `1px solid ${contrastTextColor}`;
  }};
  border: ${({ buttonVariant, theme }) => {
    if (buttonVariant === ButtonVariant.TEXT) {
      return '';
    }
    return buttonVariant === ButtonVariant.SUBMIT && theme.spacing(0);
  }};
  &:active:hover {
    color: #333;
    background-color: #d4d4d4;
  }
  &:active {
    box-shadow: inset 0 3px 5px rgb(0 0 0 / 13%);
  }
  &:hover {
    background-color: ${({ buttonVariant, mainColor, contrastTextColor }) => {
      if (buttonVariant === ButtonVariant.TEXT) {
        return 'transparent';
      }
      return buttonVariant === ButtonVariant.SQUARE_INVERTED
        ? contrastTextColor
        : mainColor;
    }};
    text-decoration: ${({ buttonVariant }) => {
      if (buttonVariant === ButtonVariant.TEXT) {
        return 'underline';
      }
      return '';
    }};
    color: ${({ buttonVariant, theme }) => {
      if (buttonVariant === ButtonVariant.TEXT) {
        return theme.palette.secondary.contrastText;
      }
      return '';
    }};
  }
  color: ${({ buttonVariant, mainColor, contrastTextColor }) => {
    if (buttonVariant === ButtonVariant.TEXT) {
      return '#000';
    }
    return buttonVariant === ButtonVariant.SQUARE_INVERTED
      ? mainColor
      : contrastTextColor;
  }};
  background-color: ${({ buttonVariant, mainColor, contrastTextColor }) => {
    if (buttonVariant === ButtonVariant.TEXT) {
      return 'transparent';
    }
    return buttonVariant === ButtonVariant.SQUARE_INVERTED
      ? contrastTextColor
      : mainColor;
  }};
  border-radius: ${({ buttonVariant, theme }) => {
    if (buttonVariant === ButtonVariant.TEXT) {
      return '';
    }
    return buttonVariant === ButtonVariant.ROUNDED
      ? theme.spacing(1)
      : theme.spacing(0);
  }};
`;

export function Button({
  variant = ButtonVariant.ROUNDED,
  onClick,
  children,
  useBrandColor = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const mainColor =
    (useBrandColor && theme?.branding?.primaryColor) ||
    theme.palette.primary.main;
  const contrastTextColor = theme.palette.primary.contrastText;

  return (
    <StyledButton
      disableRipple={variant === ButtonVariant.TEXT}
      mainColor={mainColor}
      contrastTextColor={contrastTextColor}
      variant={variant === ButtonVariant.TEXT ? 'text' : 'contained'}
      buttonVariant={variant}
      theme={theme}
      onClick={onClick}
      disableElevation
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
