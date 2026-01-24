import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function DPDGuardian() {
  const navigate = useNavigate();
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [balanceAlertEnabled, setBalanceAlertEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">Kissht Ring DPD Guardian</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Hero */}
        <div className="bg-white rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🛡️</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            Never Miss a Payment
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            DPD Guardian protects your credit score by ensuring you never miss an EMI
          </p>
        </div>

        {/* DPD Warning */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-medium text-red-800">What is DPD?</p>
              <p className="text-sm text-red-700 mt-1">
                Days Past Due (DPD) is recorded when you miss an EMI. Even 1 DPD can drop your score by 50-100 points and stay on your report for 7 years!
              </p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Protection Settings</h3>

          <div className="space-y-4">
            {/* EMI Reminders */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔔</span>
                <div>
                  <p className="font-medium">EMI Reminders</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">Get notified 3, 2, and 1 day before due date</p>
                </div>
              </div>
              <button
                onClick={() => setReminderEnabled(!reminderEnabled)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  reminderEnabled ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  reminderEnabled ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            {/* Balance Alerts */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="font-medium">Low Balance Alerts</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">Alert when balance is below EMI amount</p>
                </div>
              </div>
              <button
                onClick={() => setBalanceAlertEnabled(!balanceAlertEnabled)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  balanceAlertEnabled ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  balanceAlertEnabled ? 'translate-x-6' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Link Bank */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">Link Your Bank Account</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Connect your bank to get real-time balance alerts before EMI due dates
          </p>

          <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-[var(--color-text-secondary)] flex items-center justify-center gap-2">
            <span className="text-xl">🏦</span>
            Link Bank Account
          </button>
        </div>

        {/* Stats */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-700">
            <span className="font-semibold">95% of Kissht Ring Credit Pulse users</span> with DPD Guardian enabled have maintained 0 DPD for 12+ months
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey2/progress-tracker')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Activate DPD Guardian
        </button>
      </div>
    </div>
  );
}
