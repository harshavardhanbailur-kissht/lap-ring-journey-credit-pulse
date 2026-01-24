import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  gradient?: string;
}

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border border-gray-200',
  gradient: '', // Handled separately
};

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  gradient,
  className = '',
  ...props
}: CardProps) {
  const gradientStyle = variant === 'gradient' && gradient
    ? `bg-gradient-to-br ${gradient} text-white`
    : variantStyles[variant];

  return (
    <div
      className={`
        rounded-xl
        ${gradientStyle}
        ${paddingStyles[padding]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

// Alert card variants
interface AlertCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error';
  icon?: ReactNode;
}

const alertStyles = {
  info: 'bg-blue-50 border-blue-200',
  success: 'bg-green-50 border-green-200',
  warning: 'bg-amber-50 border-amber-200',
  error: 'bg-red-50 border-red-200',
};

const alertTextStyles = {
  info: 'text-blue-800',
  success: 'text-green-800',
  warning: 'text-amber-800',
  error: 'text-red-800',
};

const defaultIcons = {
  info: '💡',
  success: '✅',
  warning: '⚠️',
  error: '❌',
};

export function AlertCard({
  children,
  type = 'info',
  icon,
  className = '',
  ...props
}: AlertCardProps) {
  return (
    <div
      className={`
        rounded-xl p-4 border
        ${alertStyles[type]}
        ${className}
      `}
      {...props}
    >
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0">{icon || defaultIcons[type]}</span>
        <div className={alertTextStyles[type]}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Stats card for displaying metrics
interface StatsCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  color?: 'blue' | 'green' | 'amber' | 'red' | 'gray';
}

const statsColorStyles = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  amber: 'bg-amber-50 text-amber-600',
  red: 'bg-red-50 text-red-600',
  gray: 'bg-gray-50 text-gray-600',
};

export function StatsCard({
  value,
  label,
  icon,
  color = 'blue',
}: StatsCardProps) {
  return (
    <div className={`p-3 rounded-lg text-center ${statsColorStyles[color]}`}>
      {icon && <div className="text-xl mb-1">{icon}</div>}
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-[var(--color-text-muted)]">{label}</p>
    </div>
  );
}
