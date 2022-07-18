import Box from '@mui/material/Box';
import { render } from '@testing-library/react';

import { Color, InfoCard } from '../info-card';

describe('Text', () => {
  it('should render successfully', () => {
    const { container } = render(
      <InfoCard
        color={Color.BLUE}
        statNumber={31}
        statLabel="Skills Developing"
      >
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Marketing
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Sales
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Appraisals
        </Box>
      </InfoCard>,
    );
    expect(container).toMatchSnapshot();
  });

  it('statNumber should be in the component, fontsize should be 32px', () => {
    const { getByText, container } = render(
      <InfoCard
        color={Color.BLUE}
        statNumber={31}
        statLabel="Skills Developing"
      >
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Marketing
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Sales
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Appraisals
        </Box>
      </InfoCard>,
    );
    const statNumber = getByText('31');
    const style = window.getComputedStyle(statNumber);
    expect(container).toMatchSnapshot();
    expect(style.fontSize).toEqual('32px');
  });

  it('statLabel should be in the component, fontsize should be 14px', () => {
    const { getByText, container } = render(
      <InfoCard
        color={Color.BLUE}
        statNumber={31}
        statLabel="Skills Developing"
      >
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Marketing
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Sales
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Appraisals
        </Box>
      </InfoCard>,
    );
    const statLabel = getByText('Skills Developing');
    const style = window.getComputedStyle(statLabel);
    expect(container).toMatchSnapshot();
    expect(style.fontSize).toEqual('14px');
  });

  it('children should be display in the component when children is existing', () => {
    const { container } = render(
      <InfoCard
        color={Color.BLUE}
        statNumber={31}
        statLabel="Skills Developing"
      >
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Marketing
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Sales
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Appraisals
        </Box>
      </InfoCard>,
    );
    expect(container).toMatchSnapshot();
  });

  it('border color should be BLUE  when color is Color.BLUE', () => {
    const { getByText, container } = render(
      <InfoCard
        color={Color.BLUE}
        statNumber={31}
        statLabel="Skills Developing"
      >
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Marketing
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Advanced Sales
        </Box>
        <Box component="span" sx={{ fontSize: 12 }}>
          Appraisals
        </Box>
      </InfoCard>,
    );
    expect(container).toMatchSnapshot();
    const element = getByText('Skills Developing').closest('div');
    const style = element && window.getComputedStyle(element);
    expect(style?.borderColor).toEqual(Color.BLUE);
  });
});
