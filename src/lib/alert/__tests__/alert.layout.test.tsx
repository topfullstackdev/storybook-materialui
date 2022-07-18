// Uses snapshot to test layout rendering
import { render } from '@testing-library/react';

import { Alert } from '../alert';

describe('Alert', () => {
  (['error', 'info', 'success', 'warning'] as const).forEach((severity) => {
    it(`should render ${severity} successfully`, () => {
      const { container } = render(
        <Alert severity={severity}>Alert of type: {severity}</Alert>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
