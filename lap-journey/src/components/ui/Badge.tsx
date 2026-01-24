import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md';
  icon?: ReactNode;
}

const variantStyles = {
  default: 'bg-gray-100 text-gray-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-amber-100 text-amber-700',
  error: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  outline: 'border border-gray-300 text-gray-700 bg-transparent',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  icon,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        font-medium rounded-full
        ${variantStyles[variant]}
        ${sizeStyles[size]}
      `}
    >
      {icon}
      {children}
    </span>
  );
}

// Impact badge for credit factors
interface ImpactBadgeProps {
  impact: 'high' | 'medium' | 'low';
}

const impactStyles = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-green-100 text-green-700',
};

export function ImpactBadge({ impact }: ImpactBadgeProps) {
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${impactStyles[impact]}`}>
      {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
    </span>
  );
}

// Score change badge
interface ScoreChangeBadgeProps {
  change: number;
  showSign?: boolean;
}

export function ScoreChangeBadge({ change, showSign = true }: ScoreChangeBadgeProps) {
  const isPositive = change >= 0;
  const sign = showSign ? (isPositive ? '+' : '') : '';

  return (
    <span
      className={`
        px-2 py-0.5 text-sm font-bold rounded-full
        ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
      `}
    >
      {sign}{change} pts
    </span>
  );
}

// Status badge for scores
interface StatusBadgeProps {
  status: 'excellent' | 'good' | 'average' | 'poor' | 'needs_improvement';
}

const statusStyles = {
  excellent: 'bg-green-100 text-green-700',
  good: 'bg-green-50 text-green-600',
  average: 'bg-amber-100 text-amber-700',
  poor: 'bg-red-100 text-red-700',
  needs_improvement: 'bg-red-100 text-red-700',
};

const statusLabels = {
  excellent: 'Excellent',
  good: 'Good',
  average: 'Average',
  poor: 'Poor',
  needs_improvement: 'Needs Improvement',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}
