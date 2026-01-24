import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { almostThereUser } from '../../data/mockData';

const analysisSteps = [
  { id: 1, text: 'Scanning credit factors...', icon: '📊' },
  { id: 2, text: 'Identifying quick wins...', icon: '⚡' },
  { id: 3, text: 'Calculating fastest path...', icon: '🛤️' },
  { id: 4, text: 'Creating bridge plan...', icon: '🌉' },
];

export default function AIGapAnalysis() {
  const navigate = useNavigate();
  const user = almostThereUser;
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= analysisSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 900);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        navigate('/journey3/bridge-plan');
      }, 1200);
    }
  }, [isComplete, navigate]);

  return (
    <div className="min-h-screen bg-[var(--color-ring-dark-blue)] text-white flex flex-col">
      <header className="p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Bridge Analysis</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {/* AI Brain Animation */}
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-green-400 rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-[var(--color-ring-dark-blue)] rounded-full flex items-center justify-center">
            <span className="text-5xl">🧠</span>
          </div>
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-green-400 rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {isComplete ? 'Bridge Plan Ready!' : 'Analyzing Your Gap...'}
          </h2>
          <p className="text-white/70">
            {isComplete
              ? `Found the fastest path for ${user.name}`
              : `Just ${user.gapToEligibility} points to bridge`
            }
          </p>
        </div>

        {/* Analysis Steps */}
        <div className="w-full max-w-sm space-y-3">
          {analysisSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                index <= currentStep
                  ? 'bg-white/10'
                  : 'bg-white/5 opacity-50'
              }`}
            >
              <span className="text-xl">{step.icon}</span>
              <span className="flex-1">{step.text}</span>
              {index < currentStep && (
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {index === currentStep && !isComplete && (
                <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
              )}
              {index === currentStep && isComplete && (
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-sm mt-8">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-green-400 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / analysisSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {isComplete && (
          <div className="mt-8 text-center animate-pulse">
            <p className="text-green-400 font-medium">Taking you to your bridge plan...</p>
          </div>
        )}
      </div>
    </div>
  );
}
