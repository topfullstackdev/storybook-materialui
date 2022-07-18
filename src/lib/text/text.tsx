import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

import type { TypographyProps } from '@mui/material';

export type TextProps<C extends React.ElementType> = TypographyProps<
  C,
  { component?: C }
> & {
  bold?: boolean;
  italicized?: boolean;
  underlined?: boolean;
  children?: React.ReactNode;
};

const TextComponent = styled(Typography, {
  shouldForwardProp: (prop: string) =>
    !['bold', 'italicized', 'underlined'].includes(prop),
})<TextProps<React.ElementType>>`
  font-weight: ${({ bold }) => (bold ? 600 : 'normal')};
  font-style: ${({ italicized }) => (italicized ? 'italic' : 'normal')};
  text-decoration: ${({ underlined }) => (underlined ? 'underline' : 'none')};
  font-family: ${({ variant }) =>
    variant?.startsWith('h') && variant !== 'h6'
      ? 'Rockwell,Verdana,Arial,san-serif'
      : 'Verdana,Arial,sans-serif'};
` as typeof Typography;

export function Text<C extends React.ElementType>({
  children,
  ...props
}: TextProps<C>) {
  return <TextComponent {...props}>{children}</TextComponent>;
}
