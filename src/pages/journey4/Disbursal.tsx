import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { disbursalDetails } from '../../data/mockData';

export default function Disbursal() {
  const navigate = useNavigate();
  const details = disbursalDetails;

  const [simulatedMonths, setSimulatedMonths] = useState(0);
  const isTopUpEligible = simulatedMonths >= 6;

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
          <h1 className="font-semibold">Disbursal Complete</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Congratulations Card */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🎉</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Congratulations!</h2>
          <p className="opacity-90">Your LAP loan has been successfully disbursed</p>
        </div>

        {/* Disbursal Details */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Disbursal Details</h3>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Amount Disbursed</span>
              <span className="font-bold text-green-600">₹{(details.amount / 100000).toFixed(0)} Lakhs</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Bank Account</span>
              <span className="font-semibold">{details.bankAccount} - **{details.accountLastFour}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Transaction ID</span>
              <span className="font-semibold text-xs">{details.transactionId}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Disbursal Date</span>
              <span className="font-semibold">{details.disbursalDate}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">First EMI Date</span>
              <span className="font-semibold">{details.firstEMIDate}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[var(--color-text-secondary)]">Monthly EMI</span>
              <span className="font-semibold">₹{details.emiAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Next Steps</h3>
          <ul className="space-y-2">
            {[
              'Set up E-NACH auto-pay for hassle-free payments',
              'Download your loan agreement from the app',
              'View your EMI payment schedule',
              'Keep making timely payments to maintain good credit'
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Top-up Eligibility Info */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-medium text-amber-800">Top-up Eligibility</p>
              <p className="text-sm text-amber-700 mt-1">
                You'll be eligible for top-up offers after 6 months of timely repayments.
                Additional funds up to ₹10 Lakhs at the same interest rate!
              </p>
            </div>
          </div>
        </div>

        {/* Demo Time Simulation Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🕐</span>
            <p className="font-semibold text-amber-800">Demo: Time Travel</p>
          </div>

          <p className="text-sm text-amber-700 mb-3">
            Simulate time passing to see the top-up offer (available after 6 months)
          </p>

          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <button
              onClick={() => setSimulatedMonths(prev => Math.min(prev + 1, 12))}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
            >
              ⏩ +1 Month
            </button>
            <button
              onClick={() => setSimulatedMonths(0)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition-colors"
            >
              Reset
            </button>
            <div className="flex-1 text-right min-w-[150px]">
              <span className="font-bold text-amber-800 text-lg">
                {simulatedMonths} months
              </span>
              <span className="text-sm text-amber-600"> since disbursal</span>
            </div>
          </div>

          {isTopUpEligible ? (
            <div className="bg-green-100 border border-green-300 rounded-lg p-3">
              <p className="text-green-800 font-medium mb-2">✓ You're now eligible for top-up!</p>
              <button
                onClick={() => navigate('/journey4/topup-offer')}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Top-Up Offer
              </button>
            </div>
          ) : (
            <p className="text-sm text-amber-600">
              Top-up offers become available after 6 months of timely repayments.
              Keep making on-time payments!
            </p>
          )}
        </div>

        {/* Back to Home */}
        <button
          onClick={() => navigate('/journey4')}
          className="w-full py-3 text-[var(--color-ring-blue)] font-medium"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
