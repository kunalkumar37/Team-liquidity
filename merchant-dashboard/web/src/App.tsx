import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Overview from './pages/Overview';
import Payments from './pages/Payments';
import Settlements from './pages/Settlements';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import LiquidityHub from './pages/LiquidityHub';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-area">
        <TopBar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/settlements" element={<Settlements />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/liquidity-hub" element={<LiquidityHub />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
