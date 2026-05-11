'use client';

export default function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header with X */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '16px 20px',
          borderBottom: '1px solid #ECECEC',
        }}
      >
        <button
          onClick={onClose}
          style={{
            fontSize: 28,
            color: '#333',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 300,
          }}
        >
          ✕
        </button>
      </div>

      {/* Menu items */}
      <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <a
          href="/terms"
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#100018',
            textDecoration: 'none',
          }}
        >
          Pogoji uporabe
        </a>
        <a
          href="/privacy"
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#100018',
            textDecoration: 'none',
          }}
        >
          Politika zasebnosti
        </a>
        <a
          href="/subscription"
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: '#100018',
            textDecoration: 'none',
          }}
        >
          Pogoji naročnine
        </a>

        {/* Divider */}
        <div style={{ height: 1, background: '#ECECEC' }} />

        <a
          href="mailto:info@ainexo.com"
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: '#5653FE',
            textDecoration: 'none',
          }}
        >
          📧 info@ainexo.com
        </a>
      </div>
    </div>
  );
}
