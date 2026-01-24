import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { almostThereUser, almostThereBridgePlan, lapLoanOptions, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function ReserveLAP() {
  const navigate = useNavigate();
  const user = almostThereUser;
  const plan = almostThereBridgePlan;
  const [isReserved, setIsReserved] = useState(false);
  const [enableAlerts, setEnableAlerts] = useState(true);

  if (isReserved) {
    return (
      <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
        <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
          <div className="flex items-center justify-between">
            <div className="w-6" />
            <h1 className="font-semibold">Kissht Ring Reservation Confirmed</h1>
            <div className="w-6" />
          </div>
        </header>

        <div className="p-4 space-y-4">
          {/* Success Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-5xl">🎉</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">You're in the Queue!</h2>
            <p className="opacity-90">
              Your LAP application spot is reserved. We'll notify you the moment you hit 650.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">What Happens Next</h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium">Complete Your Quick Wins</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Follow the bridge plan to reach 650
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium">Get Instant Notification</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    We'll alert you when you cross 650
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium">Priority Application Processing</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Your LAP application gets fast-tracked
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Reservation Details */}
          <div className="bg-white rounded-xl p-4">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Your Reservation</h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[var(--color-text-secondary)]">Current Score</span>
                <span className="font-medium">{user.score}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[var(--color-text-secondary)]">Target Score</span>
                <span className="font-medium text-green-600">{LAP_ELIGIBILITY_SCORE}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[var(--color-text-secondary)]">Points to Go</span>
                <span className="font-medium text-amber-600">{user.gapToEligibility}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-[var(--color-text-secondary)]">Estimated Time</span>
                <span className="font-medium">{plan.estimatedTimeline}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[var(--color-text-secondary)]">LAP Amount Range</span>
                <span className="font-medium">₹{(lapLoanOptions.minAmount / 100000).toFixed(0)}L - ₹{(lapLoanOptions.maxAmount / 100000).toFixed(0)}L</span>
              </div>
            </div>
          </div>

          {/* Bridge Plan Reminder */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex gap-3">
              <span className="text-xl">💡</span>
              <div>
                <p className="font-medium text-amber-800">Subscribe to Bridge Plan</p>
                <p className="text-sm text-amber-700 mt-1">
                  Get daily tracking and instant alerts for just ₹{plan.monthlyPrice}/month
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
          >
            Done
          </button>

          {/* End of Journey */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-[var(--color-text-muted)]">
              End of Journey 3 (Almost There Flow)
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

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Kissht Ring - Reserve LAP</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[var(--color-ring-blue)] to-[var(--color-ring-dark-blue)] text-white rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🏠</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Hold Your Spot in Line</h2>
          <p className="text-sm opacity-90">
            Reserve your LAP application now. We'll fast-track it the moment you hit 650.
          </p>
        </div>

        {/* LAP Details */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">LAP Loan Details</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg text-center">
              <p className="text-lg font-bold text-[var(--color-ring-blue)]">
                ₹{(lapLoanOptions.minAmount / 100000).toFixed(0)}L - ₹{(lapLoanOptions.maxAmount / 100000).toFixed(0)}L
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">Loan Amount</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg text-center">
              <p className="text-lg font-bold text-[var(--color-ring-blue)]">{lapLoanOptions.roi}</p>
              <p className="text-xs text-[var(--color-text-muted)]">Interest Rate</p>
            </div>
          </div>

          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-[var(--color-text-secondary)]">
              <span className="font-medium">Tenure Options:</span> {lapLoanOptions.tenure.join(', ')}
            </p>
          </div>
        </div>

        {/* Your Gap Status */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium text-amber-800">Your Journey</span>
            <span className="text-sm text-amber-700">{plan.estimatedTimeline} to go</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-xl font-bold text-amber-600">{user.score}</p>
              <p className="text-xs text-amber-700">Current</p>
            </div>
            <div className="flex-1 h-2 bg-amber-200 rounded-full">
              <div
                className="h-2 bg-amber-500 rounded-full"
                style={{ width: `${(user.score / LAP_ELIGIBILITY_SCORE) * 100}%` }}
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-green-600">{LAP_ELIGIBILITY_SCORE}</p>
              <p className="text-xs text-amber-700">Target</p>
            </div>
          </div>
        </div>

        {/* Notification Toggle */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔔</span>
              <div>
                <p className="font-medium">Score Alert</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Notify me when I hit 650</p>
              </div>
            </div>
            <button
              onClick={() => setEnableAlerts(!enableAlerts)}
              className={`w-12 h-6 rounded-full transition-colors ${
                enableAlerts ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                enableAlerts ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Reservation Benefits</h3>
          <ul className="space-y-2">
            {[
              'Priority application processing',
              'Instant notification at 650',
              'Pre-filled application form',
              'Dedicated relationship manager',
            ].map((benefit, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* No Commitment Note */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-sm text-green-700">
            <span className="font-medium">No commitment.</span> Free to reserve. Cancel anytime.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => setIsReserved(true)}
          className="w-full bg-gradient-to-r from-amber-500 to-green-500 text-white py-4 rounded-xl font-semibold"
        >
          Reserve My LAP Application
        </button>

        <button
          onClick={() => navigate('/journey3/bridge-plan')}
          className="w-full py-3 text-[var(--color-ring-blue)] font-medium"
        >
          ← Back to Bridge Plan
        </button>
      </div>
    </div>
  );
}
