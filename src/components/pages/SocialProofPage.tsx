'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';
import MenuOverlay from '@/components/MenuOverlay';

export default function SocialProofPage() {
  const { nextPage } = useFunnel();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-fade-in flex flex-col bg-white" style={{ maxWidth: 390, margin: '0 auto', minHeight: '100vh' }}>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* Header */}
      <header
        className="relative flex items-center justify-center px-5"
        style={{ height: 48, borderBottom: '1px solid #ECECEC' }}
      >
        <Image src="/images/logo.svg" alt="ainexo" width={140} height={42} priority />
        <button className="absolute right-5 p-1" aria-label="Menu" onClick={() => setMenuOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#100018" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      {/* Purple progress line */}
      <div className="w-full" style={{ height: 3, background: '#ECECEC' }}>
        <div className="h-full" style={{ width: '33%', background: '#5653FE' }} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center" style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 24 }}>
        {/* Text */}
        <p className="font-extrabold text-center" style={{ fontSize: 36, color: '#5653FE', lineHeight: 1.15, fontStyle: 'italic' }}>
          &ldquo;Več kot<br />100.000&rdquo;
        </p>
        <p className="font-semibold text-center" style={{ fontSize: 20, color: '#100018', lineHeight: 1.3, marginTop: 8 }}>
          ljudi se je pridružilo ainexo<br />za obvladovanje AI
        </p>

        {/* Hero image */}
        <div className="relative" style={{
          width: '75%',
          maxWidth: 300,
          aspectRatio: '4/5',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(86,83,254,0.12)',
          marginTop: 20,
        }}>
          <Image
            src="/images/founder.jpg"
            alt="Ustanovitelj ainexo"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Sticky NADALJUJ button */}
      <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)', paddingTop: 24, paddingBottom: 24, paddingLeft: 20, paddingRight: 20 }}>
        <button
          onClick={() => nextPage()}
          className="w-full font-bold uppercase"
          style={{
            background: '#5653FE',
            color: 'white',
            height: 60,
            borderRadius: 16,
            fontSize: 18,
          }}
        >
          NADALJUJ
        </button>
      </div>
    </div>
  );
}
