'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';
import MenuOverlay from '@/components/MenuOverlay';

export default function NamePage() {
  const { setName, nextPage } = useFunnel();
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value.trim()) return;
    setName(value.trim());
    nextPage();
  };

  return (
    <div className="page-fade-in min-h-screen flex flex-col bg-white" style={{ maxWidth: 390, margin: '0 auto' }}>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* Header */}
      <header
        className="flex items-center justify-between px-4"
        style={{ height: 48, borderBottom: '1px solid #ECECEC' }}
      >
        <div style={{ width: 24 }} />
        <Image src="/images/logo.svg" alt="ainexo" width={140} height={42} />
        <button className="p-1" aria-label="Menu" onClick={() => setMenuOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#100018" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ maxWidth: 360, margin: '0 auto', width: '100%', paddingLeft: 24, paddingRight: 24, paddingTop: 32 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#100018', lineHeight: 1.3 }}>
          Kako naj te kličemo?
        </h1>

        {/* Name input - centered text like original */}
        <div
          className="flex items-center"
          style={{
            border: '1px solid #E0E0E0',
            borderRadius: 12,
            background: '#F9FAFB',
            height: 56,
            paddingLeft: 16,
            paddingRight: 16,
            marginTop: 24,
          }}
        >
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Vnesite vaše ime"
            className="flex-1 bg-transparent outline-none text-center"
            style={{ fontSize: 16, color: '#100018' }}
          />
        </div>

      </div>

      {/* Sticky NADALJUJ button */}
      <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)', paddingTop: 24, paddingBottom: 24, paddingLeft: 20, paddingRight: 20 }}>
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="w-full font-bold uppercase transition-opacity disabled:opacity-40"
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
