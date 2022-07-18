import { ReactNode } from 'react';

export interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div
      css={{
        maxWidth: '1400px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {children}
    </div>
  );
}

export default PageLayout;
