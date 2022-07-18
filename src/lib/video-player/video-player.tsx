import React from 'react';

export function VideoPlayer({
  children,
  ...props
}: React.VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <video {...props}>
      <track default kind="captions" />
      {children}
    </video>
  );
}

export default VideoPlayer;
