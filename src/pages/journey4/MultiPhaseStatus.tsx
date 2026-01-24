import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { multiPhaseJourneyData } from '../../data/mockData';
import type { LAPPhase } from '../../data/mockData';

export default function MultiPhaseStatus() {
  const navigate = useNavigate();

  // Local state for simulation
  const [phases, setPhases] = useState<LAPPhase[]>(() =>
    JSON.parse(JSON.stringify(multiPhaseJourneyData))
  );
  const [isSimulating, setIsSimulating] = useState(false);

  const completedPhases = phases.filter(p => p.status === 'completed').length;
  const progressPercentage = (completedPhases / phases.length) * 100;
  const currentPhase = phases.find(p => p.status === 'in_progress');
  const allCompleted = phases.every(p => p.status === 'completed');

  // Simulation functions
  const simulateNextPhase = () => {
    setIsSimulating(true);

    // Find current phase to advance
    const currentIndex = phases.findIndex(p => p.status === 'in_progress');
    const nextPendingIndex = phases.findIndex(p => p.status === 'pending');

    const newPhases = [...phases];

    if (currentIndex !== -1) {
      // Complete current phase and its substeps
      newPhases[currentIndex].status = 'completed';
      newPhases[currentIndex].endDate = 'Jan 26, 2025';

      if (newPhases[currentIndex].substeps) {
        newPhases[currentIndex].substeps = newPhases[currentIndex].substeps!.map(s => ({
          ...s,
          status: 'completed' as const,
          date: s.date || 'Jan 26'
        }));
      }

      // Start next phase
      if (nextPendingIndex !== -1) {
        newPhases[nextPendingIndex].status = 'in_progress';
        newPhases[nextPendingIndex].startDate = 'Jan 26, 2025';
      }
    } else if (nextPendingIndex !== -1) {
      // No current phase, start first pending
      newPhases[nextPendingIndex].status = 'in_progress';
      newPhases[nextPendingIndex].startDate = 'Jan 26, 2025';
    }

    setPhases(newPhases);
  };

  const resetSimulation = () => {
    setPhases(JSON.parse(JSON.stringify(multiPhaseJourneyData)));
    setIsSimulating(false);
  };

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      {/* Header */}
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Application Timeline</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Application ID */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Application ID</p>
              <p className="font-semibold text-[var(--color-text-primary)]">LAP-2025-004567</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              In Progress
            </span>
          </div>
        </div>

        {/* Demo Simulation Controls */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🎮</span>
            <p className="font-semibold text-purple-800">Demo: Phase Simulator</p>
          </div>

          <p className="text-sm text-purple-700 mb-3">
            Simulate the journey progression to see all phases complete automatically
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={simulateNextPhase}
              disabled={allCompleted}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg font-medium
                         hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed
                         transition-colors"
            >
              ⏭️ Simulate Next Phase
            </button>

            <button
              onClick={resetSimulation}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg font-medium
                         hover:bg-gray-400 transition-colors"
            >
              🔄 Reset Journey
            </button>
          </div>

          {isSimulating && (
            <p className="text-xs text-purple-600 mt-2">
              ℹ️ Using simulated data - changes won't persist
            </p>
          )}
        </div>

        {/* Overall Progress Bar */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-[var(--color-text-primary)]">Application Progress</span>
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              {completedPhases}/{phases.length} Phases Complete
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-[var(--color-ring-blue)] rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Phase Timeline */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Journey Timeline</h3>

          <div className="relative">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-start mb-8 last:mb-0 relative">
                {/* Connecting Line */}
                {index < phases.length - 1 && (
                  <div
                    className={`absolute left-5 top-10 w-0.5 h-full ${
                      phase.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                    style={{ height: 'calc(100% + 2rem)' }}
                  />
                )}

                {/* Status Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    phase.status === 'completed'
                      ? 'bg-green-500 text-white'
                      : phase.status === 'in_progress'
                      ? 'bg-[var(--color-ring-blue)] text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {phase.status === 'completed' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="text-xl">{phase.icon}</span>
                  )}
                </div>

                {/* Phase Content */}
                <div className="ml-4 flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex-1">
                      <p className={`font-semibold text-base ${
                        phase.status === 'pending' ? 'text-gray-400' : 'text-[var(--color-text-primary)]'
                      }`}>
                        {phase.title}
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">
                        {phase.description}
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      Max: {phase.maxDuration} {phase.maxDuration === 1 ? 'day' : 'days'}
                    </span>
                  </div>

                  {/* Dates */}
                  {phase.startDate && (
                    <p className="text-xs text-[var(--color-text-muted)] mt-2">
                      {phase.endDate ? (
                        <>Started: {phase.startDate} • Completed: {phase.endDate}</>
                      ) : (
                        <>Started: {phase.startDate}</>
                      )}
                    </p>
                  )}

                  {/* Substeps */}
                  {phase.substeps && phase.substeps.length > 0 && (
                    <div className="mt-3 pl-4 border-l-2 border-gray-200 space-y-2">
                      {phase.substeps.map(substep => (
                        <div key={substep.id} className="flex items-center gap-2 text-sm">
                          <span className={substep.status === 'completed' ? 'text-green-500 font-bold' : 'text-gray-400'}>
                            {substep.status === 'completed' ? '✓' : '○'}
                          </span>
                          <span className={substep.status === 'completed' ? 'text-[var(--color-text-primary)]' : 'text-gray-400'}>
                            {substep.title}
                          </span>
                          {substep.date && (
                            <span className="text-xs text-[var(--color-text-muted)]">• {substep.date}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Phase Info Card */}
        {currentPhase && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex gap-3">
              <span className="text-2xl">⏳</span>
              <div>
                <p className="font-medium text-blue-800">{currentPhase.title} in Progress</p>
                <p className="text-sm text-blue-600 mt-1">
                  {currentPhase.id === 'phase-2' ? (
                    'Our team is verifying your documents and will schedule a credit visit soon. This phase typically takes up to 4 days.'
                  ) : (
                    `This phase is currently in progress and typically takes up to ${currentPhase.maxDuration} ${currentPhase.maxDuration === 1 ? 'day' : 'days'}.`
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button (shown when all phases complete) */}
        {allCompleted && (
          <div className="space-y-3">
            <div className="bg-green-100 border border-green-300 rounded-lg p-3">
              <p className="text-green-800 font-medium mb-2">
                ✓ All phases completed! Ready for disbursal.
              </p>
            </div>
            <button
              onClick={() => navigate('/journey4/disbursal')}
              className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
            >
              Go to Disbursal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
