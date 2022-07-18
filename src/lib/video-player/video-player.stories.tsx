import { Meta, Story } from '@storybook/react';

import { VideoPlayer } from './video-player';

export default {
  component: VideoPlayer,
  title: 'VideoPlayer',
  args: {}, // Common args
} as Meta<React.VideoHTMLAttributes<HTMLVideoElement>>;

function Template(props: React.VideoHTMLAttributes<HTMLVideoElement>) {
  return <VideoPlayer {...props} />;
}

export const Primary: Story<React.VideoHTMLAttributes<HTMLVideoElement>> =
  Template.bind({});
Primary.args = {
  src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  autoPlay: true,
  controls: true,
};
