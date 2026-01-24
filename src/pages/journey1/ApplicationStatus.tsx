import { useNavigate } from 'react-router-dom';

const steps = [
  { id: 1, title: 'Application', status: 'completed', date: 'Jan 23, 2025' },
  { id: 2, title: 'Documents', status: 'completed', date: 'Jan 24, 2025' },
  { id: 3, title: 'Verification', status: 'current', date: 'In Progress' },
  { id: 4, title: 'Approved', status: 'pending', date: '' },
  { id: 5, title: 'Disbursed', status: 'pending', date: '' },
];

export default function ApplicationStatus() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Application Status</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Application Card */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Application ID</p>
              <p className="font-semibold">LAP-2025-001234</p>
            </div>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
              In Progress
            </span>
          </div>

          {/* Stepper */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start mb-6 last:mb-0">
                {/* Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-4 top-8 w-0.5 h-14 ${
                      step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                    style={{ marginTop: index * 80 }}
                  />
                )}

                {/* Circle */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    step.status === 'completed'
                      ? 'bg-green-500 text-white'
                      : step.status === 'current'
                      ? 'bg-[var(--color-ring-blue)] text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {step.status === 'completed' ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>

                {/* Content */}
                <div className="ml-4 flex-1">
                  <p className={`font-medium ${
                    step.status === 'pending' ? 'text-gray-400' : 'text-[var(--color-text-primary)]'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <p className="font-medium text-blue-800">Verification in Progress</p>
              <p className="text-sm text-blue-600 mt-1">
                Our team is verifying your property documents. This usually takes 2-3 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <button
          onClick={() => navigate('/journey1/enach-setup')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Set Up E-NACH
        </button>
      </div>
    </div>
  );
}
