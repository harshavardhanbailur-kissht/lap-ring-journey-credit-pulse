import { useNavigate } from 'react-router-dom';
import { loanProducts } from '../../data/mockData';

export default function LoanProducts() {
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
          <h1 className="font-semibold">Kissht Ring Credit Builder Loans</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="font-medium text-blue-800">Why take a small loan?</p>
              <p className="text-sm text-blue-700 mt-1">
                Taking a small loan and paying EMIs on time is one of the fastest ways to build credit history and improve your score.
              </p>
            </div>
          </div>
        </div>

        {/* Loan Cards */}
        <div className="space-y-4">
          {loanProducts.map((loan) => (
            <div key={loan.id} className="bg-white rounded-xl p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  loan.provider === 'ring' ? 'bg-[var(--color-ring-blue)]' : 'bg-purple-600'
                }`}>
                  <span className="text-white font-bold text-sm">
                    {loan.provider === 'ring' ? 'R' : 'K'}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[var(--color-text-primary)]">{loan.name}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{loan.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center py-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">Amount</p>
                  <p className="font-semibold text-sm">
                    ₹{(loan.minAmount / 1000).toFixed(0)}K - ₹{loan.maxAmount >= 100000 ? (loan.maxAmount / 100000).toFixed(0) + 'L' : (loan.maxAmount / 1000).toFixed(0) + 'K'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">Tenure</p>
                  <p className="font-semibold text-sm">{loan.tenure}</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">ROI</p>
                  <p className="font-semibold text-sm">{loan.roi}</p>
                </div>
              </div>

              <button className="w-full mt-3 py-2 border-2 border-[var(--color-ring-blue)] text-[var(--color-ring-blue)] rounded-lg font-medium text-sm">
                Check Eligibility
              </button>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="font-medium text-green-800 mb-2">Our Recommendation</p>
          <p className="text-sm text-green-700">
            Start with <span className="font-semibold">Ring FastCash (₹10,000)</span> for 3 months. On-time payments can add up to 25 points to your score!
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey2/dpd-guardian')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Continue to DPD Guardian
        </button>
      </div>
    </div>
  );
}
