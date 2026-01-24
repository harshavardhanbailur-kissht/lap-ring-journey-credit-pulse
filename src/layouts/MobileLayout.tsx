import type { ReactNode } from 'react';
import BottomNav from '../components/ui/BottomNav';

interface MobileLayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
  journey?: 'journey1' | 'journey2' | 'journey3';
}

export default function MobileLayout({
  children,
  showBottomNav = true,
  journey = 'journey1'
}: MobileLayoutProps) {
  return (
    <div className="container-mobile">
      <main className={showBottomNav ? 'content-with-nav' : ''}>
        {children}
      </main>
      {showBottomNav && <BottomNav journey={journey} />}
    </div>
  );
}
