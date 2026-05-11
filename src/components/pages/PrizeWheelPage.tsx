'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';
import MenuOverlay from '@/components/MenuOverlay';

const segments = [
  { label: '20%', angle: 0 },
  { label: '30%', angle: 60 },
  { label: '40%', angle: 120 },
  { label: '50%', angle: 180 },
  { label: '10%', angle: 240 },
  { label: '15%', angle: 300 },
];

export default function PrizeWheelPage() {
  const { nextPage, name } = useFunnel();
  const [menuOpen, setMenuOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [done, setDone] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [done]);

  const [phase, setPhase] = useState<'idle' | 'spin1' | 'spin2' | 'done'>('idle');

  const handleSpin = () => {
    if (phase !== 'idle') return;
    setPhase('spin1');
    
    // Segments from top clockwise: 20%(0-60), 30%(60-120), 40%(120-180), 50%(180-240), 10%(240-300), 15%(300-360)
    // Border between 10% and 50% is at 240°
    // To land pointer on BORDER: rotate = fullTurns + (360 - 240) = fullTurns + 120
    const fullTurns1 = 360 * 5;
    const almostStop = fullTurns1 + 120;
    setRotation(almostStop);

    // Phase 2: nudge just 3° into 50% (beginning of 50%)
    setTimeout(() => {
      setPhase('spin2');
      setRotation(almostStop + 3);
    }, 4500);

    setTimeout(() => {
      setPhase('done');
      setDone(true);
    }, 6500);
  };

  const handleContinue = () => {
    nextPage();
  };

  return (
    <div className="page-fade-in flex flex-col bg-white" style={{ maxWidth: 390, margin: '0 auto', minHeight: '100vh' }}>
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
      <div className="flex-1 flex flex-col items-center" style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 24 }}>
        {/* Title */}
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#100018', lineHeight: 1.25, textAlign: 'center' }}>
          Zavrtite in prihranite pri vašem
        </h1>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#5653FE', lineHeight: 1.25, textAlign: 'center' }}>
          Osebnem AI Izzivu!
        </h1>
        <p style={{ fontSize: 16, color: '#565B66', textAlign: 'center', marginTop: 12 }}>
          🎁 Vsak udeleženec prejme poseben popust!
        </p>

        {/* Wheel container - shrinks when done */}
        <div style={{ position: 'relative', width: done ? 200 : 320, height: done ? 200 : 320, marginTop: 24, transition: 'all 0.5s ease' }}>
          {/* Outer ring (blue border) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366F1, #818CF8)',
            padding: 12,
          }}>
            {/* Inner wheel */}
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              transition: phase === 'spin1' ? 'transform 4.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : phase === 'spin2' ? 'transform 1.5s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none',
              transform: `rotate(${rotation}deg)`,
            }}>
              {/* SVG wheel segments */}
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                {segments.map((seg, i) => {
                  const startAngle = (i * 60 - 90) * Math.PI / 180;
                  const endAngle = ((i + 1) * 60 - 90) * Math.PI / 180;
                  const x1 = 100 + 100 * Math.cos(startAngle);
                  const y1 = 100 + 100 * Math.sin(startAngle);
                  const x2 = 100 + 100 * Math.cos(endAngle);
                  const y2 = 100 + 100 * Math.sin(endAngle);
                  const fill = i % 2 === 0 ? '#E8E5FF' : '#D5D0FF';
                  
                  // Text position: center of each segment
                  const midAngle = ((i * 60 + 30) - 90) * Math.PI / 180;
                  const textR = 60; // distance from center
                  const tx = 100 + textR * Math.cos(midAngle);
                  const ty = 100 + textR * Math.sin(midAngle);
                  const textRotation = i * 60 + 30; // rotate text to follow segment

                  return (
                    <g key={i}>
                      <path
                        d={`M100,100 L${x1},${y1} A100,100 0 0,1 ${x2},${y2} Z`}
                        fill={fill}
                      />
                      <text
                        x={tx}
                        y={ty}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontWeight="800"
                        fontSize="16"
                        fill="#1E1B4B"
                        transform={`rotate(${textRotation}, ${tx}, ${ty})`}
                      >
                        {seg.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Gold dots around the ring */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const r = 156;
            const cx = 160 + r * Math.cos(angle);
            const cy = 160 + r * Math.sin(angle);
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: cx - 6,
                  top: cy - 6,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 40% 40%, #FDE68A, #F59E0B)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                }}
              />
            );
          })}

          {/* Pointer arrow INSIDE the wheel, pointing down */}
          <div style={{
            position: 'absolute',
            top: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderTop: '26px solid #1E1B4B',
            zIndex: 10,
          }} />
        </div>

      </div>

      {/* Result bottom sheet */}
      {done && (
        <div className="page-fade-in" ref={resultRef} style={{
          background: 'white',
          borderTop: '1px solid #ECECEC',
          padding: '24px 24px 16px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 28, fontWeight: 800, color: '#100018' }}>Woo hoo! 🥳</p>
          
          {/* Confetti card */}
          <div style={{
            background: 'linear-gradient(135deg, #F0EFFF 0%, #E8E5FF 100%)',
            borderRadius: 16,
            padding: '20px 24px',
            marginTop: 16,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Confetti decoration */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3, background: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'10\' y=\'20\' width=\'8\' height=\'8\' fill=\'%235653FE\' transform=\'rotate(45 14 24)\'/%3E%3Crect x=\'50\' y=\'10\' width=\'6\' height=\'12\' fill=\'%23FF6B6B\' transform=\'rotate(30 53 16)\'/%3E%3Crect x=\'90\' y=\'30\' width=\'8\' height=\'4\' fill=\'%2353BF65\' transform=\'rotate(-20 94 32)\'/%3E%3Crect x=\'130\' y=\'15\' width=\'10\' height=\'6\' fill=\'%23FFB800\' transform=\'rotate(60 135 18)\'/%3E%3Crect x=\'170\' y=\'25\' width=\'6\' height=\'10\' fill=\'%235653FE\' transform=\'rotate(-45 173 30)\'/%3E%3Crect x=\'30\' y=\'60\' width=\'8\' height=\'4\' fill=\'%23FF6B6B\' transform=\'rotate(15 34 62)\'/%3E%3Crect x=\'70\' y=\'70\' width=\'6\' height=\'8\' fill=\'%2353BF65\' transform=\'rotate(-30 73 74)\'/%3E%3Crect x=\'110\' y=\'55\' width=\'10\' height=\'4\' fill=\'%23FFB800\' transform=\'rotate(45 115 57)\'/%3E%3Crect x=\'150\' y=\'65\' width=\'4\' height=\'10\' fill=\'%235653FE\' transform=\'rotate(20 152 70)\'/%3E%3C/svg%3E") repeat' }} />
            
            <p style={{ fontSize: 18, color: '#3A3A4A', position: 'relative', zIndex: 1 }}>
              {name || 'Prijatelj'}, osvojili ste popust
            </p>
            <p style={{ fontSize: 48, fontWeight: 900, color: '#100018', marginTop: 4, fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
              50% off
            </p>
          </div>

          {/* Promo code */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16, background: 'white', border: '2px dashed #5653FE', borderRadius: 12, padding: '12px 24px', maxWidth: 240, marginLeft: 'auto', marginRight: 'auto' }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: '#5653FE', letterSpacing: 3 }}>AINEXO50</span>
          </div>
          
          <p style={{ fontSize: 15, color: '#9CA3AF', marginTop: 12 }}>
            Samodejno bo uveljavljen
          </p>
        </div>
      )}

      {/* Sticky button */}
      <div style={{ position: 'sticky', bottom: 0, background: done ? 'white' : 'linear-gradient(transparent, white 20%)', paddingTop: done ? 8 : 24, paddingBottom: 24, paddingLeft: 20, paddingRight: 20 }}>
        <button
          onClick={done ? handleContinue : handleSpin}
          className="w-full font-bold uppercase"
          style={{
            background: '#5653FE',
            color: 'white',
            height: 60,
            borderRadius: 16,
            fontSize: 18,
          }}
        >
          {done ? 'ZAHTEVAJ MOJ POPUST' : 'ZAVRTI'}
        </button>
      </div>
    </div>
  );
}
