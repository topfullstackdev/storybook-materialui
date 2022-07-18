import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export enum Color {
  PURPLE = 'rgb(128, 55, 155)',
  ORANGE = 'rgb(232, 119, 34)',
  TEAL = 'rgb(0, 165, 153)',
  BLUE = 'rgb(0, 161, 222)',
}

export interface InfoCardProps {
  color: Color;
  statNumber: number;
  statLabel: string;
  children?: React.ReactNode;
}

type StyledBoxProps = {
  color: Color;
};

const StyledBox = styled(Box)<StyledBoxProps>`
  border: 1px solid ${({ color }) => color};
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: ${({ color }) => color};
`;

export function InfoCard({
  color,
  statNumber,
  statLabel,
  children,
}: InfoCardProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <StyledBox color={color}>
        <Box
          data-cy={`Count:${statNumber}`}
          component="span"
          sx={{ fontWeight: 700, fontSize: 32, textAlign: 'center' }}
        >
          {statNumber}
        </Box>
        <Box
          data-cy={`Label:${statLabel}`}
          component="span"
          sx={{ fontSize: 14, textAlign: 'center' }}
        >
          {statLabel}
        </Box>
      </StyledBox>
      {children && <StyledBox color={color}>{children}</StyledBox>}
    </Box>
  );
}
