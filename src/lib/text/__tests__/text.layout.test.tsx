import { render } from '@testing-library/react';
import { flatten } from 'lodash';

import { Text } from '../text';

describe('Text', () => {
  const variants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'body1',
    'body2',
    'subtitle1',
    'subtitle2',
    'overline',
    'caption',
    'button',
    'inherit',
  ] as const;
  const matrix: [typeof variants[number], boolean, boolean, boolean][] =
    flatten(
      variants.map((variant) => [
        [variant, true, true, true],
        [variant, false, false, false],
      ]),
    );
  it.each(matrix)(
    'Should render when variant=%s, italicized=%s, bold=%s, and underlined=%s',
    (variant, italicized, bold, underlined) => {
      const { container } = render(
        <Text
          variant={variant}
          italicized={italicized}
          bold={bold}
          underlined={underlined}
        >
          text
        </Text>,
      );

      expect(container).toMatchSnapshot();
    },
  );
});
