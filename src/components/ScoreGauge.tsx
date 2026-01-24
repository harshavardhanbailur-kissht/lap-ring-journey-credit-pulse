import { useEffect, useState, useId } from 'react';

interface ScoreGaugeProps {
  score: number;
  minScore?: number;
  maxScore?: number;
  status: 'excellent' | 'good' | 'average' | 'needs_improvement';
  lastUpdated?: string;
  showEquifax?: boolean;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const statusLabels = {
  excellent: 'Excellent',
  good: 'Good',
  average: 'Average',
  needs_improvement: 'Needs Improvement',
};

const statusColors = {
  excellent: '#22C55E',
  good: '#84CC16',
  average: '#F59E0B',
  needs_improvement: '#EF4444',
};

export default function ScoreGauge({
  score,
  minScore = 300,
  maxScore = 850,
  status,
  lastUpdated,
  showEquifax = true,
  animated = true,
  size = 'md',
}: ScoreGaugeProps) {
  const [displayScore, setDisplayScore] = useState(minScore);
  const [progress, setProgress] = useState(0);

  // Calculate the percentage for the gauge
  const targetProgress = ((score - minScore) / (maxScore - minScore)) * 100;

  useEffect(() => {
    if (!animated) return;

    // Animate score counting up
    const duration = 1500;
    const startTime = Date.now();
    const startScore = minScore;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setDisplayScore(Math.round(startScore + (score - startScore) * easeOut));
      setProgress(targetProgress * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [score, minScore, targetProgress, animated]);

  // SVG dimensions based on size
  const dimensions = {
    sm: { width: 160, height: 90, strokeWidth: 10, fontSize: 28 },
    md: { width: 200, height: 110, strokeWidth: 12, fontSize: 36 },
    lg: { width: 280, height: 150, strokeWidth: 16, fontSize: 48 },
  };

  const { width, height, strokeWidth, fontSize } = dimensions[size];
  const radius = (width - strokeWidth) / 2;
  const circumference = Math.PI * radius;

  // Calculate stroke dash offset for progress
  const currentProgress = animated ? progress : targetProgress;
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

  // Create gradient stops for the gauge
  const id = useId();
  const gradientId = `scoreGradient-${id.replace(/:/g, '')}`;

  return (
    <div className="flex flex-col items-center">
      {/* SVG Gauge */}
      <div className="relative" style={{ width, height: height + 20 }}>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="25%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="75%" stopColor="#84CC16" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>

          {/* Background arc */}
          <path
            d={`M ${strokeWidth / 2} ${height} A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${height}`}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Progress arc */}
          <path
            d={`M ${strokeWidth / 2} ${height} A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${height}`}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: animated ? 'stroke-dashoffset 0.1s ease-out' : 'none' }}
          />

          {/* Score range labels */}
          <text x={strokeWidth / 2} y={height + 16} fontSize="10" fill="#94A3B8" textAnchor="start">
            {minScore}
          </text>
          <text x={width - strokeWidth / 2} y={height + 16} fontSize="10" fill="#94A3B8" textAnchor="end">
            {maxScore}
          </text>
        </svg>

        {/* Score number */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{ bottom: 24 }}
        >
          <span
            className="font-bold text-[var(--color-text-primary)]"
            style={{ fontSize }}
          >
            {animated ? displayScore : score}
          </span>
        </div>
      </div>

      {/* Status label */}
      <div className="flex items-center gap-1 mt-2">
        <span
          className="font-semibold"
          style={{ color: statusColors[status] }}
        >
          {statusLabels[status]}
        </span>
        <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Last updated */}
      {lastUpdated && (
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          Last updated on {lastUpdated}
        </p>
      )}

      {/* Equifax branding */}
      {showEquifax && (
        <p className="text-xs text-[var(--color-text-muted)] mt-1">
          Powered by EQUIFAX
        </p>
      )}
    </div>
  );
}
