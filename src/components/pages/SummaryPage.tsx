'use client';

import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';

export default function SummaryPage() {
  const { nextPage } = useFunnel();

  return (
    <div className="page-fade-in min-h-screen flex flex-col bg-white" style={{ maxWidth: 390, margin: '0 auto' }}>
      {/* Header with back arrow */}
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

      {/* Step progress bar - 4 segments, first filled */}
      <div className="flex gap-2" style={{ padding: '12px 20px 0' }}>
        <div style={{ flex: 1, height: 4, background: '#5653FE', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#ECECEC', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#ECECEC', borderRadius: 2 }} />
        <div style={{ flex: 1, height: 4, background: '#ECECEC', borderRadius: 2 }} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col" style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 24 }}>
        {/* Main card with gray bg */}
        <div style={{ background: '#F5F5F7', borderRadius: 20, padding: '28px 24px' }}>
          {/* Title */}
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#100018', lineHeight: 1.3 }}>
            Vaš osebni povzetek
          </h1>

          {/* Description */}
          <p style={{ fontSize: 15, color: '#565B66', lineHeight: 1.6, marginTop: 16 }}>
            Quiz kaže, da je vaša trenutna ovira pri AI morda pomanjkanje jasnosti in nizke AI veščine.
          </p>

          {/* AI Skills sub-card */}
          <div style={{ background: '#F5F5F7', borderRadius: 16, padding: '24px 0', marginTop: 20 }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#100018', textAlign: 'center' }}>
              AI Veščine
            </p>
            <p style={{ fontSize: 40, fontWeight: 900, color: '#100018', textAlign: 'center', marginTop: 8 }}>
              Nizke
            </p>

            {/* Gradient gauge bar */}
            <div style={{ position: 'relative', marginTop: 20, paddingLeft: 0, paddingRight: 0 }}>
              <div style={{ height: 12, borderRadius: 6, background: 'linear-gradient(to right, #FF441F 0%, #FF441F 30%, #FFB800 50%, #FFD700 65%, #53BF65 100%)', position: 'relative' }}>
                {/* Marker pill on red section */}
                <div style={{
                  position: 'absolute',
                  left: '18%',
                  top: -4,
                  transform: 'translateX(-50%)',
                  width: 8,
                  height: 20,
                  background: '#100018',
                  borderRadius: 4,
                  border: '2px solid white',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }} />
              </div>
              {/* Labels */}
              <div className="flex justify-between" style={{ marginTop: 8 }}>
                <span style={{ fontSize: 13, color: '#9CA3AF' }}>Nizke</span>
                <span style={{ fontSize: 13, color: '#9CA3AF' }}>Srednje</span>
                <span style={{ fontSize: 13, color: '#9CA3AF' }}>Visoke</span>
              </div>
            </div>
          </div>
        </div>

        {/* Potential card */}
        <div style={{ background: '#F5F5F7', borderRadius: 20, padding: '28px 24px', marginTop: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#100018', textAlign: 'center' }}>
            Potencial
          </p>
          <p style={{ fontSize: 52, fontWeight: 900, color: '#100018', textAlign: 'center', marginTop: 8 }}>
            85%
          </p>

          {/* Green insight box */}
          <div
            className="flex items-center gap-4"
            style={{
              background: '#E8F6EA',
              border: '1.5px solid #53BF65',
              borderRadius: 14,
              padding: '16px 20px',
              marginTop: 20,
            }}
          >
            <span style={{ fontSize: 36, flexShrink: 0 }}>💡</span>
            <p style={{ fontSize: 15, fontWeight: 600, color: '#166534', lineHeight: 1.4 }}>
              Vendar vaši odgovori kažejo visok potencial za obvladovanje AI
            </p>
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
