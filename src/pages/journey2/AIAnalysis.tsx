import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { poorScoreUser } from '../../data/mockData';

const analysisSteps = [
  'Scanning credit factors...',
  'Analyzing payment history...',
  'Calculating utilization impact...',
  'Finding quick wins...',
  'Generating personalized plan...'
];

export default function AIAnalysis() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= analysisSteps.length - 1) {
          setIsComplete(true);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        navigate('/journey2/custom-plan');
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, navigate]);

  return (
    <div className="min-h-screen bg-[var(--color-ring-dark-blue)] flex flex-col">
      <header className="p-4">
        <div className="flex items-center justify-between text-white">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">AI Analysis</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-white">
        {/* AI Icon */}
        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
          <span className="text-5xl">🤖</span>
        </div>

        <h2 className="text-xl font-bold mb-2">
          Analyzing Your Profile
        </h2>
        <p className="text-white/70 mb-8 text-center">
          Hi {poorScoreUser.name}, we're creating a personalized plan just for you
        </p>

        {/* Progress */}
        <div className="w-full max-w-sm space-y-3">
          {analysisSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 transition-all duration-300 ${
                index <= currentStep ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                index < currentStep
                  ? 'bg-green-500'
                  : index === currentStep
                  ? 'bg-white'
                  : 'bg-white/30'
              }`}>
                {index < currentStep ? (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : index === currentStep ? (
                  <div className="w-3 h-3 bg-[var(--color-ring-blue)] rounded-full animate-pulse" />
                ) : null}
              </div>
              <span className={`text-sm ${index === currentStep ? 'font-medium' : ''}`}>
                {step}
              </span>
            </div>
          ))}
        </div>

        {isComplete && (
          <div className="mt-8 text-center animate-fade-in">
            <p className="text-green-400 font-semibold">Analysis Complete!</p>
            <p className="text-sm text-white/70 mt-1">Redirecting to your plan...</p>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="p-4">
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / analysisSteps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
