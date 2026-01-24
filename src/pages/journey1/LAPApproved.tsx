import { useNavigate } from 'react-router-dom';
import { goodScoreUser, lapLoanOptions } from '../../data/mockData';

export default function LAPApproved() {
  const navigate = useNavigate();
  const user = goodScoreUser;

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
          <h1 className="font-semibold">Kissht Ring LAP Pre-Approved</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Congratulations Card */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🎉</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Congratulations, {user.name}!</h2>
          <p className="opacity-90">You're pre-approved for Loan Against Property</p>
        </div>

        {/* Loan Details */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Your LAP Offer</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Loan Amount</span>
              <span className="font-semibold">₹25L - ₹50L</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Interest Rate</span>
              <span className="font-semibold text-green-600">{lapLoanOptions.roi}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-[var(--color-text-secondary)]">Tenure Options</span>
              <span className="font-semibold">5 - 20 years</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[var(--color-text-secondary)]">Your Credit Score</span>
              <span className="font-semibold text-green-600">{user.score} (Excellent)</span>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Why Choose Kissht Ring LAP?</h3>
          <ul className="space-y-2">
            {['Lowest interest rates in the market', 'Quick disbursement within 7 days', 'Flexible repayment options', 'Minimal documentation'].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey1/application-status')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold text-lg"
        >
          Apply Now
        </button>

        <p className="text-center text-sm text-[var(--color-text-muted)]">
          By applying, you agree to our terms and conditions
        </p>
      </div>
    </div>
  );
}
