'use client';

import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export default function PageWrapper({ children, className = '', noPadding }: PageWrapperProps) {
  return (
    <div className={`page-fade-in ${className}`} style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fff',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        ...(noPadding ? {} : { padding: '0 16px' }),
      }}>
        {children}
      </div>
    </div>
  );
}
