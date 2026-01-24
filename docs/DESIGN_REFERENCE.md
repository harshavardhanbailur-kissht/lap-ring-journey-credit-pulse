# Design Reference

## Sources
1. **Ring User App 2025.pdf** - 240 pages of Ring app screens
2. **Mobile UX Transformer v3** - Mobile optimization patterns

---

## LEARN FROM (Implement Exactly)

### 1. Score Gauge Component
**Source**: Ring App pages 1, 6, 16, 121

- Semicircle gauge with gradient (red→yellow→green)
- Score range: 300-850
- Large bold number centered
- Status label: "Excellent", "Good", "Average", "Needs Improvement"
- Info icon next to label
- "Last updated" date
- "Powered by EQUIFAX" branding

### 2. Credit Factors List
**Source**: Ring App pages 6, 16, 121

- Factor name + Value + Status + Arrow
- Impact level below (High/Medium/Low)
- Status colors: Green (Excellent), Yellow (Average), Red (Poor)
- Clickable rows with chevron

### 3. Score Simulator
**Source**: Ring App pages 6, 16, 31

- 2x2 Grid of "What if" cards
- Scenarios: Got new loan, Missed EMI, Paid bills in advance, Cleared dues
- Prediction counter below
- Interactive tap to simulate

### 4. EMI Due Alert
**Source**: Ring App page 86

- Prominent banner at top
- Loan name + EMI amount + Due date
- Tap to pay action

### 5. Bottom Navigation
**Source**: All Ring App pages

- 3 tabs: Home, Loans, Credit Pulse
- Icon + label always
- Active state: Blue icon + text
- Fixed at bottom with safe area

---

## INSPIRATION ONLY (Adapt)

### Home Screen Layout
- LAP eligibility banner instead of Power Loan
- Score-to-LAP progress indicator
- E-NACH status card

### Payment Success
- Green checkmark animation
- Use for subscription confirmation

---

## Design System

### Colors
```css
/* Primary */
--ring-blue: #3B5BDB
--ring-dark-blue: #1E3A8A
--ring-navy: #1E2A4A

/* Backgrounds */
--ring-light-bg: #F8FAFC
--ring-card-bg: #FFFFFF

/* Status */
--ring-excellent: #22C55E
--ring-good: #84CC16
--ring-average: #F59E0B
--ring-poor: #EF4444

/* Text */
--text-primary: #1E293B
--text-secondary: #64748B
--text-muted: #94A3B8
```

### Typography
- Scores: 32-48px, extra bold
- Headings: Bold, dark navy
- Body: Regular, gray
- Font: System default

### Spacing
- Card padding: 16px
- Section gaps: 24px
- List item height: 56px
- Button height: 48px
- Bottom nav: 56px + safe area

### Border Radius
- Cards: 12px
- Buttons: 8px or full rounded
- Badges: Full pill

---

## Mobile UX Rules

### Thumb Zone (49% one-handed usage)
- Primary CTAs: Bottom 40% of screen
- Navigation: Fixed at bottom
- Destructive actions: Top corners

### Touch Targets
- Minimum: 44×44px
- Recommended: 48×48px
- Spacing: 8px minimum between targets

### Bottom Navigation CSS
```css
.bottom-nav {
  position: fixed;
  bottom: 0;
  height: 56px;
  padding-bottom: env(safe-area-inset-bottom);
}

.nav-item {
  min-width: 64px;
  min-height: 48px;
}
```

### iOS Zoom Prevention
```css
input, select, textarea {
  font-size: 16px; /* Prevents zoom on focus */
}
```
