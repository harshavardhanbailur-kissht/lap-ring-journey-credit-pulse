// Mock data for LAP Journey Prototype

export interface CreditFactor {
  id: string;
  name: string;
  value: string;
  status: 'excellent' | 'good' | 'average' | 'poor';
  impact: 'high' | 'medium' | 'low';
  description: string;
}

export interface UserProfile {
  id: string;
  name: string;
  score: number;
  scoreStatus: 'excellent' | 'good' | 'average' | 'needs_improvement';
  lastUpdated: string;
  factors: CreditFactor[];
  lapEligible: boolean;
  gapToEligibility: number;
  estimatedTimeToEligibility?: string;
}

export interface CustomPlan {
  id: string;
  name: string;
  targetScore: number;
  currentScore: number;
  gap: number;
  estimatedTimeline: string;
  monthlyPrice: number;
  actions: PlanAction[];
  features: string[];
}

export interface PlanAction {
  id: string;
  title: string;
  description: string;
  potentialGain: number;
  priority: 'high' | 'medium' | 'low';
  actionType: 'payment' | 'behavior' | 'loan';
}

export interface LoanProduct {
  id: string;
  name: string;
  provider: 'ring' | 'kissht';
  minAmount: number;
  maxAmount: number;
  tenure: string;
  roi: string;
  description: string;
}

// LAP eligibility threshold
export const LAP_ELIGIBILITY_SCORE = 650;

// Score status thresholds
export const getScoreStatus = (score: number): UserProfile['scoreStatus'] => {
  if (score >= 750) return 'excellent';
  if (score >= 700) return 'good';
  if (score >= 650) return 'average';
  return 'needs_improvement';
};

export const getScoreLabel = (status: UserProfile['scoreStatus']): string => {
  switch (status) {
    case 'excellent': return 'Excellent';
    case 'good': return 'Good';
    case 'average': return 'Average';
    case 'needs_improvement': return 'Needs Improvement';
  }
};

// Journey 1: Good Score User (Rahul - 780)
export const goodScoreUser: UserProfile = {
  id: 'user-1',
  name: 'Rahul',
  score: 780,
  scoreStatus: 'excellent',
  lastUpdated: '23 Jan 2025',
  lapEligible: true,
  gapToEligibility: 0,
  factors: [
    {
      id: 'f1',
      name: 'On-time payments',
      value: '100%',
      status: 'excellent',
      impact: 'high',
      description: 'You have never missed a payment. Keep it up!'
    },
    {
      id: 'f2',
      name: 'Credit utilization',
      value: '16.12%',
      status: 'excellent',
      impact: 'high',
      description: 'Your credit utilization is well below 30%. Excellent!'
    },
    {
      id: 'f3',
      name: 'Credit age',
      value: '5y 2m',
      status: 'good',
      impact: 'medium',
      description: 'Your credit history is established. Older accounts help.'
    },
    {
      id: 'f4',
      name: 'New credit accounts',
      value: '0',
      status: 'excellent',
      impact: 'low',
      description: 'No new credit inquiries in the last 6 months.'
    },
    {
      id: 'f5',
      name: 'Credit mix',
      value: '3',
      status: 'good',
      impact: 'low',
      description: 'Good mix of credit types (cards, loans).'
    }
  ]
};

// Journey 2: Poor Score User (Priya - 520)
export const poorScoreUser: UserProfile = {
  id: 'user-2',
  name: 'Priya',
  score: 520,
  scoreStatus: 'needs_improvement',
  lastUpdated: '23 Jan 2025',
  lapEligible: false,
  gapToEligibility: 130,
  estimatedTimeToEligibility: '5-6 months',
  factors: [
    {
      id: 'f1',
      name: 'On-time payments',
      value: '65%',
      status: 'poor',
      impact: 'high',
      description: '3 missed payments in last 12 months. Pay on time!'
    },
    {
      id: 'f2',
      name: 'Credit utilization',
      value: '78%',
      status: 'poor',
      impact: 'high',
      description: 'Your utilization is very high. Aim for below 30%.'
    },
    {
      id: 'f3',
      name: 'Credit age',
      value: '8m',
      status: 'poor',
      impact: 'medium',
      description: 'Your credit history is very short. Give it time.'
    },
    {
      id: 'f4',
      name: 'New credit accounts',
      value: '4',
      status: 'poor',
      impact: 'low',
      description: 'Too many recent credit inquiries. Avoid new applications.'
    },
    {
      id: 'f5',
      name: 'Credit mix',
      value: '1',
      status: 'average',
      impact: 'low',
      description: 'Only one type of credit. Consider diversifying.'
    }
  ]
};

// Journey 3: Almost There User (Amit - 635)
export const almostThereUser: UserProfile = {
  id: 'user-3',
  name: 'Amit',
  score: 635,
  scoreStatus: 'average',
  lastUpdated: '23 Jan 2025',
  lapEligible: false,
  gapToEligibility: 15,
  estimatedTimeToEligibility: '4-6 weeks',
  factors: [
    {
      id: 'f1',
      name: 'On-time payments',
      value: '95%',
      status: 'good',
      impact: 'high',
      description: '1 late payment in last 12 months. Almost perfect!'
    },
    {
      id: 'f2',
      name: 'Credit utilization',
      value: '35%',
      status: 'average',
      impact: 'high',
      description: 'Slightly above ideal. Pay down ₹5,000 to improve.'
    },
    {
      id: 'f3',
      name: 'Credit age',
      value: '1y 10m',
      status: 'average',
      impact: 'medium',
      description: 'Building up nicely. Keep old accounts active.'
    },
    {
      id: 'f4',
      name: 'New credit accounts',
      value: '1',
      status: 'good',
      impact: 'low',
      description: 'Recent inquiry will age out in 30 days.'
    },
    {
      id: 'f5',
      name: 'Credit mix',
      value: '2',
      status: 'good',
      impact: 'low',
      description: 'Good mix of credit card and loan.'
    }
  ]
};

