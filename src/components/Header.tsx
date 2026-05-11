'use client';

import Image from 'next/image';

interface HeaderProps {
  showBack?: boolean;
  showMenu?: boolean;
  quizCounter?: string;
  onBack?: () => void;
}

export default function Header({ showBack, showMenu = false, quizCounter, onBack }: HeaderProps) {
  return (
    <div style={{ borderBottom: '1px solid #ECECEC', background: '#fff' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        maxWidth: 480,
        margin: '0 auto',
      }}>
        {/* Left side */}
        <div style={{ width: 40, display: 'flex', alignItems: 'center' }}>
          {showBack && (
            <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#100018" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Logo */}
        <Image src="/images/logo.svg" alt="ainexo" width={140} height={42} priority />

        {/* Right side */}
        <div style={{ width: 40, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {showMenu && (
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6H21M3 12H21M3 18H21" stroke="#100018" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
          {quizCounter && (
            <span style={{ fontSize: 13, color: '#565B66', fontWeight: 500 }}>{quizCounter}</span>
          )}
        </div>
      </div>
    </div>
  );
}
