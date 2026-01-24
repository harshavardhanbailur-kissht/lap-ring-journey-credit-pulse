import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles = {
  primary: 'bg-[var(--color-ring-blue)] text-white hover:bg-[var(--color-ring-dark-blue)] active:bg-[var(--color-ring-navy)]',
  secondary: 'bg-gray-100 text-[var(--color-text-primary)] hover:bg-gray-200 active:bg-gray-300',
  outline: 'border-2 border-[var(--color-ring-blue)] text-[var(--color-ring-blue)] bg-transparent hover:bg-blue-50 active:bg-blue-100',
  ghost: 'text-[var(--color-ring-blue)] bg-transparent hover:bg-gray-50 active:bg-gray-100',
  danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
};

const sizeStyles = {
  sm: 'px-3 py-2 text-sm min-h-10',
  md: 'px-4 py-3 text-base min-h-12',
  lg: 'px-6 py-4 text-lg min-h-14',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-xl
        transition-colors duration-150
        touch-target
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  );
}

// Gradient button variant for special CTAs
export function GradientButton({
  children,
  gradient = 'from-amber-500 to-green-500',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps & { gradient?: string }) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-4 text-lg font-semibold
        text-white rounded-xl
        bg-gradient-to-r ${gradient}
        hover:opacity-90 active:opacity-80
        transition-opacity duration-150
        min-h-14 touch-target
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
