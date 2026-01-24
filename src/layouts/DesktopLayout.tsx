import type { ReactNode } from 'react';
import SideNav from '../components/ui/SideNav';

interface DesktopLayoutProps {
  children: ReactNode;
  showSideNav?: boolean;
  journey?: 'journey1' | 'journey2' | 'journey3';
}

export default function DesktopLayout({
  children,
  showSideNav = true,
  journey = 'journey1'
}: DesktopLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-ring-light-bg)]">
      {showSideNav && <SideNav journey={journey} />}
      <main className={showSideNav ? 'ml-60' : ''}>
        <div className="max-w-4xl mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
