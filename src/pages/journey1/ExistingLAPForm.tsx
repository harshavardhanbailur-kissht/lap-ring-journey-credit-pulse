import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { lapLenderOptions } from '../../data/mockData';
import type { ExistingLAPDetails } from '../../data/mockData';

export default function ExistingLAPForm() {
  const navigate = useNavigate();
  const [hasExistingLAP, setHasExistingLAP] = useState(false);
  const [formData, setFormData] = useState<ExistingLAPDetails>({
    lender: '',
    loanAmount: 0,
    outstandingBalance: 0,
    currentEMI: 0,
    remainingTenureMonths: 0,
    interestRate: 0
  });

  const isFormValid = hasExistingLAP &&
    formData.lender !== '' &&
    formData.loanAmount > 0 &&
    formData.outstandingBalance > 0 &&
    formData.currentEMI > 0;

  const handleCheckEligibility = () => {
    // Navigate to Internal Top-up offer page
    navigate('/journey1/internal-topup');
  };

  const formatCurrency = (value: number) => {
    if (value === 0) return '';
    return value.toLocaleString('en-IN');
  };

  const parseCurrency = (value: string): number => {
    const cleaned = value.replace(/[^0-9]/g, '');
    return cleaned ? parseInt(cleaned, 10) : 0;
  };

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      {/* Header */}
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Internal Top-up Eligibility</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-[var(--color-ring-blue)] to-[var(--color-ring-dark-blue)] text-white rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <p className="text-sm opacity-80">Check Your</p>
              <p className="font-bold text-lg">Internal Top-up Eligibility</p>
            </div>
          </div>
          <p className="text-sm opacity-90">
            If you have an existing LAP loan from another lender, you may be eligible for
            LAP Ring Internal Top-up with better rates and additional benefits.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-between bg-white rounded-xl p-4">
          <div>
            <p className="font-semibold text-[var(--color-text-primary)]">I have an existing LAP loan</p>
            <p className="text-sm text-[var(--color-text-muted)]">From another lender</p>
          </div>
          <button
            onClick={() => setHasExistingLAP(!hasExistingLAP)}
            className={`w-14 h-8 rounded-full transition-colors relative ${
              hasExistingLAP ? 'bg-[var(--color-ring-blue)]' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow absolute top-1 transition-transform ${
                hasExistingLAP ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Form Fields (shown when toggle is ON) */}
        {hasExistingLAP && (
          <div className="bg-white rounded-xl p-4 space-y-4">
            <h3 className="font-semibold text-[var(--color-text-primary)]">Enter Your Existing LAP Details</h3>

            {/* Lender Dropdown */}
            <div>
              <label className="text-sm text-[var(--color-text-secondary)] block mb-1">Current Lender</label>
              <select
                value={formData.lender}
                onChange={(e) => setFormData({...formData, lender: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-lg text-[var(--color-text-primary)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-ring-blue)]"
              >
                <option value="">Select lender...</option>
                {lapLenderOptions.map(lender => (
                  <option key={lender} value={lender}>{lender}</option>
                ))}
              </select>
            </div>

            {/* Original Loan Amount */}
            <div>
              <label className="text-sm text-[var(--color-text-secondary)] block mb-1">Original Loan Amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">₹</span>
                <input
                  type="text"
                  value={formatCurrency(formData.loanAmount)}
                  onChange={(e) => setFormData({...formData, loanAmount: parseCurrency(e.target.value)})}
                  placeholder="e.g., 25,00,000"
                  className="w-full p-3 pl-8 border border-gray-200 rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring-blue)]"
                />
              </div>
            </div>

            {/* Outstanding Balance */}
            <div>
              <label className="text-sm text-[var(--color-text-secondary)] block mb-1">Outstanding Balance</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">₹</span>
                <input
                  type="text"
                  value={formatCurrency(formData.outstandingBalance)}
                  onChange={(e) => setFormData({...formData, outstandingBalance: parseCurrency(e.target.value)})}
                  placeholder="e.g., 18,50,000"
                  className="w-full p-3 pl-8 border border-gray-200 rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring-blue)]"
                />
              </div>
            </div>

            {/* Current EMI */}
            <div>
              <label className="text-sm text-[var(--color-text-secondary)] block mb-1">Current EMI</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">₹</span>
                <input
                  type="text"
                  value={formatCurrency(formData.currentEMI)}
                  onChange={(e) => setFormData({...formData, currentEMI: parseCurrency(e.target.value)})}
                  placeholder="e.g., 28,500"
                  className="w-full p-3 pl-8 border border-gray-200 rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring-blue)]"
                />
              </div>
            </div>

            {/* Remaining Tenure */}
            <div>
              <label className="text-sm text-[var(--color-text-secondary)] block mb-1">Remaining Tenure (months)</label>
              <input
                type="number"
                value={formData.remainingTenureMonths || ''}
                onChange={(e) => setFormData({...formData, remainingTenureMonths: parseInt(e.target.value) || 0})}
                placeholder="e.g., 120"
                className="w-full p-3 border border-gray-200 rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring-blue)]"
              />
            </div>

            {/* Current Interest Rate */}
            <div>
              <label className="text-sm text-[var(--color-text-secondary)] block mb-1">Current Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={formData.interestRate || ''}
                onChange={(e) => setFormData({...formData, interestRate: parseFloat(e.target.value) || 0})}
                placeholder="e.g., 11.5"
                className="w-full p-3 border border-gray-200 rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-ring-blue)]"
              />
            </div>
          </div>
        )}

        {/* Benefits Info (shown when toggle is OFF) */}
        {!hasExistingLAP && (
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Why Internal Top-up?</h3>
            <ul className="space-y-2">
              {[
                'Transfer your existing LAP to LAP Ring',
                'Get up to ₹10 Lakhs additional funding',
                'Lower interest rates (starting 9.5%)',
                'Processing fee waived',
                'Single consolidated EMI',
                'Quick disbursement in 24 hours'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={handleCheckEligibility}
          disabled={!isFormValid}
          className={`w-full py-4 rounded-xl font-semibold transition-colors ${
            isFormValid
              ? 'bg-[var(--color-ring-blue)] text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Check Eligibility
        </button>

        {/* Back Link */}
        <button
          onClick={() => navigate('/journey1')}
          className="w-full py-3 text-[var(--color-ring-blue)] font-medium"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
