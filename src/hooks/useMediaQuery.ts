import { useState, useEffect } from 'react';

/**
 * Hook to detect responsive breakpoints
 * Mobile-first approach
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);

    // Initial value is already set in useState initializer

    // Create listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

/**
 * Convenience hooks for common breakpoints
 */
export function useIsMobile(): boolean {
  return !useMediaQuery('(min-width: 768px)');
}

export function useIsTablet(): boolean {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return isTablet && !isDesktop;
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)');
}

export function useIsLargeDesktop(): boolean {
  return useMediaQuery('(min-width: 1280px)');
}

/**
 * Get current platform type
 */
export type Platform = 'mobile' | 'tablet' | 'desktop';

export function usePlatform(): Platform {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();

  if (isDesktop) return 'desktop';
  if (isTablet) return 'tablet';
  return 'mobile';
}
