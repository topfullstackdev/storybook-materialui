import styled from '@emotion/styled';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink } from 'react-router-dom';

import { BrandColorNames, useBrandColor } from '@bai/utils/theme';

import { Text } from '../text/text';

export type BreadcrumbItem = {
  text: string;
  href?: string;
};

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const StyledBreadcrumbs = styled(Breadcrumbs)`
  font-size: 12px;
  & a {
    text-decoration-color: #1eabe3 !important;
  }
`;

/**
 * This component should generally not be used directly.
 * Instead, use @bai/features/use-breadcrumb's exports useBreadcrumb and ContextBreadcrumb.
 * This allows the breadcrumb to be rendered anywhere in the component tree,
 * while the props from the breadcrumb can also be provided from anywhere
 * in the component tree.
 */
export function Breadcrumb(props: BreadcrumbProps) {
  const { items } = props;
  const linkColor = useBrandColor(
    BrandColorNames.SECONDARY,
    (theme) => theme.palette.primary.main,
  );
  return (
    <StyledBreadcrumbs>
      {items.map((item) => {
        const { text, href } = item;
        const key = text + (href || '');
        if (href) {
          return (
            <NavLink data-cy={`breadcrumb-item:${text}`} to={href} key={key}>
              <Text
                underlined
                color={linkColor}
                variant="caption"
                component="span"
              >
                {text}
              </Text>
            </NavLink>
          );
        }
        return (
          <Text
            data-cy={`Current Page Breadcrumb:${text}`}
            color="text.primary"
            variant="caption"
            component="span"
            key={key}
          >
            {text}
          </Text>
        );
      })}
    </StyledBreadcrumbs>
  );
}

export default Breadcrumb;
