import { useNavigate } from 'react-router-dom';
import { emiReminder, enachAlert } from '../../data/mockData';

export default function EMIReminder() {
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
          <h1 className="font-semibold">EMI Reminder</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* EMI Due Card */}
        <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔔</span>
            <div className="flex-1">
              <p className="font-semibold text-[var(--color-text-primary)]">{emiReminder.loanName}</p>
              <p className="text-lg font-bold text-[var(--color-text-primary)] mt-1">
                ₹{emiReminder.amount.toLocaleString()} due on {emiReminder.dueDate}
              </p>
              <p className="text-sm text-amber-600 mt-1">
                {emiReminder.daysUntilDue} days remaining
              </p>
            </div>
          </div>
        </div>

        {/* E-NACH Alert */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div className="flex-1">
              <p className="font-semibold text-red-800">E-NACH Alert</p>
              <p className="text-sm text-red-700 mt-1">
                Ensure ₹{enachAlert.requiredBalance.toLocaleString()} in {enachAlert.bankName} ••{enachAlert.accountLastFour} by {enachAlert.dueDate} for auto-debit
              </p>
              <div className="mt-3 p-3 bg-white rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-secondary)]">Current Balance</span>
                  <span className="font-medium">₹{enachAlert.currentBalance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-[var(--color-text-secondary)]">Shortfall</span>
                  <span className="font-medium text-red-600">₹{enachAlert.shortfall.toLocaleString()}</span>
                </div>
              </div>
              <button className="mt-3 w-full py-2 bg-red-600 text-white rounded-lg font-medium text-sm">
                Add Money →
              </button>
            </div>
          </div>
        </div>

        {/* DPD Warning */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">❗</span>
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">Missing EMI can hurt your score</p>
              <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">780</span>
                  <span className="text-[var(--color-text-muted)]">→</span>
                  <span className="text-red-600 font-bold">680</span>
                  <span className="text-sm text-red-600 ml-2">(-100 points)</span>
                </div>
                <p className="text-sm text-red-600 mt-2">LAP eligibility: At Risk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 border-2 border-[var(--color-ring-blue)] text-[var(--color-ring-blue)] rounded-xl font-semibold">
            Set Reminder
          </button>
          <button className="flex-1 py-3 bg-[var(--color-ring-blue)] text-white rounded-xl font-semibold">
            Pay Now
          </button>
        </div>

        {/* Next */}
        <button
          onClick={() => navigate('/journey1/bt-topup')}
          className="w-full py-3 text-[var(--color-ring-blue)] font-medium"
        >
          View BT Top-up Offer →
        </button>
      </div>
    </div>
  );
}
