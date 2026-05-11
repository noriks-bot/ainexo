'use client';

import { useEffect, useState } from 'react';

interface Lead {
  email: string;
  consent: boolean;
  newsletter: boolean;
  timestamp: string;
}

interface Purchase {
  email: string;
  plan: string;
  amount: string;
  method: string;
  cardLast4?: string;
  timestamp: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/leads').then(r => r.json()),
      fetch('/api/purchases').then(r => r.json()),
    ]).then(([leadsData, purchasesData]) => {
      setLeads(leadsData.leads || []);
      setTotal(leadsData.total || 0);
      setPurchases(purchasesData.purchases || []);
      setPurchaseTotal(purchasesData.total || 0);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ padding: 40, fontFamily: 'sans-serif' }}>Nalagam...</div>;

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>📧 Email Leads</h1>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 32 }}>
        Skupaj: <strong style={{ color: '#5653FE' }}>{total}</strong> emailov
      </p>

      {leads.length === 0 ? (
        <p style={{ color: '#999' }}>Še ni emailov.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#666' }}>#</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#666' }}>Email</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: '#666' }}>Consent</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: '#666' }}>Newsletter</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#666' }}>Datum</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '10px 8px', color: '#999' }}>{i + 1}</td>
                <td style={{ padding: '10px 8px', fontWeight: 500 }}>{lead.email}</td>
                <td style={{ padding: '10px 8px', textAlign: 'center' }}>{lead.consent ? '✅' : '❌'}</td>
                <td style={{ padding: '10px 8px', textAlign: 'center' }}>{lead.newsletter ? '✅' : '❌'}</td>
                <td style={{ padding: '10px 8px', color: '#999', fontSize: 13 }}>
                  {new Date(lead.timestamp).toLocaleString('sl-SI')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, marginTop: 48 }}>💳 Nakupi</h1>
      <p style={{ fontSize: 18, color: '#666', marginBottom: 32 }}>
        Skupaj: <strong style={{ color: '#5653FE' }}>{purchaseTotal}</strong> nakupov
      </p>

      {purchases.length === 0 ? (
        <p style={{ color: '#999' }}>Še ni nakupov.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#666' }}>#</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#666' }}>Email</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#666' }}>Načrt</th>
              <th style={{ textAlign: 'right', padding: '12px 8px', color: '#666' }}>Znesek</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: '#666' }}>Metoda</th>
              <th style={{ textAlign: 'center', padding: '12px 8px', color: '#666' }}>Kartica</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', color: '#666' }}>Datum</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((p, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '10px 8px', color: '#999' }}>{i + 1}</td>
                <td style={{ padding: '10px 8px', fontWeight: 500 }}>{p.email}</td>
                <td style={{ padding: '10px 8px' }}>{p.plan}</td>
                <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 600 }}>€{p.amount}</td>
                <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                  {p.method === 'paypal' ? '🅿️ PayPal' : '💳 Kartica'}
                </td>
                <td style={{ padding: '10px 8px', textAlign: 'center', color: '#999' }}>
                  {p.cardLast4 ? `****${p.cardLast4}` : '—'}
                </td>
                <td style={{ padding: '10px 8px', color: '#999', fontSize: 13 }}>
                  {new Date(p.timestamp).toLocaleString('sl-SI')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
