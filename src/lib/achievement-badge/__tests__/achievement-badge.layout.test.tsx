import { render } from '@testing-library/react';

import { AchievementBadge } from '../achievement-badge';
import exampleImage from '../example-badge.png';

describe('AchievementBadge', () => {
  it('should render successfully', () => {
    const { container } = render(
      <AchievementBadge name="Example" src={exampleImage} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with name', () => {
    const { container } = render(
      <AchievementBadge name="Example" src={exampleImage} showName />,
    );
    expect(container).toMatchSnapshot();
  });
});
