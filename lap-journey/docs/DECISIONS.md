# Architecture Decisions

## Decision Log

### 2025-01-24: Tailwind v4 Configuration
**Decision**: Use Tailwind v4 with @theme directive for custom colors
**Reason**: Tailwind v4 uses CSS-native configuration, simpler setup
**Alternative considered**: Tailwind v3 with tailwind.config.js

### 2025-01-24: Mobile-First Approach
**Decision**: Build mobile components first, add desktop variants
**Reason**: 49% users operate one-handed, mobile is primary use case
**Impact**: All components start with mobile styles, use media queries for desktop

### 2025-01-24: Separate Layout Components
**Decision**: Create MobileLayout and DesktopLayout as separate components
**Reason**: Different navigation patterns (bottom vs side), cleaner code
**Alternative considered**: Single responsive layout with conditional rendering

### 2025-01-24: No External UI Library
**Decision**: Build custom components matching Ring design system
**Reason**: Need exact match to Ring app patterns, full control over styling
**Alternative considered**: Using shadcn/ui or similar

### 2025-01-24: Context Files for Documentation
**Decision**: Separate docs/ files instead of single README
**Reason**: Prevent context overload during implementation
**Files**:
- CONTEXT.md - Business requirements
- DESIGN_REFERENCE.md - Ring app patterns
- MOBILE_SPEC.md - Mobile layouts
- DESKTOP_SPEC.md - Desktop layouts
- TODO.md - Task tracking
- DECISIONS.md - This file

### 2025-01-24: AI-Customized Plans vs Preset Tiers
**Decision**: Plans are "AI-generated" with personalized actions
**Reason**: User requirement - no preset tiers, each plan tailored to user profile
**Implementation**: Mock data simulates AI analysis with user-specific recommendations

### 2025-01-24: Responsive Layout Wrapper
**Decision**: Create a unified Layout component that auto-switches between Mobile/Desktop
**Reason**: Simpler App.tsx, automatic device detection via useMediaQuery hook
**Pattern**: Layout wraps Routes, checks isMobile, renders appropriate layout shell

### 2025-01-24: Score Gauge Animation
**Decision**: Use CSS + requestAnimationFrame for score animation
**Reason**: No external dependencies, smooth animation, works with SSR
**Alternative considered**: Framer Motion (adds bundle size)

### 2025-01-24: Navigation Structure
**Decision**: 3 tabs - Home, Loans, Credit Pulse
**Reason**: Matches Ring app pattern from PDF analysis
**Mobile**: Bottom fixed nav (56px + safe area)
**Desktop**: Side nav (240px width)

### 2025-01-24: Touch Targets
**Decision**: All interactive elements minimum 44x44px
**Reason**: Mobile UX Transformer v3 best practices, iOS HIG compliance
**Implementation**: .touch-target and .icon-button CSS classes in index.css

### 2025-01-24: Safe Area Handling
**Decision**: Use env(safe-area-inset-*) for iOS notch/home indicator
**Reason**: Proper rendering on iPhone X and later
**Applied**: Bottom nav padding, content area margins

## Resolved Questions

### Should animations use CSS or Framer Motion?
**Answer**: CSS + requestAnimationFrame
**Reason**: Lighter weight, no extra dependencies for prototype

### Should we add dark mode support?
**Answer**: Not for prototype
**Reason**: Focus on core functionality first, can add later

## Project Statistics

| Metric | Count |
|--------|-------|
| Total Screens | 21 |
| Journey 1 (Good Score) | 6 screens |
| Journey 2 (Poor Score) | 8 screens |
| Journey 3 (Almost There) | 7 screens |
| Reusable Components | 12 |
| Layout Variants | 2 (Mobile + Desktop) |
| Mock Data Types | 8 interfaces |
