# Mobile Specification

## Viewport
- **Min width**: 375px (iPhone SE)
- **Max width**: 428px (iPhone 14 Pro Max)
- **Container**: Centered with max-width

## Layout Structure
```
┌─────────────────────────────────┐
│ ← Title                    ⚙️  │ ← Header (56px)
├─────────────────────────────────┤
│                                 │
│        SCROLLABLE CONTENT       │
│                                 │
│     (Single column, cards)      │
│                                 │
├─────────────────────────────────┤
│  🏠  │  📋  │  📊               │ ← Bottom Nav (56px + safe)
│ Home │ Loans │ Credit           │
└─────────────────────────────────┘
```

## Navigation
- **Type**: Bottom tab bar
- **Tabs**: 3 (Home, Loans, Credit Pulse)
- **Height**: 56px + safe area inset
- **Position**: Fixed at bottom

## Header
- **Height**: 56px
- **Back button**: Left side (when navigating)
- **Title**: Center
- **Actions**: Right side (optional)

## Component Behavior

### ScoreGauge
- Full width
- Centered in card
- Touch on info icon for details

### CreditFactors
- Full-width stacked list
- 56px row height
- Tap row for details

### CTAs (Buttons)
- Full-width (100%)
- 48px height minimum
- Fixed at bottom of screen when primary

### Cards
- Full-width minus 16px padding each side
- 12px border radius
- Vertical stack

## Touch Targets
- All interactive: ≥44×44px
- Spacing between: ≥8px

## Safe Areas
```css
padding-bottom: env(safe-area-inset-bottom);
padding-top: env(safe-area-inset-top);
```
