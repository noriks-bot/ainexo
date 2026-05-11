'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';
import MenuOverlay from '@/components/MenuOverlay';

export default function LandingPage() {
  const { nextPage, setUserType } = useFunnel();

  const handleSelect = (type: string) => {
    setUserType(type);
    nextPage();
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-fade-in flex flex-col bg-white" style={{ width: '100%', maxWidth: 480, margin: '0 auto', height: '100dvh' }}>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      {/* Header */}
      <header
        style={{ height: 48, borderBottom: '1px solid #ECECEC', position: 'relative', flexShrink: 0 }}
      >
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <Image src="/images/logo.svg" alt="ainexo" width={140} height={42} priority />
        </div>
        <button onClick={() => setMenuOpen(true)} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#100018" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      {/* Content - fills remaining space */}
      <div className="flex-1 flex flex-col justify-center" style={{ padding: '0 20px', overflow: 'hidden' }}>
        <h1
          className="font-black text-[#100018] text-center"
          style={{ fontSize: 32, lineHeight: 1.1, letterSpacing: '-0.5px' }}
        >
          28-DNEVNI AI IZZIV
        </h1>
        <p
          className="text-[#6E6E75] text-center"
          style={{ fontSize: 20, fontWeight: 400, marginTop: 8 }}
        >
          Kako bi opisali sebe?
        </p>

        {/* Cards */}
        <div className="flex gap-4" style={{ marginTop: 24 }}>
          {/* Podjetje */}
          <button
            onClick={() => handleSelect('company')}
            className="flex-1 flex flex-col transition-transform active:scale-[0.97] focus:outline-none"
            style={{
              border: '2px solid #5653FE',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#5653FE',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'white' }}>
              <Image
                src="/images/company.webp"
                alt="Delam za podjetje"
                fill
                className="object-contain object-bottom"
              />
            </div>
            <div
              className="flex items-center justify-between px-4"
              style={{
                background: '#5653FE',
                padding: '16px 16px',
                minHeight: 64,
              }}
            >
              <span className="text-white font-bold leading-tight" style={{ fontSize: 18 }}>
                Delam za podjetje
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>

          {/* Zase */}
          <button
            onClick={() => handleSelect('myself')}
            className="flex-1 flex flex-col transition-transform active:scale-[0.97] focus:outline-none"
            style={{
              border: '2px solid #5653FE',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#5653FE',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: 'white', overflow: 'hidden' }}>
              <Image
                src="/images/myself.png"
                alt="Delam zase"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center bottom', transform: 'scale(0.9)', transformOrigin: 'center bottom' }}
              />
            </div>
            <div
              className="flex items-center justify-between px-4"
              style={{
                background: '#5653FE',
                padding: '16px 16px',
                minHeight: 64,
              }}
            >
              <span className="text-white font-bold leading-tight" style={{ fontSize: 18 }}>
                Delam zase
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 text-center" style={{ padding: '12px 24px 16px' }}>
        <p className="leading-relaxed" style={{ color: '#6E6E75', fontSize: 13 }}>
          S klikom se strinjate s{' '}
          <a href="/terms" className="underline" style={{ color: '#0050B2' }}>Pogoji uporabe</a>,{' '}
          <a href="/privacy" className="underline" style={{ color: '#0050B2' }}>Politiko zasebnosti</a>,{' '}
          <a href="/subscription" className="underline" style={{ color: '#0050B2' }}>Pogoji naročnine</a>.
        </p>
        <p className="mt-2" style={{ color: '#6E6E75', fontSize: 13 }}>
          ainexo d.o.o.
        </p>
      </div>
    </div>
  );
}
