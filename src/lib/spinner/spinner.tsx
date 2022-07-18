import { css, keyframes } from '@emotion/react';
import { useMemo } from 'react';

import { useTheme } from '@bai/utils/theme';

const margins = {
  all: '100px auto',
  right: '0px 75px 0px 0px',
  none: '15px auto',
};

export type Margin = keyof typeof margins;

export interface SpinnerProps {
  margin?: Margin;
}

const stretchDelay = keyframes`
  from, 0%, 40%, 100%, to {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
  }
`;

export function Spinner({ margin = 'all' }: SpinnerProps) {
  const theme = useTheme();
  /* eslint-disable react/no-array-index-key */
  const bars = useMemo(
    () =>
      new Array(5).fill(0).map((el, i) => (
        <div
          key={i}
          css={css`
            background-color: ${theme?.branding?.primaryColor};
            height: 100%;
            width: 6px;
            margin: 0 2px;
            display: inline-block;
            animation: ${stretchDelay} 1.2s infinite ease-in-out;
            animation-delay: ${-1.2 + i / 10}s;
          `}
        />
      )),
    [theme?.branding?.primaryColor],
  );
  /* eslint-enable react/no-array-index-key */
  return (
    <div
      css={css`
        margin: ${margins[margin]};
        width: 50px;
        height: 40px;
        text-align: center;
        font-size: 10px;
        z-index: 20;
      `}
    >
      {bars}
    </div>
  );
}

export default Spinner;
