import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const banks = [
  { id: 'hdfc', name: 'HDFC Bank', logo: '🏦' },
  { id: 'sbi', name: 'State Bank of India', logo: '🏛️' },
  { id: 'icici', name: 'ICICI Bank', logo: '🏦' },
  { id: 'axis', name: 'Axis Bank', logo: '🏦' },
];

export default function ENACHSetup() {
  const navigate = useNavigate();
  const [selectedBank, setSelectedBank] = useState('hdfc');

  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      <header className="bg-[var(--color-ring-dark-blue)] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="icon-button">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="font-semibold">E-NACH Setup</h1>
          <div className="w-6" />
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Info */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">What is E-NACH?</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Electronic National Automated Clearing House (E-NACH) allows automatic EMI deduction from your bank account on the due date.
          </p>
        </div>

        {/* Bank Selection */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Select Your Bank</h3>
          <div className="space-y-2">
            {banks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => setSelectedBank(bank.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                  selectedBank === bank.id
                    ? 'border-[var(--color-ring-blue)] bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <span className="text-2xl">{bank.logo}</span>
                <span className="font-medium">{bank.name}</span>
                {selectedBank === bank.id && (
                  <svg className="w-5 h-5 text-[var(--color-ring-blue)] ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mandate Details */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">Mandate Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">Maximum Amount</span>
              <span className="font-semibold">₹30,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">Frequency</span>
              <span className="font-semibold">Monthly</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">Debit Date</span>
              <span className="font-semibold">5th of every month</span>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-medium text-amber-800">Important</p>
              <p className="text-sm text-amber-700 mt-1">
                Ensure ₹25,000 balance in your account by 5th of every month to avoid DPD.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/journey1/emi-reminder')}
          className="w-full bg-[var(--color-ring-blue)] text-white py-4 rounded-xl font-semibold"
        >
          Authorize E-NACH
        </button>
      </div>
    </div>
  );
}
