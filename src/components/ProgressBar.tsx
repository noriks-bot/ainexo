'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = (current / total) * 100;
  return (
    <div style={{
      width: '100%',
      height: 4,
      background: '#F0F0F0',
      borderRadius: 2,
    }}>
      <div style={{
        width: `${pct}%`,
        height: '100%',
        background: '#5653FE',
        borderRadius: 2,
        transition: 'width 0.3s ease',
      }} />
    </div>
  );
}
