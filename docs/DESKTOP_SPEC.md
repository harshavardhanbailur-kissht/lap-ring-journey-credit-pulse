# Desktop Specification

## Viewport
- **Min width**: 768px (tablet landscape)
- **Optimal**: 1280px
- **Max content width**: 1200px

## Layout Structure
```
┌────────────────────────────────────────────────────────┐
│  Logo                         Search    Profile    ⚙️  │
├──────────┬─────────────────────────────────────────────┤
│          │                                             │
│  🏠 Home │            MAIN CONTENT                     │
│          │                                             │
│  📋 Loans│    ┌─────────────┐  ┌─────────────┐        │
│          │    │ Score Gauge │  │ Quick Stats │        │
│  📊 Credit│   └─────────────┘  └─────────────┘        │
│     Pulse│                                             │
│          │    ┌─────────────────────────────┐         │
│  ─────── │    │     Credit Factors          │         │
│  Settings│    └─────────────────────────────┘         │
│          │                                             │
└──────────┴─────────────────────────────────────────────┘
   240px                    Fluid
```

## Navigation
- **Type**: Side navigation
- **Width**: 240px
- **Position**: Fixed left
- **Collapsible**: Optional

## Header
- **Height**: 64px
- **Logo**: Left
- **Search**: Center (optional)
- **Profile/Actions**: Right

## Component Behavior

### ScoreGauge
- Compact size (fits in card grid)
- Placed in left column
- Hover for additional info

### CreditFactors
- Table or grid layout
- Sortable columns (optional)
- Expandable rows

### CTAs (Buttons)
- Inline positioning
- Auto width (content-based)
- Context-positioned (not full-width)

### Cards
- Grid layout (2-3 columns)
- Max-width containers
- Consistent heights in rows

## Grid System
```css
.desktop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
```

## Breakpoints
```css
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large */ }
```
