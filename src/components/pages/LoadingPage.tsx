'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';
import MenuOverlay from '@/components/MenuOverlay';

const reviews = [
  {
    title: 'Izjemna platforma',
    text: '"ainexo mi je pomagal razumeti AI orodja na preprost in praktičen način. Priporočam vsem!"',
    author: 'Tina K.',
    stars: 5,
  },
  {
    title: 'Izkušnja je vrhunska',
    text: '"V 28 dneh sem se naučil več kot v celem letu samostojnega učenja. Res odlično!"',
    author: 'Jernej M.',
    stars: 5,
  },
  {
    title: 'Obsežno znanje',
    text: '"Odlična interaktivna vsebina! Kot začetnica sem okrepila temelje in dobila nove ideje za več iz AI, tako profesionalno kot osebno."',
    author: 'Maja P.',
    stars: 4,
  },
];

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function LoadingPage() {
  const { nextPage } = useFunnel();
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current = Math.min(current + step, 100);
      setProgress(Math.round(current));
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => nextPage(), 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [nextPage]);

  useEffect(() => {
    const t = setInterval(() => {
      setReviewIndex(i => (i + 1) % reviews.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;
  const review = reviews[reviewIndex];

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

      <div className="flex-1 flex flex-col" style={{ maxWidth: 360, margin: '0 auto', width: '100%', paddingLeft: 20, paddingRight: 20 }}>
        {/* Circular progress */}
        <div className="flex flex-col items-center" style={{ paddingTop: 48, paddingBottom: 8 }}>
          <div className="relative" style={{ width: 120, height: 120 }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r={RADIUS} fill="none" stroke="#ECECEC" strokeWidth="7" />
              <circle
                cx="60" cy="60" r={RADIUS}
                fill="none"
                stroke="#5653FE"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 60 60)"
                style={{ transition: 'stroke-dashoffset 0.05s linear' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-bold" style={{ fontSize: 28, color: '#5653FE' }}>{progress}%</span>
            </div>
          </div>

          <p style={{ marginTop: 20, fontSize: 15, color: '#565B66', textAlign: 'center' }}>
            Ustvarjamo vaš osebni AI izziv...
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#ECECEC', marginTop: 24, marginBottom: 28 }} />

        {/* Social proof */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <p style={{ fontSize: 32, fontWeight: 800, color: '#5653FE', lineHeight: 1.2 }}>
            100.000+ ljudi
          </p>
          <p style={{ fontSize: 20, fontWeight: 700, color: '#100018', marginTop: 4 }}>
            je izbralo ainexo
          </p>
        </div>

        {/* Review card */}
        <div
          key={reviewIndex}
          className="page-fade-in"
          style={{
            border: '1px solid #ECECEC',
            borderRadius: 16,
            padding: '20px',
            background: 'white',
          }}
        >
          {/* Trustpilot stars row + author */}
          <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center"
                  style={{
                    width: 24,
                    height: 24,
                    background: i < review.stars ? '#00B67A' : '#DCDCE6',
                    borderRadius: 3,
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Title + Author on same line */}
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <p style={{ fontWeight: 700, fontSize: 15, color: '#100018' }}>{review.title}</p>
            <p style={{ fontSize: 14, color: '#9CA3AF' }}>{review.author}</p>
          </div>

          {/* Review text */}
          <p style={{ fontSize: 14, color: '#565B66', lineHeight: 1.6 }}>{review.text}</p>
        </div>

        {/* Trustpilot attribution */}
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: '#9CA3AF' }}>
          Izbrani komentarji s{' '}
          <a href="#" style={{ textDecoration: 'underline' }}>Trustpilota</a>.
        </p>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5" style={{ marginTop: 12 }}>
          {reviews.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === reviewIndex ? 20 : 8,
                height: 8,
                background: i === reviewIndex ? '#5653FE' : '#ECECEC',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
