import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { internalTopUpOffer } from '../../data/mockData';

export default function InternalTopUp() {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const offer = internalTopUpOffer;

  const handleShowInterest = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
        {/* Header */}
        <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="icon-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="font-semibold">Request Received</h1>
            <div className="w-6" />
          </div>
        </header>

        <div className="p-4 flex items-center justify-center min-h-[calc(100vh-64px)]">
          <div className="bg-white rounded-xl p-6 text-center max-w-md w-full">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Request Received!</h3>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Your interest in the Internal Top-up offer has been logged. Our team will contact you
              within 24 hours to proceed with your application.
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              Application Reference: TOPUP-2025-{Math.floor(Math.random() * 10000)}
            </p>
            <button
              onClick={() => navigate('/journey1')}
              className="w-full bg-[var(--color-ring-blue)] text-white py-3 rounded-xl font-semibold"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Internal Top-up Offer</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Eligibility Success Card */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🎉</span>
          </div>
          <h2 className="text-xl font-bold mb-2">You're Eligible!</h2>
          <p className="opacity-90">You qualify for LAP Ring BT Top-up</p>
        </div>

        {/* Notification Style Card */}
        <div className="bg-gradient-to-br from-[var(--color-ring-blue)] to-[var(--color-ring-dark-blue)] text-white rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎁</span>
            </div>
            <div>
              <p className="text-sm opacity-80">Special Offer</p>
              <p className="font-bold text-lg">Internal Top-up</p>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-2">
            Based on your existing LAP loan details and credit profile, you're eligible for additional funds with better rates.
          </p>
          <p className="text-sm opacity-90">
            Transfer your LAP to LAP Ring and get up to ₹10 Lakhs more!
          </p>
        </div>

        {/* Offer Details */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Your Offer Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Additional Amount</span>
              <span className="font-bold text-green-600">Up to ₹{(offer.maxAdditionalAmount / 100000).toFixed(0)} Lakhs</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Interest Rate</span>
              <span className="font-semibold text-green-600">{offer.interestRate}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Processing Fee</span>
              <span className="font-semibold text-green-600">{offer.processingFee}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[var(--color-text-secondary)]">Validity</span>
              <span className="font-semibold">{offer.validity}</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Why Internal Top-up?</h3>
          <ul className="space-y-2">
            {offer.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <button
            onClick={handleShowInterest}
            className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
          >
            Show Interest
          </button>
          <button
            onClick={() => navigate('/journey1')}
            className="w-full py-3 text-[var(--color-text-secondary)]"
          >
            Maybe Later
          </button>
        </div>

        {/* End of Journey */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-[var(--color-text-muted)]">
            End of Journey 1 (Good Score Flow)
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-2 text-[var(--color-ring-blue)] font-medium"
          >
            ← Back to Journey Selector
          </button>
        </div>
      </div>
    </div>
  );
}
