'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useFunnel } from '@/context/FunnelContext';

// ─── Countdown Hook ───────────────────────────────────────────────────────────
function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return { min, sec };
}

// ─── Plans ────────────────────────────────────────────────────────────────────
const PLANS = [
  {
    id: 'week1',
    label: '1-TEDENSKI PLAN',
    weeks: 1,
    originalPrice: '€13.86',
    discountedPrice: '€6.93',
    perDayWhole: '0',
    perDayCents: '99',
    originalPerDay: '€1.98',
  },
  {
    id: 'week4',
    label: '4-TEDENSKI PLAN',
    weeks: 4,
    originalPrice: '€39.99',
    discountedPrice: '€19.99',
    perDayWhole: '0',
    perDayCents: '71',
    originalPerDay: '€1.43',
    popular: true,
  },
  {
    id: 'week12',
    label: '12-TEDENSKI PLAN',
    weeks: 12,
    originalPrice: '€79.99',
    discountedPrice: '€39.99',
    perDayWhole: '0',
    perDayCents: '48',
    originalPerDay: '€0.95',
  },
];

// ─── Ticker Names ─────────────────────────────────────────────────────────────
const TICKER_NAMES = [
  { name: 'marko.kr***', plan: '1-tedenski načrt' },
  { name: 'ana.pr***', plan: '4-tedenski načrt' },
  { name: 'luka.no***', plan: '12-tedenski načrt' },
  { name: 'maja.ko***', plan: '4-tedenski načrt' },
  { name: 'nina.be***', plan: '1-tedenski načrt' },
  { name: 'tine.ho***', plan: '4-tedenski načrt' },
  { name: 'urška.vi***', plan: '12-tedenski načrt' },
  { name: 'žan.me***', plan: '4-tedenski načrt' },
  { name: 'petra.le***', plan: '1-tedenski načrt' },
  { name: 'andraž.ju***', plan: '12-tedenski načrt' },
  { name: 'katja.bo***', plan: '4-tedenski načrt' },
  { name: 'rok.za***', plan: '1-tedenski načrt' },
  { name: 'eva.ko***', plan: '4-tedenski načrt' },
  { name: 'jan.tr***', plan: '12-tedenski načrt' },
  { name: 'neža.st***', plan: '4-tedenski načrt' },
];

