import styled from '@emotion/styled';
import { Badge, css } from '@mui/material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Collapse } from 'react-collapse';

import { useBrandColor } from '@bai/utils/theme';

import { Text } from '../text/text';

type StyledBoxIconProps = {
  isOpen: boolean;
  mainColor?: string;
};

const StyledBoxIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'mainColor',
})<StyledBoxIconProps>`
  background: 0 0;
  display: block;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 34px;
  height: 27px;
  font-size: 0;
  text-indent: -9999px;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  outline: none;
  span {
    display: block;
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: ${({ isOpen, mainColor }) =>
      isOpen ? '#fff' : mainColor};
    border-radius: 3px;
    &::after {
      content: '';
      position: absolute;
      display: block;
      left: ${({ isOpen }) => (isOpen ? '-3px' : '0')};
      width: 100%;
      height: ${({ isOpen }) => (isOpen ? '3px' : '4px')};
      background-color: ${({ mainColor }) => mainColor};
      border-radius: 3px;
      transform-origin: bottom right;
      bottom: ${({ isOpen }) => (isOpen ? '11px' : '-10px')};
      ${({ isOpen }) => isOpen && 'transform: rotate(-45deg);'};
    }
    &::before {
      content: '';
      position: absolute;
      display: block;
      left: ${({ isOpen }) => (isOpen ? '-3px' : '0')};
      width: 100%;
      height: ${({ isOpen }) => (isOpen ? '3px' : '4px')};
      background-color: ${({ mainColor }) => mainColor};
      border-radius: 3px;
      transform-origin: top right;
      top: ${({ isOpen }) => (isOpen ? '15px' : '-10px')};
      ${({ isOpen }) => isOpen && 'transform: rotate(45deg);'};
    }
  }
`;

const StyledBox = styled(Box)`
  display: block;
  position: relative;
  .ReactCollapse--collapse {
    transition: height 400ms;
    position: absolute;
    top: 40px;
    left: 2px;
    z-index: 99;
    width: 216px;
    padding-left: 1px;
  }
`;

const StyledMenuBox = styled.nav`
  width: 215px;
  box-shadow: 0 2px 0.5px 0.7px rgb(51 51 51 / 35%);
  background-color: white;
  z-index: 99;
`;

export interface HamburgerMenuProps {
  items: {
    label: string;
    hidden?: boolean;
    badge?: string;
    onClick: () => void;
  }[];
}

export function HamburgerMenu({ items }: HamburgerMenuProps) {
  const [navOpen, setNavOpen] = useState(false);
  const brandColor = useBrandColor();

  return (
    <StyledBox>
      <StyledBoxIcon
        data-cy="Hamburger"
        mainColor={brandColor}
        component="button"
        onClick={() => setNavOpen(!navOpen)}
        isOpen={navOpen}
        aria-label="Open Navigation"
      >
        <Box component="span" />
      </StyledBoxIcon>

      <Collapse isOpened={navOpen}>
        <StyledMenuBox>
          {items &&
            items.map(
              ({ label, hidden, badge, onClick }, i) =>
                !hidden && (
                  <MenuItem
                    key={label}
                    data-cy={`hamburger-menu-item:${label}`}
                    onClick={() => {
                      onClick();
                      setNavOpen(false);
                    }}
                    sx={{
                      paddingTop: '15px',
                      paddingBottom: '15px',
                      borderBottom: items[i + 1] ? '1px solid #313131' : 'none',
                      fontSize: '14px',
                      color: '#333',
                    }}
                  >
                    {badge != null ? (
                      <Badge
                        badgeContent={badge}
                        color="primary"
                        css={css`
                          & .MuiBadge-badge {
                            right: -17px;
                            top: 11px;
                            font-weight: bold;
                            background-color: ${brandColor};
                          }
                        `}
                      >
                        <Text variant="body2">{label}</Text>
                      </Badge>
                    ) : (
                      <Text variant="body2">{label}</Text>
                    )}
                  </MenuItem>
                ),
            )}
        </StyledMenuBox>
      </Collapse>
    </StyledBox>
  );
}

export default HamburgerMenu;
