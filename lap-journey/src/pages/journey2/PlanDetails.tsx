import { useNavigate } from 'react-router-dom';
import { poorScoreCustomPlan } from '../../data/mockData';

const monthlyRoadmap = [
  { month: 1, title: 'Fix Utilization', gain: 25, tasks: ['Pay down HDFC card by ₹15,000', 'Avoid new card usage'] },
  { month: 2, title: 'Clear Overdues', gain: 40, tasks: ['Clear 2 overdue accounts', 'Set up auto-pay for all EMIs'] },
  { month: 3, title: 'Build History', gain: 15, tasks: ['Take Ring FastCash loan', 'Pay first 2 EMIs on time'] },
  { month: 4, title: 'Maintain Habits', gain: 25, tasks: ['Continue on-time payments', 'Keep utilization below 30%'] },
  { month: 5, title: 'Final Push', gain: 25, tasks: ['Final debt reduction', 'Apply for LAP!'] },
];

export default function PlanDetails() {
  const navigate = useNavigate();
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
          <h1 className="font-semibold">Month-by-Month Plan</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Summary */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Journey</p>
              <p className="font-semibold">{plan.currentScore} → {plan.targetScore}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[var(--color-text-muted)]">Timeline</p>
              <p className="font-semibold text-green-600">{plan.estimatedTimeline}</p>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="space-y-4">
          {monthlyRoadmap.map((month, index) => (
            <div key={month.month} className="bg-white rounded-xl p-4">
              <div className="flex items-start gap-3">
                {/* Month indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[var(--color-ring-blue)] text-white rounded-full flex items-center justify-center font-bold">
                    {month.month}
                  </div>
                  {index < monthlyRoadmap.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">Month {month.month}: {month.title}</p>
                    </div>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                      +{month.gain} pts
                    </span>
                  </div>

                  <ul className="space-y-1">
                    {month.tasks.map((task, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Gain */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-green-800">Total Potential Gain</span>
            <span className="text-xl font-bold text-green-600">
              +{monthlyRoadmap.reduce((acc, m) => acc + m.gain, 0)} points
            </span>
          </div>
        </div>

        {/* CTAs */}
        <button
          onClick={() => navigate('/journey2/dpd-guardian')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Set Up DPD Guardian
        </button>
      </div>
    </div>
  );
}
