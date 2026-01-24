import { useNavigate } from 'react-router-dom';
import { almostThereUser, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function SoClose() {
  const navigate = useNavigate();
  const user = almostThereUser;

  const percentComplete = Math.round((user.score / LAP_ELIGIBILITY_SCORE) * 100);

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Kissht Ring - Almost There!</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Celebration Hero */}
        <div className="bg-gradient-to-br from-amber-400 via-yellow-400 to-green-400 text-white rounded-xl p-6 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-2">You're {percentComplete}% There!</h2>
          <p className="text-lg opacity-90">Just {user.gapToEligibility} points to LAP eligibility</p>

          {/* Progress Ring */}
          <div className="mt-6 relative w-32 h-32 mx-auto">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="white"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${(percentComplete / 100) * 352} 352`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{percentComplete}%</span>
            </div>
          </div>
        </div>

        {/* Score Journey */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Your Score Journey</h3>

          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">{user.score}</p>
              <p className="text-xs text-[var(--color-text-muted)]">Current</p>
            </div>

            <div className="flex-1 mx-4">
              <div className="relative h-2 bg-gray-200 rounded-full">
                <div
                  className="absolute h-2 bg-gradient-to-r from-amber-500 to-green-500 rounded-full"
                  style={{ width: `${percentComplete}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow"
                  style={{ left: `calc(${percentComplete}% - 8px)` }}
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{LAP_ELIGIBILITY_SCORE}</p>
              <p className="text-xs text-[var(--color-text-muted)]">Target</p>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">What This Means For You</h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-2xl">🏠</span>
              <div>
                <p className="font-medium text-green-800">LAP Loan Awaits</p>
                <p className="text-sm text-green-700">₹25L - ₹50L at competitive rates</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-2xl">⏱️</span>
              <div>
                <p className="font-medium text-blue-800">Quick Timeline</p>
                <p className="text-sm text-blue-700">Reach 650 in just {user.estimatedTimeToEligibility}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-medium text-amber-800">Simple Actions</p>
                <p className="text-sm text-amber-700">Just 1-2 quick wins needed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Encouragement */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-xl p-4 text-center">
          <p className="text-green-800 font-medium">
            "You've already done the hard work. Let's finish this!"
          </p>
          <p className="text-sm text-green-600 mt-1">— Kissht Ring AI</p>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey3/ai-gap-analysis')}
          className="w-full bg-gradient-to-r from-amber-500 to-green-500 text-white py-4 rounded-xl font-semibold"
        >
          Show Me How to Get There →
        </button>
      </div>
    </div>
  );
}
