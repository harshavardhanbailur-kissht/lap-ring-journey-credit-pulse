import { useNavigate } from 'react-router-dom';
import { almostThereBridgePlan, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function BridgePlan() {
  const navigate = useNavigate();
  const plan = almostThereBridgePlan;

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Kissht Ring Bridge Plan</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Plan Header */}
        <div className="bg-gradient-to-br from-amber-400 to-green-500 text-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-lg">{plan.name}</span>
          </div>
          <p className="text-sm opacity-90 mb-3">Just {plan.gap} points to go!</p>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-2xl font-bold">{plan.estimatedTimeline}</p>
              <p className="text-xs opacity-80">to reach 650</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-2xl font-bold">{plan.actions.length}</p>
              <p className="text-xs opacity-80">quick wins</p>
            </div>
          </div>
        </div>

        {/* Score Projection */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Score Projection</h3>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-sm text-[var(--color-text-muted)]">Today</p>
              <p className="text-2xl font-bold text-amber-500">{plan.currentScore}</p>
            </div>

            <div className="flex-1 relative">
              <div className="h-1 bg-gray-200 rounded-full">
                <div className="h-1 bg-gradient-to-r from-amber-500 to-green-500 rounded-full w-full" />
              </div>
              <svg className="w-6 h-6 text-green-500 absolute top-1/2 -translate-y-1/2 right-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-sm text-[var(--color-text-muted)]">Target</p>
              <p className="text-2xl font-bold text-green-600">{LAP_ELIGIBILITY_SCORE}+</p>
            </div>
          </div>

          <p className="text-center text-sm text-[var(--color-text-secondary)] mt-3">
            Potential gain: <span className="font-bold text-green-600">+{plan.actions.reduce((acc, a) => acc + a.potentialGain, 0)} points</span>
          </p>
        </div>

        {/* Quick Win Actions */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Your Quick Wins</h3>

          <div className="space-y-3">
            {plan.actions.map((action, index) => (
              <div key={action.id} className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-semibold text-[var(--color-text-primary)]">{action.title}</p>
                      <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                        +{action.potentialGain} pts
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">{action.description}</p>

                    {index === 0 && (
                      <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
                        Do This Now →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Features */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Bridge Plan Includes</h3>
          <ul className="space-y-2">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-sm text-green-700">Lite Plan - You're almost there!</p>
          <p className="text-3xl font-bold text-green-600">
            ₹{plan.monthlyPrice}<span className="text-lg font-normal text-green-500">/month</span>
          </p>
          <p className="text-xs text-green-600 mt-1">Cancel anytime after reaching 650</p>
        </div>

        {/* CTAs */}
        <button
          onClick={() => navigate('/journey3/quick-wins')}
          className="w-full bg-gradient-to-r from-amber-500 to-green-500 text-white py-4 rounded-xl font-semibold"
        >
          Get Bridge Plan
        </button>

        <button
          onClick={() => navigate('/journey3/score-simulator')}
          className="w-full py-3 text-[var(--color-ring-blue)] font-medium"
        >
          Try Score Simulator First →
        </button>
      </div>
    </div>
  );
}
