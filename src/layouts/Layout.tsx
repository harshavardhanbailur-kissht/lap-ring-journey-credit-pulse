import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/useMediaQuery';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

type JourneyType = 'journey1' | 'journey2' | 'journey3';

export default function Layout({ children, showNav = true }: LayoutProps) {
  const isMobile = useIsMobile();
  const location = useLocation();

  // Determine current journey from path
  const getJourney = (): JourneyType => {
    if (location.pathname.startsWith('/journey2')) return 'journey2';
    if (location.pathname.startsWith('/journey3')) return 'journey3';
    return 'journey1';
  };

  // Don't show nav on entry page
  const isEntryPage = location.pathname === '/';

  if (isMobile) {
    return (
      <MobileLayout
        journey={getJourney()}
        showBottomNav={showNav && !isEntryPage}
      >
        {children}
      </MobileLayout>
    );
  }

  return (
    <DesktopLayout
      journey={getJourney()}
      showSideNav={showNav && !isEntryPage}
    >
      {children}
    </DesktopLayout>
  );
}
