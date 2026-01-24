import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '../hooks/useMediaQuery';

interface JourneyOption {
  id: string;
  title: string;
  subtitle: string;
  scoreRange: string;
  color: 'green' | 'red' | 'yellow';
  path: string;
}

const journeyOptions: JourneyOption[] = [
  {
    id: 'journey1',
    title: 'Good Score (750+)',
    subtitle: 'LAP Pre-approved',
    scoreRange: 'Score: 780',
    color: 'green',
    path: '/journey1'
  },
  {
    id: 'journey2',
    title: 'Needs Work (<600)',
    subtitle: 'Build Your Score',
    scoreRange: 'Score: 520',
    color: 'red',
    path: '/journey2'
  },
  {
    id: 'journey3',
    title: 'Almost There (600-649)',
    subtitle: 'Bridge the Gap',
    scoreRange: 'Score: 635',
    color: 'yellow',
    path: '/journey3'
  }
];

const colorClasses = {
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    dot: 'bg-green-500',
    text: 'text-green-700'
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    dot: 'bg-red-500',
    text: 'text-red-700'
  },
  yellow: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    text: 'text-amber-700'
  }
};

export default function JourneySelector() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className={`min-h-screen bg-[var(--color-ring-light-bg)] ${isMobile ? 'p-4' : 'p-8'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[var(--color-ring-blue)] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-[var(--color-ring-dark-blue)]">Ring</span>
        </div>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
          LAP Loan Journey
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Select a profile to simulate the user journey
        </p>
      </div>

      {/* Journey Cards */}
      <div className={`space-y-4 ${isMobile ? '' : 'max-w-md mx-auto'}`}>
        {journeyOptions.map((journey) => {
          const colors = colorClasses[journey.color];
          return (
            <button
              key={journey.id}
              onClick={() => navigate(journey.path)}
              className={`
                w-full p-4 rounded-xl border-2 transition-all
                ${colors.bg} ${colors.border}
                hover:shadow-md active:scale-[0.98]
                touch-target
              `}
            >
              <div className="flex items-center gap-4">
                {/* Status Dot */}
                <div className={`w-4 h-4 rounded-full ${colors.dot}`} />

                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold ${colors.text}`}>
                    {journey.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {journey.subtitle}
                  </p>
                </div>

                {/* Score Badge */}
                <div className="text-right">
                  <span className="text-sm font-medium text-[var(--color-text-muted)]">
                    {journey.scoreRange}
                  </span>
                  <div className="mt-1">
                    <svg
                      className="w-5 h-5 text-[var(--color-text-muted)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Info Section */}
      <div className={`mt-8 p-4 bg-white rounded-xl ${isMobile ? '' : 'max-w-md mx-auto'}`}>
        <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">
          About This Prototype
        </h4>
        <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
          <li>• LAP eligibility requires 650+ credit score</li>
          <li>• Journey 1: Pre-approved user flow with E-NACH setup</li>
          <li>• Journey 2: Score building with AI-customized plans</li>
          <li>• Journey 3: Quick bridge plan for almost-eligible users</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-sm text-[var(--color-text-muted)]">
        Powered by Credit Pulse
      </div>
    </div>
  );
}
