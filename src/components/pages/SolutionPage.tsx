'use client';

import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';

const benefits = [
  {
    text: (
      <>Obvladajte AI orodja ki lahko <strong>povečajo vaš dohodek</strong></>
    ),
  },
  {
    text: (
      <>Dostop do najboljših AI orodij na svetu: <strong>ChatGPT, Gemini, Grok in več</strong> — vse na enem mestu</>
    ),
  },
  {
    text: (
      <><strong>Pridobite certifikat v AI</strong> in izstopite iz 90% ljudi ki tega še ne razumejo</>
    ),
  },
  {
    text: (
      <>Odklenite <strong>1000+ preverjenih AI pozivov</strong> za produktivnost, poslovanje in kreativnost</>
    ),
  },
  {
    text: (
      <>Sledenje napredku za ogled vaše <strong>rasti in krepitve zaupanja</strong> z vsako lekcijo</>
    ),
  },
  {
    text: (
      <>...in še veliko več!</>
    ),
  },
];

export default function SolutionPage() {
  const { nextPage } = useFunnel();

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

      {/* Step progress bar - 3 of 4 filled */}
      <div className="flex gap-2" style={{ padding: '12px 20px 0' }}>
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#ECECEC', borderRadius: 2 }} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 28 }}>
        {/* Title */}
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#100018', lineHeight: 1.25 }}>
          AI je lažji kot mislite
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 16, color: '#565B66', lineHeight: 1.5, marginTop: 12 }}>
          Naš izziv je zasnovan tako, da naredi razliko v vašem AI znanju od prvega dne
        </p>

        {/* Hero image - badges already baked into image */}
        <div style={{ marginTop: 20, borderRadius: 20, overflow: 'hidden', position: 'relative', width: '100%', aspectRatio: '1/1' }}>
          <Image src="/images/solution-hero.jpg" alt="" fill className="object-cover" />
        </div>

        {/* Benefits list */}
        <div style={{ marginTop: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#100018', marginBottom: 20 }}>
            Preizkusite ainexo in boste:
          </h2>

          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-4" style={{ marginBottom: i < benefits.length - 1 ? 20 : 0 }}>
              {/* Circle indicator */}
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                border: '2.5px solid #5653FE',
                flexShrink: 0,
                marginTop: 2,
              }} />
              <p style={{ fontSize: 16, color: '#3A3A4A', lineHeight: 1.5 }}>{b.text}</p>
            </div>
          ))}
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
