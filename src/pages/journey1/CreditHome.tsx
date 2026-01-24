import { useNavigate } from 'react-router-dom';
import { goodScoreUser, getScoreLabel } from '../../data/mockData';

export default function CreditHome() {
  const navigate = useNavigate();
  const user = goodScoreUser;

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
          <h1 className="font-semibold">Credit Pulse</h1>
          <div className="w-6" />
        </div>
      </header>

      {/* Content */}
      <div className="p-4 space-y-4 content-with-nav">
        {/* LAP Eligible Banner */}
        <div className="bg-green-500 text-white p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold">You qualify for LAP!</p>
              <p className="text-sm opacity-90">Pre-approved up to ₹50 Lakhs</p>
            </div>
            <button
              onClick={() => navigate('/journey1/lap-approved')}
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-xl p-6 text-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              Active
            </span>
          </div>

          {/* Score Gauge Placeholder */}
          <div className="relative w-48 h-24 mx-auto mb-4">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              {/* Background arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Score arc */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="251"
                strokeDashoffset={251 - (251 * (user.score - 300) / 550)}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
              <span className="text-4xl font-bold text-[var(--color-text-primary)]">{user.score}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mb-2">
            <span className="text-green-600 font-semibold">{getScoreLabel(user.scoreStatus)}</span>
            <button className="icon-button">
              <svg className="w-4 h-4 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">Last updated on {user.lastUpdated}</p>
          <p className="text-xs text-[var(--color-text-muted)] mt-2">Powered by EQUIFAX</p>
        </div>

        {/* Credit Factors */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">Credit factors</h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-4">See what's impacting your score</p>

          <div className="space-y-3">
            {user.factors.map((factor) => (
              <div key={factor.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-[var(--color-text-primary)]">{factor.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Impact - {factor.impact.charAt(0).toUpperCase() + factor.impact.slice(1)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{factor.value}</span>
                  <span className={`text-sm font-medium ${
                    factor.status === 'excellent' ? 'text-green-600' :
                    factor.status === 'good' ? 'text-green-500' :
                    factor.status === 'average' ? 'text-amber-500' : 'text-red-500'
                  }`}>
                    {factor.status.charAt(0).toUpperCase() + factor.status.slice(1)}
                  </span>
                  <svg className="w-5 h-5 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/journey1/emi-reminder')}
            className="flex-1 bg-white rounded-xl p-4 text-center"
          >
            <span className="text-2xl mb-2 block">📅</span>
            <span className="text-sm text-[var(--color-text-secondary)]">EMI Reminder</span>
          </button>
          <button
            onClick={() => navigate('/journey1/application-status')}
            className="flex-1 bg-white rounded-xl p-4 text-center"
          >
            <span className="text-2xl mb-2 block">📋</span>
            <span className="text-sm text-[var(--color-text-secondary)]">Application Status</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around" style={{ height: '56px', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <button className="flex flex-col items-center justify-center flex-1 min-h-[48px] text-[var(--color-ring-blue)]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 min-h-[48px] text-[var(--color-nav-text)]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          <span className="text-xs mt-1">Loans</span>
        </button>
        <button className="flex flex-col items-center justify-center flex-1 min-h-[48px] text-[var(--color-nav-text)]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span className="text-xs mt-1">Credit Pulse</span>
        </button>
      </nav>
    </div>
  );
}
