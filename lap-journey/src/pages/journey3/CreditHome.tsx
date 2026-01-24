import { useNavigate } from 'react-router-dom';
import { almostThereUser, getScoreLabel, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function CreditHome() {
  const navigate = useNavigate();
  const user = almostThereUser;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-green-500';
      case 'average': return 'text-amber-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const progressPercentage = (user.score / LAP_ELIGIBILITY_SCORE) * 100;

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
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

      <div className="p-4 space-y-4">
        {/* Almost There Banner */}
        <div className="bg-gradient-to-r from-amber-400 to-green-500 text-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🎯</span>
            <span className="font-bold text-lg">You're SO Close!</span>
          </div>
          <p className="text-sm opacity-90">
            Just <span className="font-bold text-xl">{user.gapToEligibility} points</span> away from LAP eligibility!
          </p>
          <div className="mt-3 bg-white/20 rounded-full h-2">
            <div
              className="bg-white rounded-full h-2 transition-all"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            />
          </div>
          <p className="text-xs mt-1 opacity-80">{user.score} / {LAP_ELIGIBILITY_SCORE}</p>
        </div>

        {/* Score Card */}
        <div className="bg-white rounded-xl p-6 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">Your Credit Score</p>

          {/* Score Gauge Placeholder */}
          <div className="my-4 relative">
            <div className="w-40 h-20 mx-auto border-t-8 border-l-8 border-r-8 rounded-t-full"
              style={{
                borderColor: '#F59E0B',
                background: 'linear-gradient(to right, #EF4444, #F59E0B, #22C55E)'
              }}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <p className="text-4xl font-bold text-[var(--color-text-primary)]">{user.score}</p>
            </div>
          </div>

          <p className={`font-semibold ${getStatusColor(user.scoreStatus)}`}>
            {getScoreLabel(user.scoreStatus)} ⓘ
          </p>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            Last updated on {user.lastUpdated}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">Powered by EQUIFAX</p>
        </div>

        {/* Gap Highlight */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-amber-800">Just {user.gapToEligibility} points to go!</p>
              <p className="text-sm text-amber-700">
                Estimated time: {user.estimatedTimeToEligibility}
              </p>
            </div>
          </div>
        </div>

        {/* Credit Factors */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Credit factors</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">See what's impacting your score</p>
            </div>
          </div>

          <div className="space-y-3">
            {user.factors.map((factor) => (
              <div key={factor.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-[var(--color-text-primary)]">{factor.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Impact - {factor.impact}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{factor.value}</span>
                  <span className={`text-sm ${getStatusColor(factor.status)}`}>
                    {factor.status.charAt(0).toUpperCase() + factor.status.slice(1)}
                  </span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey3/so-close')}
          className="w-full bg-gradient-to-r from-amber-500 to-green-500 text-white py-4 rounded-xl font-semibold"
        >
          Get to 650 in {user.estimatedTimeToEligibility} →
        </button>
      </div>
    </div>
  );
}
