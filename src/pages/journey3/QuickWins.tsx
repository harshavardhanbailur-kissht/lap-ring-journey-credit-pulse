import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { almostThereUser, almostThereBridgePlan, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

interface QuickWinItem {
  id: string;
  title: string;
  description: string;
  potentialGain: number;
  effort: 'easy' | 'medium';
  timeframe: string;
  actionLabel: string;
  completed: boolean;
}

const quickWins: QuickWinItem[] = [
  {
    id: 'qw1',
    title: 'Pay ₹5,000 on your credit card',
    description: 'Reduces your utilization from 35% to 28%. Below 30% is ideal.',
    potentialGain: 12,
    effort: 'easy',
    timeframe: 'Instant effect',
    actionLabel: 'Pay Now',
    completed: false,
  },
  {
    id: 'qw2',
    title: 'Wait 30 days (no new credit)',
    description: 'Your recent credit inquiry will age out, removing the soft hit.',
    potentialGain: 5,
    effort: 'easy',
    timeframe: '30 days',
    actionLabel: 'Set Reminder',
    completed: false,
  },
  {
    id: 'qw3',
    title: 'Keep all EMIs on time',
    description: 'Maintain your 95% on-time record. Any miss would hurt badly.',
    potentialGain: 3,
    effort: 'easy',
    timeframe: 'Ongoing',
    actionLabel: 'Enable Alerts',
    completed: false,
  },
];

export default function QuickWins() {
  const navigate = useNavigate();
  const user = almostThereUser;
  const plan = almostThereBridgePlan;
  const [wins, setWins] = useState(quickWins);
  const [simulatedScore, setSimulatedScore] = useState(user.score);

  const toggleWin = (id: string) => {
    setWins(prev => {
      const updated = prev.map(w =>
        w.id === id ? { ...w, completed: !w.completed } : w
      );

      // Calculate simulated score
      const gainedPoints = updated
        .filter(w => w.completed)
        .reduce((acc, w) => acc + w.potentialGain, 0);

      setSimulatedScore(user.score + gainedPoints);

      return updated;
    });
  };

  const totalPotentialGain = wins.reduce((acc, w) => acc + w.potentialGain, 0);
  const completedGain = wins.filter(w => w.completed).reduce((acc, w) => acc + w.potentialGain, 0);

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Kissht Ring Quick Wins</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Score Simulator Card */}
        <div className="bg-gradient-to-br from-[var(--color-ring-blue)] to-[var(--color-ring-dark-blue)] text-white rounded-xl p-4">
          <p className="text-sm opacity-80 mb-2">Live Score Projection</p>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm opacity-70">Current</p>
              <p className="text-2xl font-bold">{user.score}</p>
            </div>

            <div className="text-center">
              <svg className="w-8 h-8 mx-auto opacity-50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="text-right">
              <p className="text-sm opacity-70">Projected</p>
              <p className={`text-3xl font-bold ${simulatedScore >= LAP_ELIGIBILITY_SCORE ? 'text-green-300' : 'text-amber-300'}`}>
                {simulatedScore}
              </p>
            </div>
          </div>

          {simulatedScore >= LAP_ELIGIBILITY_SCORE && (
            <div className="mt-3 p-2 bg-green-500/20 rounded-lg text-center">
              <p className="text-sm font-medium">🎉 LAP Eligible!</p>
            </div>
          )}

          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress: +{completedGain} pts</span>
              <span>Potential: +{totalPotentialGain} pts</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 rounded-full transition-all"
                style={{ width: `${(completedGain / totalPotentialGain) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quick Wins Checklist */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
            Complete These Actions
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Tap to simulate the score impact
          </p>

          <div className="space-y-3">
            {wins.map((win) => (
              <div
                key={win.id}
                onClick={() => toggleWin(win.id)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  win.completed
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    win.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {win.completed ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className={`font-medium ${win.completed ? 'text-green-800 line-through' : 'text-[var(--color-text-primary)]'}`}>
                        {win.title}
                      </p>
                      <span className={`text-sm font-bold px-2 py-0.5 rounded ${
                        win.completed ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'
                      }`}>
                        +{win.potentialGain}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1">{win.description}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        win.effort === 'easy' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {win.effort === 'easy' ? '⚡ Easy' : '📋 Medium'}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {win.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-xl">💡</span>
            <div>
              <p className="font-medium text-blue-800">Pro Tip</p>
              <p className="text-sm text-blue-700 mt-1">
                The first quick win (paying ₹5,000) has the highest impact. Do this first!
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <button
          onClick={() => navigate('/journey3/reserve-lap')}
          className={`w-full py-4 rounded-xl font-semibold transition-all ${
            simulatedScore >= LAP_ELIGIBILITY_SCORE
              ? 'bg-green-500 text-white'
              : 'bg-gradient-to-r from-amber-500 to-green-500 text-white'
          }`}
        >
          {simulatedScore >= LAP_ELIGIBILITY_SCORE
            ? '🎉 Reserve My LAP Application'
            : `Subscribe to Bridge Plan - ₹${plan.monthlyPrice}/mo`
          }
        </button>

        <button
          onClick={() => navigate('/journey3/score-simulator')}
          className="w-full py-3 text-[var(--color-ring-blue)] font-medium"
        >
          Try More Scenarios →
        </button>
      </div>
    </div>
  );
}
