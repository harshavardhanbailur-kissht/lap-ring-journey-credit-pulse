import { productConfigs, type ProductType } from '../../data/productConfigs';
import Button from './Button';

interface GuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductType;
  onProceed: () => void;
}

export default function GuidelinesModal({ isOpen, onClose, product, onProceed }: GuidelinesModalProps) {
  if (!isOpen) return null;

  const config = productConfigs[product];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${config.bgColor}`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{config.icon}</span>
            <h2 className={`font-bold text-lg ${config.textColor}`}>{config.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
            Before You Apply
          </h3>

          {/* Guidelines */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-3">
              Guidelines
            </h4>
            <ol className="space-y-2">
              {config.guidelines.map((guideline, index) => (
                <li key={index} className="flex gap-3 text-sm text-[var(--color-text-primary)]">
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full ${config.bgColor} ${config.textColor} flex items-center justify-center text-xs font-bold`}>
                    {index + 1}
                  </span>
                  <span>{guideline}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Eligibility */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-3">
              Eligibility
            </h4>
            <ul className="space-y-2">
              {config.eligibility.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm text-[var(--color-text-primary)]">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warnings */}
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="text-sm font-semibold text-red-700 flex items-center gap-2 mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Warnings
            </h4>
            <ul className="space-y-1">
              {config.warnings.map((warning, index) => (
                <li key={index} className="flex gap-2 text-sm text-red-700">
                  <span className="text-red-400">•</span>
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t bg-gray-50 flex flex-col sm:flex-row gap-3">
          <Button
            variant="ghost"
            size="md"
            onClick={onClose}
            className="sm:flex-1"
          >
            Cancel
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={() => window.open('https://help.ring.co.in', '_blank')}
            className="sm:flex-1"
          >
            Learn More
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={onProceed}
            className="sm:flex-1"
          >
            I Understand, Proceed
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
