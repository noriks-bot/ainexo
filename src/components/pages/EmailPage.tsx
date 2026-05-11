'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';
import MenuOverlay from '@/components/MenuOverlay';

export default function EmailPage() {
  const { setEmail, nextPage } = useFunnel();
  const [menuOpen, setMenuOpen] = useState(false);
  const [value, setValue] = useState('');
  const [consent, setConsent] = useState(true);
  const [newsletter, setNewsletter] = useState(true);

  const handleSubmit = () => {
    if (!value || !consent) return;
    
    // Save lead to API
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: value, consent, newsletter }),
    }).catch(() => {});
    
    setEmail(value);
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
        {/* Title - two lines like original */}
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#100018', lineHeight: 1.3 }}>
          Vnesite email za vaš
        </h1>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#5653FE', lineHeight: 1.3 }}>
          Osebni AI Izziv!
        </h1>

        {/* Email input */}
        <div
          className="flex items-center gap-3"
          style={{
            border: '1px solid #E0E0E0',
            borderRadius: 12,
            background: '#F9FAFB',
            height: 56,
            paddingLeft: 16,
            paddingRight: 16,
            marginTop: 32,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
              stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <path d="M22 6l-10 7L2 6" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            type="email"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Vaš email"
            className="flex-1 bg-transparent outline-none"
            style={{ fontSize: 16, color: '#100018' }}
          />
        </div>

        {/* Consent checkbox - prechecked */}
        <label className="flex items-start gap-3 cursor-pointer" style={{ marginTop: 20 }}>
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: 22,
              height: 22,
              borderRadius: 4,
              marginTop: 2,
              border: `2px solid ${consent ? '#5653FE' : '#D1D5DB'}`,
              background: consent ? '#5653FE' : 'white',
            }}
            onClick={() => setConsent(!consent)}
          >
            {consent && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span style={{ fontSize: 14, color: '#565B66', lineHeight: 1.5 }}>
            Strinjam se z obdelavo mojih osebnih podatkov v skladu s{' '}
            <a href="/privacy" style={{ color: '#100018', textDecoration: 'underline' }}>Politiko zasebnosti</a>
          </span>
        </label>

        {/* Newsletter checkbox - prechecked */}
        <label className="flex items-start gap-3 cursor-pointer" style={{ marginTop: 12 }}>
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: 22,
              height: 22,
              borderRadius: 4,
              marginTop: 2,
              border: `2px solid ${newsletter ? '#5653FE' : '#D1D5DB'}`,
              background: newsletter ? '#5653FE' : 'white',
            }}
            onClick={() => setNewsletter(!newsletter)}
          >
            {newsletter && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span style={{ fontSize: 14, color: '#565B66', lineHeight: 1.5 }}>
            Naročim se na novice in posebne ponudbe ainexo
          </span>
        </label>

        {/* Bonus banner - same size as original */}
        <div
          className="flex items-center gap-4"
          style={{
            background: '#E8F6EA',
            border: '1px solid #86EFAC',
            borderRadius: 12,
            padding: '16px 20px',
            marginTop: 20,
          }}
        >
          <span style={{ fontSize: 36, flexShrink: 0 }}>🎁</span>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#166534', lineHeight: 1.4 }}>
            Preverite da je vaš email pravilen — ne zamudite{' '}
            <span style={{ color: '#5653FE' }}>BONUSA!</span>
          </p>
        </div>

      </div>

      {/* Sticky NADALJUJ button */}
      <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)', paddingTop: 24, paddingBottom: 24, paddingLeft: 20, paddingRight: 20 }}>
        <button
          onClick={handleSubmit}
          disabled={!value}
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
