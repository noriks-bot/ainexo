'use client';

import React, { useState } from 'react';
import { useFunnel } from '@/context/FunnelContext';

const PLANS: Record<string, { label: string; originalPrice: string; discountedPrice: string; weeks: number }> = {
  week1: { label: '1-TEDENSKI NAČRT', originalPrice: '€13.86', discountedPrice: '€6.93', weeks: 1 },
  week4: { label: '4-TEDENSKI NAČRT', originalPrice: '€39.99', discountedPrice: '€19.99', weeks: 4 },
  week12: { label: '12-TEDENSKI NAČRT', originalPrice: '€79.99', discountedPrice: '€39.99', weeks: 12 },
};

export default function CheckoutPage() {
  const { selectedPlan, email, prevPage } = useFunnel();
  const plan = PLANS[selectedPlan] || PLANS['week4'];

  const discountedAmount = parseFloat(plan.discountedPrice.replace('€', ''));
  const vatAmount = discountedAmount * 0.22;
  const totalAmount = discountedAmount * 1.22;

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handlePayPal() {
    setLoading(true);
    try {
      await fetch('/api/purchases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          plan: selectedPlan,
          amount: totalAmount.toFixed(2),
          method: 'paypal',
        }),
      });
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  async function handleCard() {
    setLoading(true);
    try {
      const cardLast4 = cardNumber.replace(/\s/g, '').slice(-4);
      await fetch('/api/purchases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          plan: selectedPlan,
          amount: totalAmount.toFixed(2),
          method: 'card',
          cardLast4,
        }),
      });
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 64, marginBottom: 24 }}>😞</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#100018', marginBottom: 12 }}>Nakup trenutno ni mogoč</h1>
        <p style={{ fontSize: 17, color: '#555', lineHeight: 1.6 }}>
          Paket je razprodan.<br /><br />
          Kontaktiramo vas takoj ko bo paket spet na voljo.
        </p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', background: '#fff' }}>

      {/* ── GREEN TOP SECTION ── */}
      <div style={{ background: '#E8F5E0', padding: '24px 24px 32px' }}>
        <div style={{ textAlign: 'right', marginBottom: 16 }}>
          <button
            onClick={() => prevPage()}
            style={{ fontSize: 28, color: '#555', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#100018', lineHeight: 1.3, textAlign: 'center', maxWidth: 400, margin: '0 auto 24px' }}>
          Pridružite se več kot{' '}
          <span style={{ color: '#5653FE' }}>100.000 uporabnikom</span>{' '}
          za dosego ciljev
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '16px 20px',
          border: '1.5px solid #B8D9A5',
          borderRadius: 16,
          background: 'rgba(255,255,255,0.5)',
          maxWidth: 440,
          margin: '0 auto',
        }}>
          <span style={{ fontSize: 40 }}>🎁</span>
          <div>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#100018', margin: 0 }}>AI Certifikat vključen</p>
            <p style={{ fontSize: 14, color: '#666', margin: '4px 0 0' }}>Delite na LinkedIn • Dodajte v življenjepis</p>
          </div>
        </div>
      </div>

      {/* ── WHITE PAYMENT SECTION ── */}
      <div style={{ padding: '32px 24px', maxWidth: 480, margin: '0 auto' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#100018', textAlign: 'center', marginBottom: 24 }}>
          Varen nakup
        </h2>

        {/* Line items */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontSize: 16, color: '#333' }}>28-dnevni AI izziv</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#333' }}>{plan.discountedPrice}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ fontSize: 16, color: '#333' }}>AI Certifikat</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#22C55E' }}>BREZPLAČEN</span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#E5E5E5', marginBottom: 20 }} />

        {/* Total with VAT */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 20, fontWeight: 800, color: '#100018' }}>Skupaj</span>
          <span style={{ fontSize: 20, fontWeight: 800, color: '#100018' }}>€{totalAmount.toFixed(2)}</span>
        </div>
        <div style={{ textAlign: 'right', marginBottom: 32 }}>
          <span style={{ fontSize: 13, color: '#888' }}>
            {plan.discountedPrice} + €{vatAmount.toFixed(2)} DDV (22%)
          </span>
        </div>

        {/* Google Pay button */}
        <button
          onClick={async () => {
            setLoading(true);
            await fetch('/api/purchases', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, plan: selectedPlan, amount: plan.discountedPrice, method: 'googlepay', cardLast4: '' }) });
            setDone(true);
            setLoading(false);
          }}
          disabled={loading}
          style={{ width: '100%', background: '#000', border: 'none', borderRadius: 12, padding: '16px', fontSize: 18, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', marginBottom: 12, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: loading ? 0.7 : 1 }}
        >
          Kupi zdaj z <span style={{ fontWeight: 800 }}>G</span> Pay
        </button>

        {/* Apple Pay button */}
        <button
          onClick={async () => {
            setLoading(true);
            await fetch('/api/purchases', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, plan: selectedPlan, amount: plan.discountedPrice, method: 'applepay', cardLast4: '' }) });
            setDone(true);
            setLoading(false);
          }}
          disabled={loading}
          style={{ width: '100%', background: '#000', border: 'none', borderRadius: 12, padding: '16px', fontSize: 18, fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer', marginBottom: 28, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: loading ? 0.7 : 1 }}
        >
          Kupi zdaj z  Pay
        </button>

        {/* PayPal button */}
        <button
          onClick={handlePayPal}
          disabled={loading}
          style={{
            width: '100%',
            background: '#FFC439',
            border: 'none',
            borderRadius: 12,
            padding: '16px',
            fontSize: 20,
            fontWeight: 800,
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: 28,
            color: '#003087',
            opacity: loading ? 0.7 : 1,
          }}
        >
          <span style={{ fontStyle: 'italic' }}>PayPal</span>{' '}
          <span style={{ fontWeight: 400, color: '#333' }}>Kupi zdaj</span>
        </button>

        {/* Card inputs */}
        <div style={{ border: '1px solid #E0E0E0', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
          <div style={{ padding: '16px', borderBottom: '1px solid #E0E0E0' }}>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="XXXX XXXX XXXX XXXX"
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: 16, color: '#333', background: 'transparent' }}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, padding: '16px', borderRight: '1px solid #E0E0E0' }}>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: 16, color: '#333', background: 'transparent' }}
              />
            </div>
            <div style={{ flex: 1, padding: '16px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="CVV"
                style={{ width: '100%', border: 'none', outline: 'none', fontSize: 16, color: '#333', background: 'transparent' }}
              />
              <span style={{ color: '#999', fontSize: 18 }}>ℹ</span>
            </div>
          </div>
        </div>

        {/* Confirm payment button */}
        <button
          onClick={handleCard}
          disabled={loading}
          style={{
            width: '100%',
            background: '#5653FE',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            padding: '18px',
            fontSize: 18,
            fontWeight: 800,
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            opacity: loading ? 0.7 : 1,
          }}
        >
          🔒 POTRDI PLAČILO
        </button>

        {/* Disclaimer */}
        <div style={{ background: '#F5F5F7', borderRadius: 12, padding: '20px' }}>
          <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
            Naročnina: po uvodni ceni <strong style={{ color: '#100018' }}>{plan.discountedPrice}</strong> se vsake{' '}
            <strong style={{ color: '#100018' }}>{plan.weeks} tedne</strong> samodejno obnovi po ceni{' '}
            <strong style={{ color: '#100018' }}>{plan.originalPrice}</strong>, dokler ne prekličete.{' '}
            Preklic kadarkoli v nastavitvah.{' '}
            <a href="#" style={{ color: '#100018', textDecoration: 'underline', fontWeight: 600 }}>Pogoji naročnine</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
