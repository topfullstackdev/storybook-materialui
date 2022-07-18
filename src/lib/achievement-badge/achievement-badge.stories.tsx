import { Meta, Story } from '@storybook/react';

import { AchievementBadge, AchievementBadgeProps } from './achievement-badge';
import exampleImage from './example-badge.png';

export default {
  component: AchievementBadge,
  title: 'AchievementBadge',
  decorators: [],
  args: {
    name: 'Example Badge',
    src: exampleImage,
  },
} as Meta;

const Template: Story<AchievementBadgeProps> = function Template(
  props: AchievementBadgeProps,
) {
  return <AchievementBadge {...props} />;
};

export const WithoutName = Template.bind({});
WithoutName.args = {
  showName: false,
};
export const WithName = Template.bind({});
WithName.args = {
  showName: true,
};
