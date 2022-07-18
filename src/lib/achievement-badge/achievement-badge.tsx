import styled from '@emotion/styled';

import { Text } from '../text/text';

export interface AchievementBadgeProps {
  src: string;
  name: string;
  showName?: boolean;
}

const SmallContainer = styled.div`
  text-align: left;
`;
const SmallImage = styled.img`
  height: 48px;
  vertical-align: middle;
`;

const LargeContainer = styled.div`
  text-align: center;
`;
const LargeImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
`;
const Name = styled.div`
  width: 100%;
`;

export function AchievementBadge({
  name,
  showName,
  src,
}: AchievementBadgeProps) {
  const imgProps = { src, alt: name };
  return showName ? (
    <LargeContainer>
      <LargeImage {...imgProps} data-cy={`CP Badge Image:${name}`} />
      <Name data-cy={`CP Name:${name}`}>
        <Text variant="caption">{name} </Text>
      </Name>
    </LargeContainer>
  ) : (
    <SmallContainer>
      <SmallImage {...imgProps} />
    </SmallContainer>
  );
}

export default AchievementBadge;
