import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { almostThereUser, simulatorScenarios, LAP_ELIGIBILITY_SCORE } from '../../data/mockData';

export default function ScoreSimulator() {
  const navigate = useNavigate();
  const user = almostThereUser;
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [simulatedScore, setSimulatedScore] = useState(user.score);
  const [predictionsRemaining, setPredictionsRemaining] = useState(10);

  const handleScenarioClick = (scenarioId: string, impact: number) => {
    if (predictionsRemaining <= 0) return;

    setSelectedScenario(scenarioId);
    setSimulatedScore(user.score + impact);
    setPredictionsRemaining(prev => prev - 1);
  };

  const resetSimulation = () => {
    setSelectedScenario(null);
    setSimulatedScore(user.score);
  };

  const selectedScenarioData = simulatorScenarios.find(s => s.id === selectedScenario);

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Kissht Ring Score Simulator</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Current Score Card */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Current Score</p>
              <p className="text-3xl font-bold text-[var(--color-text-primary)]">{user.score}</p>
            </div>

            <div className="text-center px-4">
              <svg className="w-8 h-8 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="text-right">
              <p className="text-sm text-[var(--color-text-muted)]">Simulated</p>
              <p className={`text-3xl font-bold ${
                simulatedScore >= LAP_ELIGIBILITY_SCORE
                  ? 'text-green-600'
                  : simulatedScore < user.score
                    ? 'text-red-500'
                    : 'text-amber-500'
              }`}>
                {simulatedScore}
              </p>
            </div>
          </div>

          {selectedScenario && (
            <div className={`mt-4 p-3 rounded-lg ${
              simulatedScore >= LAP_ELIGIBILITY_SCORE
                ? 'bg-green-50 border border-green-200'
                : simulatedScore < user.score
                  ? 'bg-red-50 border border-red-200'
                  : 'bg-amber-50 border border-amber-200'
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedScenarioData?.icon}</span>
                <div>
                  <p className={`font-medium ${
                    simulatedScore >= LAP_ELIGIBILITY_SCORE
                      ? 'text-green-800'
                      : simulatedScore < user.score
                        ? 'text-red-800'
                        : 'text-amber-800'
                  }`}>
                    {selectedScenarioData?.title}
                  </p>
                  <p className={`text-sm ${
                    simulatedScore >= LAP_ELIGIBILITY_SCORE
                      ? 'text-green-700'
                      : simulatedScore < user.score
                        ? 'text-red-700'
                        : 'text-amber-700'
                  }`}>
                    Impact: {selectedScenarioData!.impact > 0 ? '+' : ''}{selectedScenarioData?.impact} points
                  </p>
                </div>
              </div>
              <button
                onClick={resetSimulation}
                className="mt-2 text-sm text-[var(--color-ring-blue)] font-medium"
              >
                Reset →
              </button>
            </div>
          )}
        </div>

        {/* LAP Eligibility Status */}
        <div className={`rounded-xl p-4 ${
          simulatedScore >= LAP_ELIGIBILITY_SCORE
            ? 'bg-green-500 text-white'
            : 'bg-amber-100 text-amber-800'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">
              {simulatedScore >= LAP_ELIGIBILITY_SCORE ? '✅' : '⚠️'}
            </span>
            <div>
              <p className="font-semibold">
                {simulatedScore >= LAP_ELIGIBILITY_SCORE
                  ? 'LAP Eligible!'
                  : `${LAP_ELIGIBILITY_SCORE - simulatedScore} points to LAP eligibility`
                }
              </p>
              <p className="text-sm opacity-80">
                {simulatedScore >= LAP_ELIGIBILITY_SCORE
                  ? 'You qualify for a Loan Against Property'
                  : 'Keep improving to unlock LAP'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Scenario Grid */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">What if you...</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Tap to simulate</p>
            </div>
            <span className="text-sm text-[var(--color-text-muted)]">
              {predictionsRemaining} predictions left
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {simulatorScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleScenarioClick(scenario.id, scenario.impact)}
                disabled={predictionsRemaining <= 0}
                className={`p-4 rounded-xl text-center transition-all ${
                  selectedScenario === scenario.id
                    ? 'bg-[var(--color-ring-blue)] text-white'
                    : predictionsRemaining <= 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <span className="text-3xl block mb-2">{scenario.icon}</span>
                <p className="font-medium text-sm">{scenario.title}</p>
                <p className={`text-xs mt-1 ${
                  selectedScenario === scenario.id
                    ? 'text-white/70'
                    : scenario.impact > 0
                      ? 'text-green-600'
                      : 'text-red-500'
                }`}>
                  {scenario.impact > 0 ? '+' : ''}{scenario.impact} pts
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* DPD Warning */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-xl">❌</span>
            <div>
              <p className="font-medium text-red-800">Warning: Missing an EMI</p>
              <p className="text-sm text-red-700 mt-1">
                This is the worst thing you can do. A single missed payment (DPD) can drop your score by 100+ points and stay on your report for 7 years!
              </p>
            </div>
          </div>
        </div>

        {/* Positive Scenario */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-xl">✅</span>
            <div>
              <p className="font-medium text-green-800">Best Move: Clear All Dues</p>
              <p className="text-sm text-green-700 mt-1">
                Paying off outstanding balances can boost your score by 45+ points. Combined with reducing utilization, you could easily cross 650!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey3/reserve-lap')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Reserve My LAP Application
        </button>
      </div>
    </div>
  );
}
