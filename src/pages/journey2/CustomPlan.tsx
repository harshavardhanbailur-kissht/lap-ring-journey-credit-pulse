import { useNavigate } from 'react-router-dom';
import { poorScoreUser, poorScoreCustomPlan } from '../../data/mockData';

export default function CustomPlan() {
  const navigate = useNavigate();
  const user = poorScoreUser;
  const plan = poorScoreCustomPlan;

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Your Custom Plan</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Plan Header */}
        <div className="bg-gradient-to-br from-[var(--color-ring-blue)] to-[var(--color-ring-dark-blue)] text-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🤖</span>
            <span className="font-semibold">AI-Generated Plan for {user.name}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">{plan.targetScore}</p>
              <p className="text-xs opacity-80">Target Score</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{plan.gap}</p>
              <p className="text-xs opacity-80">Points to Go</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{plan.estimatedTimeline}</p>
              <p className="text-xs opacity-80">Timeline</p>
            </div>
          </div>
        </div>

        {/* Priority Actions */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Priority Actions</h3>

          <div className="space-y-3">
            {plan.actions.map((action, index) => (
              <div key={action.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                    action.priority === 'high' ? 'bg-red-500' : 'bg-amber-500'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[var(--color-text-primary)]">{action.title}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">{action.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        +{action.potentialGain} pts potential
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        action.priority === 'high'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {action.priority} impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Includes */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Plan Includes</h3>
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
        <div className="bg-white rounded-xl p-4 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">Customized for you</p>
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">
            ₹{plan.monthlyPrice}<span className="text-lg font-normal text-[var(--color-text-secondary)]">/month</span>
          </p>
        </div>

        {/* CTAs */}
        <button
          onClick={() => navigate('/journey2/plan-details')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Subscribe Now
        </button>

        <button
          onClick={() => navigate('/journey2/loan-products')}
          className="w-full py-3 text-[var(--color-ring-blue)] font-medium"
        >
          View Small Loans to Build Credit →
        </button>
      </div>
    </div>
  );
}
