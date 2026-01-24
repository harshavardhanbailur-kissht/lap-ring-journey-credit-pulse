export type ProductType = 'ring-loan' | 'connexo-card';

export interface ProductConfig {
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    guidelines: string[];
    eligibility: string[];
    warnings: string[];
}

export const productConfigs: Record<ProductType, ProductConfig> = {
    'ring-loan': {
        title: 'Apply for Loan on Ring',
        description: 'Get instant personal loans up to ₹5 Lakhs',
        icon: '💰',
        bgColor: 'bg-blue-50',
        borderColor: 'border-[var(--color-ring-blue)]',
        textColor: 'text-[var(--color-ring-blue)]',
        guidelines: [
            'Borrow only what you can repay',
            'EMIs should not exceed 30% of your monthly income',
            'Missing payments will negatively impact your credit score',
            'Consider your existing debt obligations before applying'
        ],
        eligibility: [
            'Age: 21-58 years',
            'Minimum income: ₹15,000/month',
            'Valid ID and address proof required',
            'Bank account with 6+ months history'
        ],
        warnings: [
            'Late payments attract penalties and hurt your credit score',
            'Defaulting may lead to legal action',
            'Interest rates vary based on your credit profile'
        ]
    },
    'connexo-card': {
        title: 'Apply for Credit Card on Connexo',
        description: 'Build credit with a secured credit card',
        icon: '💳',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-500',
        textColor: 'text-purple-600',
        guidelines: [
            'Keep credit utilization below 30%',
            'Pay full balance before due date to avoid interest',
            'Credit cards are for convenience, not borrowing',
            'Set up auto-pay to never miss a payment'
        ],
        eligibility: [
            'Age: 18+ years',
            'Valid PAN and Aadhaar required',
            'Fixed deposit may be required for secured cards',
            'No recent credit rejections'
        ],
        warnings: [
            'High utilization hurts your credit score',
            'Minimum payments lead to debt trap',
            'Annual fees may apply after first year'
        ]
    }
};
