import { useNavigate } from 'react-router-dom';

export default function BTTopUp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">BT Top-up Offer</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Notification Style Card */}
        <div className="bg-gradient-to-br from-[var(--color-ring-blue)] to-[var(--color-ring-dark-blue)] text-white rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎁</span>
            </div>
            <div>
              <p className="text-sm opacity-80">Special Offer</p>
              <p className="font-bold text-lg">Balance Transfer Top-up</p>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-4">
            Congratulations! Based on your excellent credit score and repayment history, you're eligible for additional funds.
          </p>
        </div>

        {/* Offer Details */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Your Offer Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Additional Amount</span>
              <span className="font-bold text-green-600">Up to ₹10 Lakhs</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Interest Rate</span>
              <span className="font-semibold">Same as existing LAP</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Processing Fee</span>
              <span className="font-semibold text-green-600">Waived</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[var(--color-text-secondary)]">Validity</span>
              <span className="font-semibold">30 days</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Why Top-up?</h3>
          <ul className="space-y-2">
            {[
              'No additional collateral required',
              'Quick disbursement in 24 hours',
              'Single EMI for total loan amount',
              'No impact on credit score'
            ].map((benefit, i) => (
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
          <button className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold">
            Apply for Top-up
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
