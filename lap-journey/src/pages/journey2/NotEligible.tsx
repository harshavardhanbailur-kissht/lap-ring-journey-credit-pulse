import { useNavigate } from 'react-router-dom';
import { poorScoreUser, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function NotEligible() {
  const navigate = useNavigate();
  const user = poorScoreUser;

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Kissht Ring LAP Eligibility</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Status Card */}
        <div className="bg-white rounded-xl p-6 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">📊</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            You need {LAP_ELIGIBILITY_SCORE}+ for LAP
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Your current score is <span className="font-bold text-red-600">{user.score}</span>
          </p>

          {/* Gap Visual */}
          <div className="mt-6 px-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Current: {user.score}</span>
              <span>Required: {LAP_ELIGIBILITY_SCORE}</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-amber-500 rounded-full"
                style={{ width: `${(user.score / LAP_ELIGIBILITY_SCORE) * 100}%` }}
              />
            </div>
            <p className="text-center mt-2 text-red-600 font-semibold">
              Gap: {user.gapToEligibility} points
            </p>
          </div>
        </div>

        {/* Path Forward */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Here's your path to LAP eligibility</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[var(--color-ring-blue)] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-medium">Fix High-Impact Issues</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Pay overdue amounts, reduce utilization</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[var(--color-ring-blue)] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-medium">Subscribe to Kissht Ring Credit Pulse</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Get AI-customized plan and weekly updates</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[var(--color-ring-blue)] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-medium">Build Credit History</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Take small loans, pay EMIs on time</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-700">
              <span className="font-semibold">Estimated Timeline:</span> {user.estimatedTimeToEligibility}
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey2/ai-analysis')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Get My Personalized Plan
        </button>

        <p className="text-center text-sm text-[var(--color-text-muted)]">
          Powered by Kissht Ring AI analysis
        </p>
      </div>
    </div>
  );
}
