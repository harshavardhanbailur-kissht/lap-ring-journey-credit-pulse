import { useNavigate } from 'react-router-dom';
import { poorScoreUser, getScoreLabel, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function CreditHome() {
  const navigate = useNavigate();
  const user = poorScoreUser;

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
          <h1 className="font-semibold">Kissht Ring Credit Pulse</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4 content-with-nav">
        {/* LAP Not Eligible Banner */}
        <div className="bg-red-500 text-white p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold">LAP requires {LAP_ELIGIBILITY_SCORE}+ score</p>
              <p className="text-sm opacity-90">You need {user.gapToEligibility} more points</p>
            </div>
            <button
              onClick={() => navigate('/journey2/not-eligible')}
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Fix it
            </button>
          </div>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-xl p-6 text-center">
          {/* Score Gauge */}
          <div className="relative w-48 h-24 mx-auto mb-4">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="12"
                strokeLinecap="round"
              />
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#scoreGradient2)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="251"
                strokeDashoffset={251 - (251 * (user.score - 300) / 550)}
              />
              <defs>
                <linearGradient id="scoreGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
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
            <span className="text-red-600 font-semibold">{getScoreLabel(user.scoreStatus)}</span>
            <button className="icon-button">
              <svg className="w-4 h-4 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">Last updated on {user.lastUpdated}</p>

          {/* Gap Indicator */}
          <div className="mt-4 p-3 bg-red-50 rounded-lg">
            <p className="text-sm text-red-700">
              <span className="font-bold">{user.gapToEligibility} points</span> away from LAP eligibility
            </p>
            <p className="text-xs text-red-600 mt-1">Estimated time: {user.estimatedTimeToEligibility}</p>
          </div>
        </div>

        {/* Credit Factors */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Credit factors</h3>
              <p className="text-sm text-[var(--color-text-muted)]">What's hurting your score</p>
            </div>
          </div>

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

        {/* CTA */}
        <button
          onClick={() => navigate('/journey2/ai-analysis')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Get Your Personalized Plan
        </button>
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
