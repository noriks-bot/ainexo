'use client';

import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';

export default function BeforeAfterPage() {
  const { nextPage } = useFunnel();

  // Target date = today + 28 days
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 28);
  const formattedDate = targetDate.toLocaleDateString('sl-SI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const struggles = [
    'Nejasno kje začeti',
    'Brez strukturiranega učenja',
    'Nizko zaupanje v AI orodja',
    'Omejeni z le nekaj generičnimi orodji',
  ];

  const solutions = [
    'Osebni načrt',
    'Strukturirano učenje',
    'Zanesljivi rezultati z AI',
    'Odklenite najboljša orodja za vsako nalogo',
  ];

  return (
    <div className="page-fade-in min-h-screen flex flex-col bg-white" style={{ maxWidth: 390, margin: '0 auto' }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-4"
        style={{ height: 48, borderBottom: '1px solid #ECECEC' }}
      >
        <button className="p-1" aria-label="Nazaj">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#100018" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <Image src="/images/logo.svg" alt="ainexo" width={120} height={36} />
        <div style={{ width: 22 }} />
      </header>

      {/* Step progress bar - 4 segments, first two filled */}
      <div className="flex gap-2" style={{ padding: '12px 20px 0' }}>
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#ECECEC', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#ECECEC', borderRadius: 2 }} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 24 }}>
        {/* Main card */}
        <div style={{ background: '#F5F5F7', borderRadius: 20, padding: '28px 24px' }}>
          {/* Title */}
          <h1 style={{ fontSize: 28, fontWeight: 800, color: '#100018', lineHeight: 1.25, textAlign: 'center' }}>
            Vaš osebni<br />28-dnevni AI izziv
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: 15, color: '#565B66', textAlign: 'center', marginTop: 16 }}>
            Pričakujemo da boste obvladali AI veščine
          </p>

          {/* Date - underlined */}
          <p style={{ fontSize: 17, fontWeight: 700, color: '#100018', textAlign: 'center', marginTop: 4, textDecoration: 'underline' }}>
            do 7. junij 2026
          </p>
        </div>

        {/* Before / After cards side by side */}
        <div className="flex gap-3" style={{ marginTop: 16 }}>
          {/* BEFORE - pink/red card */}
          <div style={{ flex: 1, background: '#FFF0F0', border: '1.5px solid #FFB3B3', borderRadius: 20, padding: '0 16px 20px', overflow: 'hidden' }}>
            {/* Character image area */}
            <div className="flex justify-center" style={{ paddingTop: 12, paddingBottom: 8 }}>
              <div style={{ width: 100, height: 100, position: 'relative' }}>
                <Image src="/images/before-character.jpg" alt="" fill className="object-contain" />
              </div>
            </div>

            <p style={{ fontSize: 14, color: '#565B66' }}>Zdaj ste tukaj:</p>

            <div style={{ height: 1, background: '#FFB3B3', marginTop: 12, marginBottom: 12 }} />

            <p style={{ fontSize: 14, fontWeight: 700, color: '#100018' }}>Težave:</p>
            {struggles.map((s, i) => (
              <div key={i}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#100018', marginTop: 4 }}>{s}</p>
                {i < struggles.length - 1 && (
                  <div style={{ height: 1, background: '#FFB3B3', marginTop: 10, marginBottom: 10 }} />
                )}
              </div>
            ))}
          </div>

          {/* AFTER - green card */}
          <div style={{ flex: 1, background: '#F0FFF4', border: '1.5px solid #86EFAC', borderRadius: 20, padding: '0 16px 20px', overflow: 'hidden' }}>
            {/* Character image area */}
            <div className="flex justify-center" style={{ paddingTop: 12, paddingBottom: 8 }}>
              <div style={{ width: 100, height: 100, position: 'relative' }}>
                <Image src="/images/after-character.jpg" alt="" fill className="object-contain" />
              </div>
            </div>

            <p style={{ fontSize: 14, color: '#565B66' }}>Vi z ainexo:</p>

            <div style={{ height: 1, background: '#86EFAC', marginTop: 12, marginBottom: 12 }} />

            <p style={{ fontSize: 14, fontWeight: 700, color: '#100018' }}>Rešitve:</p>
            {solutions.map((s, i) => (
              <div key={i}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#100018', marginTop: 4 }}>{s}</p>
                {i < solutions.length - 1 && (
                  <div style={{ height: 1, background: '#86EFAC', marginTop: 10, marginBottom: 10 }} />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Sticky button */}
      <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(transparent, white 20%)', paddingTop: 24, paddingBottom: 24, paddingLeft: 20, paddingRight: 20 }}>
        <button
          onClick={nextPage}
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
