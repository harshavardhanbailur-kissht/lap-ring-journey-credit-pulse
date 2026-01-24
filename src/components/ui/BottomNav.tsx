import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const LoansIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CreditPulseIcon = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 0 : 2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

interface BottomNavProps {
  journey?: 'journey1' | 'journey2' | 'journey3';
}

export default function BottomNav({ journey = 'journey1' }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <HomeIcon active={location.pathname === '/' || location.pathname === `/${journey}`} />,
      path: '/',
    },
    {
      id: 'loans',
      label: 'Loans',
      icon: <LoansIcon active={location.pathname.includes('loan') || location.pathname.includes('lap')} />,
      path: journey === 'journey2' ? '/journey2/loan-products' : `/${journey}/lap-approved`,
    },
    {
      id: 'credit',
      label: 'Credit Pulse',
      icon: <CreditPulseIcon active={location.pathname.includes('credit') || location.pathname.includes('plan')} />,
      path: `/${journey}/credit-home`,
    },
  ];

  const isActive = (item: NavItem) => {
    if (item.id === 'home') return location.pathname === '/' || location.pathname === `/${journey}`;
    if (item.id === 'loans') return location.pathname.includes('loan') || location.pathname.includes('lap');
    if (item.id === 'credit') return location.pathname.includes('credit') || location.pathname.includes('plan') || location.pathname.includes('dpd') || location.pathname.includes('progress');
    return false;
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50"
      style={{
        height: 'calc(56px + env(safe-area-inset-bottom, 0px))',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      <div className="max-w-[428px] mx-auto h-14 flex items-center justify-around">
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center min-w-16 min-h-12 gap-1 transition-colors ${
                active
                  ? 'text-[var(--color-ring-blue)]'
                  : 'text-[var(--color-nav-text)]'
              }`}
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