// ─── ScrollingTicker ──────────────────────────────────────────────────────────
function ScrollingTicker() {
  const doubled = [...TICKER_NAMES, ...TICKER_NAMES];
  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          gap: 12px;
          animation: ticker-scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              border: '1px solid #E0E0E0',
              borderRadius: 10,
              padding: '10px 16px',
              whiteSpace: 'nowrap',
              fontSize: 13,
              color: '#333',
              flexShrink: 0,
            }}
          >
            <span style={{ fontWeight: 600 }}>{item.name}</span>
            <span style={{ color: '#888', marginLeft: 6 }}>kupil {item.plan}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SellingPage() {
  const { setSelectedPlan: setSelectedPlanContext, nextPage } = useFunnel();
  const [selectedPlan, setSelectedPlan] = useState<string>('week4');
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [showGift, setShowGift] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const selectedPlanData = PLANS.find(p => p.id === selectedPlan) || PLANS[1];
  const countdown = useCountdown(10 * 60); // 10 minutes shared

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#F5F5F7', minHeight: '100vh' }}>

      {/* ── 1. STICKY HEADER ── */}
      {!showGift && !showCertificate && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: '8px 16px',
          background: 'transparent',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            maxWidth: 480,
            width: '100%',
            pointerEvents: 'auto',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: '#888', marginBottom: 2 }}>Popust poteče čez</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1a1a1a', letterSpacing: 1 }}>
              {countdown.min}:{countdown.sec}
            </div>
          </div>
          <button
            style={{
              background: '#5653FE',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              padding: '10px 18px',
              fontWeight: 700,
              fontSize: 13,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            onClick={() => {
              const el = document.getElementById('pricing-section');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            PRIDOBI MOJ NAČRT
          </button>
        </div>
      </div>
      )}

      {/* Spacer for sticky header */}
      <div style={{ height: 72 }} />

      <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 16px' }}>

        {/* ── 2. GRADIENT BANNER ── */}
        <div
          style={{
            background: '#ECEAFF',
            borderRadius: 20,
            padding: '24px 20px',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 28 }}>🎁</span>
            <span style={{ fontSize: 15, color: '#333', fontWeight: 500 }}>Posebni popust:</span>
            <span
              style={{
                background: '#FF3B30',
                color: '#fff',
                borderRadius: 20,
                padding: '3px 10px',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              50%
            </span>
          </div>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.3,
              margin: '0 0 14px',
            }}
          >
            Vaš personaliziran AI tečaj je pripravljen!
          </h1>
          <div
            style={{
              display: 'inline-block',
              background: '#5653FE',
              color: '#fff',
              borderRadius: 20,
              padding: '6px 16px',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Postanite mojster AI
          </div>
        </div>

        {/* ── 3. GOAL + TARGET CARDS ── */}
        <div
          style={{
            background: '#F5F5F7',
            borderRadius: 16,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', gap: 12 }}>
            <div
              style={{
                flex: 1,
                background: '#fff',
                borderRadius: 12,
                padding: '14px 12px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 6 }}>🎯</div>
              <div style={{ fontSize: 11, color: '#888', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Vaš cilj
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>
                Obvladati AI orodja
              </div>
            </div>
            <div
              style={{
                flex: 1,
                background: '#fff',
                borderRadius: 12,
                padding: '14px 12px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 24, marginBottom: 6 }}>⚡</div>
              <div style={{ fontSize: 11, color: '#888', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Ciljno področje
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>
                Produktivnost
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. AI TOOLS IMAGE ── */}
        <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
          <Image
            src="/images/ai-tools-grid.jpg"
            alt="AI Tools"
            width={480}
            height={280}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* ── 5. SOCIAL PROOF ── */}
        <div
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: '14px 18px',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 28 }}>🔥</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>
              52 ljudi je kupilo ta načrt
            </div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 2 }}>
              v zadnjih 24 urah
            </div>
          </div>
        </div>

        {/* ── 6. SCROLLING TICKER ── */}
        <div style={{ marginBottom: 16 }}>
          <ScrollingTicker />
        </div>

        {/* ── 7. PROMO CODE CARD ── */}
        <div style={{ marginBottom: 8 }}>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Izberite najboljši načrt za vas
          </div>
          <div
            style={{
              background: '#E8F5E9',
              borderRadius: 16,
              padding: '16px 18px',
              marginBottom: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: '#4CAF50',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                %
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#2E7D32' }}>
                Vaša promo koda uveljavljena!
              </div>
            </div>
            <div style={{ height: 1, background: '#C8E6C9', marginBottom: 12 }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div
                style={{
                  background: '#fff',
                  border: '1.5px dashed #4CAF50',
                  borderRadius: 8,
                  padding: '6px 14px',
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#2E7D32',
                  letterSpacing: 2,
                }}
              >
                AINEXO50
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: '#666', marginBottom: 2 }}>Poteče čez</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#2E7D32' }}>
                  {countdown.min}:{countdown.sec}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 8. PRICING CARDS (VERTICAL) ── */}
        <div id="pricing-section" style={{ marginBottom: 16, scrollMarginTop: 80 }}>
          {PLANS.map((plan) => (
            <div key={plan.id} style={{ marginBottom: 12 }}>
              {/* MOST POPULAR banner above 4-week plan */}
              {plan.popular && (
                <div
                  style={{
                    background: '#5653FE',
                    color: '#fff',
                    borderRadius: '16px 16px 0 0',
                    padding: '8px 16px',
                    fontSize: 13,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span>👍</span>
                  <span>NAJBOLJ PRILJUBLJEN</span>
                </div>
              )}

              {/* Card */}
              <div
                onClick={() => setSelectedPlan(plan.id)}
                style={{
                  background: '#fff',
                  borderRadius: plan.popular ? '0 0 16px 16px' : 16,
                  border: selectedPlan === plan.id
                    ? '2.5px solid #5653FE'
                    : '1px solid #E0E0E0',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  gap: 12,
                }}
              >
                {/* Left side */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                  {/* Radio button */}
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      border: selectedPlan === plan.id ? 'none' : '2px solid #C0C0C0',
                      background: selectedPlan === plan.id ? '#5653FE' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {selectedPlan === plan.id && (
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#fff',
                        }}
                      />
                    )}
                  </div>

                  {/* Plan info */}
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: '#1a1a1a',
                        marginBottom: 4,
                        letterSpacing: 0.3,
                      }}
                    >
                      {plan.label}
                    </div>
                    <div style={{ fontSize: 12, color: '#999', textDecoration: 'line-through', marginBottom: 2 }}>
                      {plan.originalPrice}
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>
                      {plan.discountedPrice}
                    </div>
                  </div>
                </div>

                {/* Right side: per-day badge */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Badge */}
                  <div
                    style={{
                      background: '#F0F0F0',
                      borderRadius: 12,
                      padding: '8px 14px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: 4,
                    }}
                  >
                    {/* € superscript + big number + cents/per day */}
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: '#1a1a1a',
                          marginTop: 4,
                          lineHeight: 1,
                        }}
                      >
                        €
                      </span>
                      <span
                        style={{
                          fontSize: 36,
                          fontWeight: 800,
                          color: '#1a1a1a',
                          lineHeight: 1,
                          margin: '0 1px',
                        }}
                      >
                        {plan.perDayWhole}
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          marginTop: 4,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#1a1a1a',
                            lineHeight: 1.2,
                          }}
                        >
                          {plan.perDayCents}
                        </span>
                        <span
                          style={{
                            fontSize: 10,
                            color: '#888',
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          na dan
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Original per-day price crossed out */}
                  <div style={{ fontSize: 11, color: '#bbb', textDecoration: 'line-through' }}>
                    {plan.originalPerDay}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 9. TERMS + DISCLAIMER ── */}
        <div style={{ padding: '16px 0' }}>
          {/* Checkbox */}
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
            <div
              onClick={() => setTermsAccepted(!termsAccepted)}
              style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0, marginTop: 2,
                background: termsAccepted ? '#5653FE' : 'white',
                border: termsAccepted ? 'none' : '2px solid #D0D0D0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {termsAccepted && (
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 15, color: '#100018', lineHeight: 1.5 }}>
              Strinjam se s{' '}
              <a href="/terms" style={{ color: '#1A4DB5', fontWeight: 700, textDecoration: 'underline' }}>Pogoji uporabe</a>,{' '}
              <a href="/privacy" style={{ color: '#1A4DB5', fontWeight: 700, textDecoration: 'underline' }}>Politiko zasebnosti</a>,{' '}
              <a href="/subscription" style={{ color: '#1A4DB5', fontWeight: 700, textDecoration: 'underline' }}>Pogoji naročnine</a> in{' '}
              <a href="/subscription" style={{ color: '#1A4DB5', fontWeight: 700, textDecoration: 'underline' }}>Politiko vračil</a>
            </span>
          </label>

          {/* Disclaimer box */}
          <div style={{
            background: '#F9F9F9',
            borderRadius: 12,
            padding: '20px',
            marginTop: 16,
            borderLeft: '3px solid #E0E0E0',
          }}>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7 }}>
              S klikom na Pridobi moj načrt se strinjaš z začetnim plačilom <strong style={{ color: '#100018' }}>€{selectedPlanData.discountedPrice.replace('€','')}</strong> (brez davka) za uvodni <strong style={{ color: '#100018' }}>{selectedPlanData.weeks}-tedenski</strong> program.<br /><br />Če naročnine ne prekličeš pred iztekom uvodnega obdobja, se naročnina samodejno podaljša po redni ceni <strong style={{ color: '#100018' }}>€{selectedPlanData.originalPrice.replace('€','')}</strong> (brez davka) vsake <strong style={{ color: '#100018' }}>{selectedPlanData.weeks} tedne</strong>, dokler je ne prekličeš.<br /><br />Naročnino lahko kadarkoli prekličeš v svojem profilu na spletni strani, v aplikaciji ali pa s sporočilom na mail: <a href="mailto:info@ainexo.com" style={{ color: '#100018', fontWeight: 700, textDecoration: 'underline' }}>info@ainexo.com</a>
            </p>
          </div>
        </div>

        {/* ── 10. CTA ── */}
        <div
          style={{
            background: '#DDDAF8',
            borderRadius: 20,
            padding: '20px 18px',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          {/* Most Popular Challenge pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 16,
              color: '#5653FE',
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: 20 }}>⏱</span>
            Najbolj priljubljen izziv
          </div>

          {/* Big CTA button */}
          <button
            onClick={() => setShowGift(true)}
            style={{
              width: '100%',
              background: '#5653FE',
              color: '#fff',
              border: 'none',
              borderRadius: 16,
              padding: '20px',
              fontSize: 20,
              fontWeight: 800,
              cursor: 'pointer',
              letterSpacing: 0.5,
            }}
          >
            PRIDOBI MOJ NAČRT  →
          </button>
      {showGift && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          background: '#D5EDCB',
          maxWidth: 430,
          margin: '0 auto',
        }}>
          {/* Content area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 24px 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: '#1A1A2E', lineHeight: 1.2, marginBottom: 16 }}>
              Imamo nekaj bolj vznemirljivega za vas!
            </h1>
            <p style={{ fontSize: 18, color: '#3A3A4A', lineHeight: 1.5 }}>
              Dodali smo nekaj posebnega v vaš izziv.<br />Tapnite da vidite kaj je
            </p>

            {/* Gift boxes image */}
            <div style={{ marginTop: 24, position: 'relative' }}>
              <img src="/images/gift-boxes.jpg" alt="Darila" style={{ width: '100%', height: 'auto', maxHeight: 400, objectFit: 'contain' }} />
            </div>
          </div>

          {/* Sticky green button at bottom */}
          <div style={{ position: 'sticky', bottom: 0, padding: '16px 24px 28px', background: 'linear-gradient(transparent, #D5EDCB 30%)' }}>
            <button
              onClick={() => { setShowGift(false); setShowCertificate(true); }}
              style={{
                width: '100%',
                background: '#4CAF50',
                color: '#1A1A2E',
                border: 'none',
                borderRadius: 16,
                padding: '20px',
                fontSize: 20,
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: 1,
              }}
            >
              ODPRI MOJE DARILO
            </button>
          </div>
        </div>
      )}

      {/* ── CERTIFICATE OVERLAY ── */}
      {showCertificate && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 430,
          margin: '0 auto',
          overflow: 'auto',
          background: 'radial-gradient(circle at center 40%, #E8F5E0 0%, #C8E6B8 40%, #B8D9A5 100%)',
        }}>
          {/* Sunburst rays background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `repeating-conic-gradient(from 0deg, rgba(255,255,255,0.15) 0deg 10deg, transparent 10deg 20deg)`,
            backgroundPosition: 'center 35%',
            backgroundSize: '100% 100%',
            pointerEvents: 'none',
          }} />

          {/* X close button */}
          <div style={{ padding: '16px 20px', position: 'relative', zIndex: 2 }}>
            <button
              onClick={() => setShowCertificate(false)}
              style={{ fontSize: 28, color: '#3A3A4A', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 300 }}
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#5653FE', lineHeight: 1.2, marginBottom: 8 }}>
              Boom! Profesionalni certifikat odklenjen!
            </h1>
            <p style={{ fontSize: 16, color: '#3A3A4A', lineHeight: 1.5, marginBottom: 16 }}>
              Vaš 28-dnevni izziv zdaj vključuje uradni <strong style={{ fontStyle: 'italic' }}>AI certifikat</strong> ki ga lahko delite na LinkedIn ali življenjepisu
            </p>

            {/* Certificate card with blue border + bonus banner attached */}
            <div style={{
              width: '100%',
              maxWidth: 300,
              background: 'white',
              borderRadius: 16,
              border: '3px solid #5653FE',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(86,83,254,0.15)',
              marginBottom: 0,
            }}>
              {/* Certificate image */}
              <div style={{ padding: 10 }}>
                <img src="/images/certificate.jpg" alt="AI Certifikat" style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
              </div>
              {/* Red bonus banner - directly under certificate */}
              <div style={{
                background: '#EF4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: '10px 14px',
              }}>
                <span style={{
                  background: '#DC2626',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: 11,
                  padding: '5px 10px',
                  borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.3)',
                }}>BONUS VKLJUČEN</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: 'white' }}>BREZPLAČEN certifikat</span>
              </div>
            </div>
          </div>

          {/* Sticky Activate button */}
          <div style={{ position: 'sticky', bottom: 0, padding: '16px 24px 28px', background: 'linear-gradient(transparent, #C8E6B8 30%)', zIndex: 2 }}>
            <button
              onClick={() => { setShowCertificate(false); setSelectedPlanContext(selectedPlan); nextPage(); }}
              style={{
                width: '100%',
                background: '#4A8C5C',
                color: 'white',
                border: 'none',
                borderRadius: 16,
                padding: '20px',
                fontSize: 22,
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: 1,
              }}
            >
              AKTIVIRAJ ZDAJ
            </button>
          </div>
        </div>
      )}
        </div>

        {/* Viewer count */}
        <div
          style={{
            fontSize: 16,
            color: '#555',
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: '#5653FE', fontSize: 16 }}>((·))</span>
          <span><strong style={{ color: '#100018' }}>26 ljudi</strong> si prav zdaj ogleduje to ponudbo</span>
        </div>

        {/* Pay safe & secure + payment icons (from image) */}
        <div style={{ padding: '24px 16px 32px', textAlign: 'center' }}>
          {/* Zelena pilula */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#F0FFF4',
            border: '1px solid #D1FAE5',
            borderRadius: 12,
            padding: '12px 28px',
            marginBottom: 28,
          }}>
            <span style={{ color: '#22C55E', fontSize: 20, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: 20, fontWeight: 600, color: '#166534' }}>Plačajte varno</span>
          </div>

          {/* Payment icons */}
          <div style={{ margin: '0 auto', padding: '0 8px' }}>
            <img src="/images/payment-icons.jpg" alt="Payment methods" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        {/* ── 11. MONEY-BACK GUARANTEE ── */}
        <div
          style={{
            background: '#ECFCE5',
            borderRadius: 20,
            padding: '40px 28px 36px',
            marginBottom: 16,
            textAlign: 'center',
          }}
        >
          {/* Green badge/medal SVG */}
          <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
            <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ribbon tails */}
              <path d="M30 75 L20 115 L38 100 L50 118 L50 75" fill="#4ADE80" />
              <path d="M70 75 L80 115 L62 100 L50 118 L50 75" fill="#22C55E" />
              {/* Badge body - wavy circle */}
              <circle cx="50" cy="45" r="40" fill="#22C55E" />
              {/* Outer bumps */}
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => (
                <circle
                  key={angle}
                  cx={50 + 40 * Math.cos(angle * Math.PI / 180)}
                  cy={45 + 40 * Math.sin(angle * Math.PI / 180)}
                  r="8"
                  fill="#22C55E"
                />
              ))}
              {/* White inner circle */}
              <circle cx="50" cy="45" r="28" fill="none" stroke="white" strokeWidth="3" />
              {/* Checkmark */}
              <path d="M35 45 L45 55 L65 35" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#100018', marginBottom: 16 }}>
            Garancija vračila denarja
          </div>
          <div style={{ fontSize: 16, color: '#555', lineHeight: 1.7 }}>
            Smo tako prepričani v našo storitev, da smo pripravljeni ponuditi polno vračilo vašega začetnega nakupa. Veljajo dodatni pogoji.
          </div>
          <div style={{ fontSize: 16, color: '#555', marginTop: 16, fontWeight: 600 }}>
            Za podrobnosti preglejte našo celotno <a href="/subscription" style={{ color: '#100018', fontWeight: 700, textDecoration: 'underline' }}>politiko vračil tukaj</a>.
          </div>
        </div>

        {/* ── 12. FOOTER ── */}
        <div
          style={{
            textAlign: 'center',
            padding: '20px 0 32px',
            fontSize: 16,
            color: '#888',
          }}
        >
          ainexo d.o.o. Ljubljana, Slovenija
        </div>

      </div>

    </div>
  );
}