// AI-Generated Custom Plan for Poor Score User
export const poorScoreCustomPlan: CustomPlan = {
  id: 'plan-2',
  name: 'Score Builder Plan',
  targetScore: 650,
  currentScore: 520,
  gap: 130,
  estimatedTimeline: '5 months',
  monthlyPrice: 599,
  actions: [
    {
      id: 'a1',
      title: 'Reduce credit utilization',
      description: 'Pay ₹15,000 towards your credit card balance',
      potentialGain: 35,
      priority: 'high',
      actionType: 'payment'
    },
    {
      id: 'a2',
      title: 'Clear overdue payments',
      description: '2 accounts have overdue amounts. Clear them immediately.',
      potentialGain: 40,
      priority: 'high',
      actionType: 'payment'
    },
    {
      id: 'a3',
      title: 'Build credit age',
      description: 'Take a ₹10K Kissht Ring loan and pay EMIs on time',
      potentialGain: 25,
      priority: 'medium',
      actionType: 'loan'
    },
    {
      id: 'a4',
      title: 'Avoid new credit applications',
      description: 'Don\'t apply for new cards/loans for 6 months',
      potentialGain: 15,
      priority: 'medium',
      actionType: 'behavior'
    }
  ],
  features: [
    'Weekly score updates',
    'EMI reminders (DPD protection)',
    'Unlimited score simulations',
    'Personal credit coach',
    'Priority LAP application'
  ]
};

// AI-Generated Bridge Plan for Almost There User
export const almostThereBridgePlan: CustomPlan = {
  id: 'plan-3',
  name: 'Fast-Track Bridge Plan',
  targetScore: 650,
  currentScore: 635,
  gap: 15,
  estimatedTimeline: '4-6 weeks',
  monthlyPrice: 299,
  actions: [
    {
      id: 'a1',
      title: 'Pay ₹5,000 on your credit card',
      description: 'Reduces utilization from 35% to 28%',
      potentialGain: 12,
      priority: 'high',
      actionType: 'payment'
    },
    {
      id: 'a2',
      title: 'Don\'t apply for new credit',
      description: 'Wait 30 days for recent enquiry to age',
      potentialGain: 5,
      priority: 'medium',
      actionType: 'behavior'
    }
  ],
  features: [
    'Daily score tracking',
    'Instant alert when you hit 650',
    'LAP application priority queue',
    'EMI reminders'
  ]
};

// Loan Products
export const loanProducts: LoanProduct[] = [
  {
    id: 'loan-1',
    name: 'Kissht Ring Power Loan',
    provider: 'ring',
    minAmount: 5000,
    maxAmount: 500000,
    tenure: 'Up to 24 months',
    roi: '15-24%',
    description: 'Quick disbursal, flexible EMI options'
  },
  {
    id: 'loan-2',
    name: 'Kissht Ring Personal Loan',
    provider: 'kissht',
    minAmount: 10000,
    maxAmount: 200000,
    tenure: 'Up to 18 months',
    roi: '14-22%',
    description: 'No hidden charges, instant approval'
  },
  {
    id: 'loan-3',
    name: 'Kissht Ring Fast Cash',
    provider: 'ring',
    minAmount: 1000,
    maxAmount: 50000,
    tenure: 'Up to 6 months',
    roi: '18-26%',
    description: 'Emergency funds in minutes'
  }
];

// EMI Reminder Data
export interface EMIReminder {
  loanName: string;
  amount: number;
  dueDate: string;
  daysUntilDue: number;
  bankAccount: string;
  accountLastFour: string;
}

export const emiReminder: EMIReminder = {
  loanName: 'LAP Loan',
  amount: 25000,
  dueDate: '5th March 2025',
  daysUntilDue: 3,
  bankAccount: 'Your Bank',
  accountLastFour: '4521'
};

// E-NACH Alert Data
export interface ENACHAlert {
  bankName: string;
  accountLastFour: string;
  requiredBalance: number;
  currentBalance: number;
  shortfall: number;
  dueDate: string;
}

export const enachAlert: ENACHAlert = {
  bankName: 'Your Bank',
  accountLastFour: '4521',
  requiredBalance: 25000,
  currentBalance: 18500,
  shortfall: 6500,
  dueDate: '5th March'
};

// Score Simulator Scenarios
export const simulatorScenarios = [
  {
    id: 'sim-1',
    title: 'Got a new loan?',
    icon: '🏦',
    impact: -15,
    description: 'New loan applications can temporarily lower your score'
  },
  {
    id: 'sim-2',
    title: 'Missed an EMI?',
    icon: '❌',
    impact: -100,
    description: 'Missing payments severely impacts your score'
  },
  {
    id: 'sim-3',
    title: 'Paid bills in advance?',
    icon: '💰',
    impact: +10,
    description: 'Paying before due date shows responsibility'
  },
  {
    id: 'sim-4',
    title: 'Cleared all dues?',
    icon: '✅',
    impact: +45,
    description: 'Clearing outstanding balances boosts your score'
  }
];

// LAP Loan Options
export interface LAPOption {
  minAmount: number;
  maxAmount: number;
  tenure: string[];
  roi: string;
}

export const lapLoanOptions: LAPOption = {
  minAmount: 2500000, // 25 Lakhs
  maxAmount: 5000000, // 50 Lakhs
  tenure: ['5 years', '10 years', '15 years', '20 years'],
  roi: '9.5% - 12%'
};
