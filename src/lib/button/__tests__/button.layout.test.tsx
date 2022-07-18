import { render } from '@testing-library/react';
import { flatten } from 'lodash';

import { Button as ButtonRaw, ButtonVariant } from '../button';

describe('Button map', () => {
  const matrix: [ButtonVariant, boolean][] = flatten(
    Object.values(ButtonVariant).map((variant) => [
      [variant, true],
      [variant, false],
    ]),
  );

  it.each(matrix)(
    'Should render when variant=%s, useBrandColor=%s',
    (variant: ButtonVariant, useBrandColor: boolean) => {
      const { container } = render(
        <ButtonRaw variant={variant} useBrandColor={useBrandColor}>
          Button
        </ButtonRaw>,
      );

      expect(container).toMatchSnapshot();
    },
  );
});
