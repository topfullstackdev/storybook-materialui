// Uses snapshot to test layout rendering
import { render } from '@testing-library/react';

import { VideoPlayer } from '../video-player';

describe('VideoPlayer', () => {
  it('should render successfully', () => {
    const { container } = render(<VideoPlayer />);
    expect(container).toMatchSnapshot();
  });
});
