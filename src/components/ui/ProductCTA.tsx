import { useState } from 'react';
import GuidelinesModal from './GuidelinesModal';

export type ProductType = 'ring-loan' | 'connexo-card';
export type CTAVariant = 'banner' | 'card' | 'inline';

interface ProductCTAProps {
  product: ProductType;
  variant?: CTAVariant;
  className?: string;
}

export const productConfigs = {
  'ring-loan': {
    title: 'Apply for Loan on Ring',
    description: 'Get instant personal loans up to ₹5 Lakhs',
    icon: '💰',
    bgColor: 'bg-blue-50',
    borderColor: 'border-[var(--color-ring-blue)]',
    textColor: 'text-[var(--color-ring-blue)]',
    guidelines: [
      'Borrow only what you can repay',
      'EMIs should not exceed 30% of your monthly income',
      'Missing payments will negatively impact your credit score',
      'Consider your existing debt obligations before applying'
    ],
    eligibility: [
      'Age: 21-58 years',
      'Minimum income: ₹15,000/month',
      'Valid ID and address proof required',
      'Bank account with 6+ months history'
    ],
    warnings: [
      'Late payments attract penalties and hurt your credit score',
      'Defaulting may lead to legal action',
      'Interest rates vary based on your credit profile'
    ]
  },
  'connexo-card': {
    title: 'Apply for Credit Card on Connexo',
    description: 'Build credit with a secured credit card',
    icon: '💳',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
    guidelines: [
      'Keep credit utilization below 30%',
      'Pay full balance before due date to avoid interest',
      'Credit cards are for convenience, not borrowing',
      'Set up auto-pay to never miss a payment'
    ],
    eligibility: [
      'Age: 18+ years',
      'Valid PAN and Aadhaar required',
      'Fixed deposit may be required for secured cards',
      'No recent credit rejections'
    ],
    warnings: [
      'High utilization hurts your credit score',
      'Minimum payments lead to debt trap',
      'Annual fees may apply after first year'
    ]
  }
};

export default function ProductCTA({ product, variant = 'card', className = '' }: ProductCTAProps) {
  const [showModal, setShowModal] = useState(false);
  const config = productConfigs[product];

  const handleClick = () => {
    setShowModal(true);
  };

  const handleProceed = () => {
    // In a real app, this would navigate to the application flow
    setShowModal(false);
    alert(`Redirecting to ${product === 'ring-loan' ? 'Ring' : 'Connexo'} application...`);
  };

  if (variant === 'banner') {
    return (
      <>
        <button
          onClick={handleClick}
          className={`w-full flex items-center justify-between p-4 rounded-xl border-2 ${config.bgColor} ${config.borderColor} transition-all hover:shadow-md ${className}`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{config.icon}</span>
            <div className="text-left">
              <p className={`font-semibold ${config.textColor}`}>{config.title}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">{config.description}</p>
            </div>
          </div>
          <svg className={`w-5 h-5 ${config.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <GuidelinesModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={product}
          onProceed={handleProceed}
        />
      </>
    );
  }

  if (variant === 'inline') {
    return (
      <>
        <button
          onClick={handleClick}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${config.bgColor} ${config.textColor} font-medium transition-all hover:opacity-80 ${className}`}
        >
          <span>{config.icon}</span>
          <span>{config.title}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <GuidelinesModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={product}
          onProceed={handleProceed}
        />
      </>
    );
  }

  // Default: card variant
  return (
    <>
      <button
        onClick={handleClick}
        className={`w-full p-4 rounded-xl border-2 ${config.bgColor} ${config.borderColor} transition-all hover:shadow-lg ${className}`}
      >
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl">{config.icon}</span>
          <div className="text-left flex-1">
            <h3 className={`font-bold text-lg ${config.textColor}`}>{config.title}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">{config.description}</p>
          </div>
        </div>
        <div className={`flex items-center justify-center gap-2 py-2 rounded-lg bg-white border ${config.borderColor}`}>
          <span className={`font-semibold ${config.textColor}`}>View Guidelines & Apply</span>
          <svg className={`w-4 h-4 ${config.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
      <GuidelinesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        product={product}
        onProceed={handleProceed}
      />
    </>
  );
}

// Dual CTA component for showing both products side by side
export function DualProductCTA({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">
        Build your credit with these products:
      </p>
      <ProductCTA product="ring-loan" variant="banner" />
      <ProductCTA product="connexo-card" variant="banner" />
    </div>
  );
}
