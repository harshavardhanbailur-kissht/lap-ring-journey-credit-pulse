# Project Context

## Overview
LAP (Loan Against Property) journey prototype with Credit Pulse integration for Ring/Kissht.

## Business Requirements
- LAP loan eligibility threshold: **650 credit score**
- Target users: Existing Ring/Kissht customers
- Goal: Convert non-eligible users to eligible through Credit Pulse
- Key focus: **DPD Prevention** (Days Past Due)

## User Personas

### Journey 1: Rahul (Score 780)
- **Profile**: Good score, excellent payment history
- **Status**: Ready for LAP
- **Journey**: Pre-approved flow with E-NACH setup and EMI reminders

### Journey 2: Priya (Score 520)
- **Profile**: Needs improvement, missed payments, high utilization
- **Status**: Not eligible, needs 130+ points
- **Journey**: AI-customized Credit Pulse plan to build score

### Journey 3: Amit (Score 635)
- **Profile**: Good score, just 15 points away
- **Status**: Almost eligible
- **Journey**: Fast-track bridge plan with quick wins

## Key Metrics to Display
- Credit score (current vs required: 650)
- Gap to eligibility (points needed)
- Estimated time to eligibility
- DPD risk indicators
- Credit factors breakdown

## Credit Factors (5 factors from Equifax)
1. **On-time payments** - Impact: High
2. **Credit utilization** - Impact: High
3. **Credit age** - Impact: Medium
4. **New credit accounts** - Impact: Low
5. **Credit mix** - Impact: Low

## Constraints
- Prototype only (no real backend)
- All data is mock/dummy
- Mobile-first, desktop supported
- Ring/Kissht brand compliance required

## Technical Decisions
- React 18 + Vite + TypeScript
- Tailwind CSS v4 with custom Ring colors
- React Router v6 for navigation
- No external UI library (custom components)
