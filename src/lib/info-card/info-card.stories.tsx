import Box from '@mui/material/Box';
import { Meta, Story } from '@storybook/react';

import { Color, InfoCard, InfoCardProps } from './info-card';

export default {
  component: InfoCard,
  title: 'InfoCard',
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    color: {
      name: 'color',
      options: Color,
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<InfoCardProps> = function Template(args) {
  const { children, ...rest } = args;
  return (
    <InfoCard {...rest}>
      <Box component="span" sx={{ fontSize: 12 }}>
        Advanced Marketing
      </Box>
      <Box component="span" sx={{ fontSize: 12 }}>
        Advanced Sales
      </Box>
      <Box component="span" sx={{ fontSize: 12 }}>
        Appraisals
      </Box>
    </InfoCard>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  statLabel: 'Skills Developing',
  statNumber: 88,
};
