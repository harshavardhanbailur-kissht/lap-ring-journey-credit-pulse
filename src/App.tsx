import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import JourneySelector from './pages/JourneySelector';

// Journey 1 imports (Good Score)
import J1CreditHome from './pages/journey1/CreditHome';
import J1LAPApproved from './pages/journey1/LAPApproved';
import J1ApplicationStatus from './pages/journey1/ApplicationStatus';
import J1ENACHSetup from './pages/journey1/ENACHSetup';
import J1EMIReminder from './pages/journey1/EMIReminder';
import J1BTTopUp from './pages/journey1/BTTopUp';

// Journey 2 imports (Poor Score)
import J2CreditHome from './pages/journey2/CreditHome';
import J2NotEligible from './pages/journey2/NotEligible';
import J2AIAnalysis from './pages/journey2/AIAnalysis';
import J2CustomPlan from './pages/journey2/CustomPlan';
import J2PlanDetails from './pages/journey2/PlanDetails';
import J2LoanProducts from './pages/journey2/LoanProducts';
import J2DPDGuardian from './pages/journey2/DPDGuardian';
import J2ProgressTracker from './pages/journey2/ProgressTracker';

// Journey 3 imports (Almost There)
import J3CreditHome from './pages/journey3/CreditHome';
import J3SoClose from './pages/journey3/SoClose';
import J3AIGapAnalysis from './pages/journey3/AIGapAnalysis';
import J3BridgePlan from './pages/journey3/BridgePlan';
import J3QuickWins from './pages/journey3/QuickWins';
import J3ScoreSimulator from './pages/journey3/ScoreSimulator';
import J3ReserveLAP from './pages/journey3/ReserveLAP';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Entry Point */}
          <Route path="/" element={<JourneySelector />} />

          {/* Journey 1: Good Score (750+) - LAP Approved */}
          <Route path="/journey1">
            <Route index element={<J1CreditHome />} />
            <Route path="credit-home" element={<J1CreditHome />} />
            <Route path="lap-approved" element={<J1LAPApproved />} />
            <Route path="application-status" element={<J1ApplicationStatus />} />
            <Route path="enach-setup" element={<J1ENACHSetup />} />
            <Route path="emi-reminder" element={<J1EMIReminder />} />
            <Route path="bt-topup" element={<J1BTTopUp />} />
          </Route>

          {/* Journey 2: Poor Score (<600) - Build Score */}
          <Route path="/journey2">
            <Route index element={<J2CreditHome />} />
            <Route path="credit-home" element={<J2CreditHome />} />
            <Route path="not-eligible" element={<J2NotEligible />} />
            <Route path="ai-analysis" element={<J2AIAnalysis />} />
            <Route path="custom-plan" element={<J2CustomPlan />} />
            <Route path="plan-details" element={<J2PlanDetails />} />
            <Route path="loan-products" element={<J2LoanProducts />} />
            <Route path="dpd-guardian" element={<J2DPDGuardian />} />
            <Route path="progress-tracker" element={<J2ProgressTracker />} />
          </Route>

          {/* Journey 3: Almost There (600-649) - Bridge Gap */}
          <Route path="/journey3">
            <Route index element={<J3CreditHome />} />
            <Route path="credit-home" element={<J3CreditHome />} />
            <Route path="so-close" element={<J3SoClose />} />
            <Route path="ai-gap-analysis" element={<J3AIGapAnalysis />} />
            <Route path="bridge-plan" element={<J3BridgePlan />} />
            <Route path="quick-wins" element={<J3QuickWins />} />
            <Route path="score-simulator" element={<J3ScoreSimulator />} />
            <Route path="reserve-lap" element={<J3ReserveLAP />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
