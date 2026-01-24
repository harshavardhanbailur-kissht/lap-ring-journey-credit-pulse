import { useNavigate } from 'react-router-dom';
import { poorScoreUser, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function ProgressTracker() {
  const navigate = useNavigate();
  const user = poorScoreUser;

  // Simulated progress
  const currentProgress = 45;
  const projectedScore = user.score + currentProgress;
  const daysActive = 67;

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Progress Tracker</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Progress Card */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎉</span>
            <div>
              <p className="text-sm opacity-80">Amazing Progress!</p>
              <p className="text-2xl font-bold">+{currentProgress} points</p>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm opacity-80">Started at</p>
              <p className="text-xl font-semibold">{user.score}</p>
            </div>
            <div className="text-center">
              <svg className="w-8 h-8 mx-auto opacity-50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80">Current</p>
              <p className="text-xl font-semibold">{projectedScore}</p>
            </div>
          </div>
        </div>

        {/* Journey to LAP */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Journey to LAP Eligibility</h3>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current: {projectedScore}</span>
              <span>Target: {LAP_ELIGIBILITY_SCORE}</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-green-500 rounded-full transition-all"
                style={{ width: `${(projectedScore / LAP_ELIGIBILITY_SCORE) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-[var(--color-ring-blue)]">
                {LAP_ELIGIBILITY_SCORE - projectedScore}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">Points to go</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600">~3 mo</p>
              <p className="text-xs text-[var(--color-text-muted)]">Estimated time</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Your Stats</h3>

          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="text-xl font-bold text-[var(--color-ring-blue)]">{daysActive}</p>
              <p className="text-xs text-[var(--color-text-muted)]">Days Active</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="text-xl font-bold text-green-600">0</p>
              <p className="text-xs text-[var(--color-text-muted)]">DPD Count</p>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-lg">
              <p className="text-xl font-bold text-amber-600">3/4</p>
              <p className="text-xs text-[var(--color-text-muted)]">Actions Done</p>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Upcoming Actions</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-xl">⏰</span>
              <div className="flex-1">
                <p className="font-medium text-amber-800">EMI due in 5 days</p>
                <p className="text-sm text-amber-700">Ring FastCash - ₹3,500</p>
              </div>
              <button className="px-3 py-1 bg-amber-600 text-white rounded-lg text-sm font-medium">
                Pay
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">💳</span>
              <div className="flex-1">
                <p className="font-medium">Reduce card utilization</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Pay ₹5,000 more on HDFC</p>
              </div>
            </div>
          </div>
        </div>

        {/* End of Journey */}
        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-[var(--color-text-muted)]">
            End of Journey 2 (Poor Score Flow)
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
