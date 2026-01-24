import { useNavigate } from 'react-router-dom';
import { multiPhaseUser } from '../../data/mockData';

export default function InitialApproval() {
  const navigate = useNavigate();
  const user = multiPhaseUser;

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
          <h1 className="font-semibold">Initial Approval</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Congratulations Card */}
        <div className="bg-gradient-to-br from-green-500 to-[var(--color-ring-blue)] text-white rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🎉</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Congratulations, {user.name}!</h2>
          <p className="opacity-90 mb-2">You have passed the first phase of checks.</p>
          <p className="opacity-90">We have logged in your case.</p>
        </div>

        {/* Application ID Card */}
        <div className="bg-white rounded-xl p-4">
          <p className="text-sm text-[var(--color-text-muted)]">Application ID</p>
          <p className="text-xl font-bold text-[var(--color-text-primary)] mt-1">LAP-2025-004567</p>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">Submitted: Jan 24, 2025</p>
        </div>

        {/* What's Next Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <p className="font-medium text-blue-800">What's next?</p>
              <p className="text-sm text-blue-600 mt-1">
                Your application will go through 3 stages: Sales Journey, Credit Journey,
                and Operations Check before disbursal.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Stages Overview */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Journey Stages</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🤝</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[var(--color-text-primary)]">Sales Journey</p>
                <p className="text-xs text-[var(--color-text-muted)]">Initial consultation & property evaluation • Max 2 days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📋</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[var(--color-text-primary)]">Credit Journey</p>
                <p className="text-xs text-[var(--color-text-muted)]">Credit verification & documentation review • Max 4 days</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">✓</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[var(--color-text-primary)]">Operations Check</p>
                <p className="text-xs text-[var(--color-text-muted)]">Final verification & compliance • Max 1 day</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey4/multi-phase-status')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold text-lg"
        >
          View Journey Timeline
        </button>

        <p className="text-center text-sm text-[var(--color-text-muted)]">
          You will be notified at each stage of the process
        </p>
      </div>
    </div>
  );
}
