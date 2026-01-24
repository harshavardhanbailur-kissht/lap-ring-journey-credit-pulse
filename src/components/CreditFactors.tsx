import type { CreditFactor } from '../data/mockData';

interface CreditFactorsProps {
  factors: CreditFactor[];
  onFactorClick?: (factor: CreditFactor) => void;
  showHeader?: boolean;
}

const statusColors = {
  excellent: 'text-green-600',
  good: 'text-green-500',
  average: 'text-amber-500',
  poor: 'text-red-500',
};

const statusBgColors = {
  excellent: 'bg-green-50',
  good: 'bg-green-50',
  average: 'bg-amber-50',
  poor: 'bg-red-50',
};

const impactLabels = {
  high: { text: 'High', color: 'text-red-600' },
  medium: { text: 'Medium', color: 'text-amber-600' },
  low: { text: 'Low', color: 'text-green-600' },
};

const factorIcons: Record<string, string> = {
  'On-time payments': '📊',
  'Credit utilization': '💳',
  'Credit age': '📅',
  'New credit accounts': '🆕',
  'Credit mix': '🔀',
};

export default function CreditFactors({
  factors,
  onFactorClick,
  showHeader = true,
}: CreditFactorsProps) {
  return (
    <div className="bg-white rounded-xl p-4">
      {showHeader && (
        <div className="mb-4">
          <h3 className="font-semibold text-[var(--color-text-primary)]">Credit factors</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            See what's impacting your score
          </p>
        </div>
      )}

      <div className="space-y-0">
        {factors.map((factor, index) => (
          <button
            key={factor.id}
            onClick={() => onFactorClick?.(factor)}
            className={`w-full flex items-center justify-between py-4 text-left transition-colors hover:bg-gray-50 ${
              index < factors.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl">{factorIcons[factor.name] || '📈'}</span>
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">
                  {factor.name}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Impact - <span className={impactLabels[factor.impact].color}>{impactLabels[factor.impact].text}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-[var(--color-text-primary)]">
                {factor.value}
              </span>
              <span className={`text-sm font-medium ${statusColors[factor.status]}`}>
                {factor.status.charAt(0).toUpperCase() + factor.status.slice(1)}
              </span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Compact variant for use in smaller spaces
export function CreditFactorsCompact({ factors }: { factors: CreditFactor[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {factors.slice(0, 4).map((factor) => (
        <div
          key={factor.id}
          className={`p-3 rounded-lg ${statusBgColors[factor.status]}`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm">{factorIcons[factor.name] || '📈'}</span>
            <span className="text-xs font-medium text-[var(--color-text-secondary)] truncate">
              {factor.name}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="font-bold text-[var(--color-text-primary)]">
              {factor.value}
            </span>
            <span className={`text-xs font-medium ${statusColors[factor.status]}`}>
              {factor.status.charAt(0).toUpperCase() + factor.status.slice(1)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
