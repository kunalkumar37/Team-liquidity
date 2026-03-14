import { useState } from 'react';
import './Payments.css';

type TabType = 'all' | 'captured' | 'pending' | 'failed';

const Payments = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'captured', label: 'Captured' },
    { key: 'pending', label: 'Pending' },
    { key: 'failed', label: 'Failed' },
  ];

  return (
    <div className="payments">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__left">
          <div className="page-header__icon page-header__icon--green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a8c5b" strokeWidth="2">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <path d="M2 10h20"/>
            </svg>
          </div>
          <div>
            <h1 className="page-header__title">Payments</h1>
            <p className="page-header__subtitle">This is where you see all your captured, refunded and failed payments.</p>
          </div>
        </div>
        <div className="page-header__actions">
          <button className="btn btn--outline" id="verify-imei-btn">Verify IMEI Serial No.</button>
          <button className="btn btn--outline" id="upload-bulk-refunds-btn">Upload Bulk Refunds</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="payments-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`payments-tab ${activeTab === tab.key ? 'payments-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
            id={`tab-${tab.key}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="payments-filters">
        <div className="payments-daterange" id="payments-daterange">
          <div className="date-input">
            <span>March 8th,2026 00:00:00</span>
          </div>
          <span className="date-arrow">→</span>
          <div className="date-input">
            <span>March 14th,2026 12:45:33</span>
          </div>
          <svg className="date-calendar-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
          </svg>
        </div>
        <button className="filter-btn" id="filter-by-btn">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"/>
          </svg>
          Filter By
        </button>
        <button className="filter-btn" id="bulk-refund-history-btn">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
          </svg>
          Bulk Refund Upload History
        </button>
        <button className="filter-btn" id="customize-columns-btn">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"/>
          </svg>
          Customize Columns
        </button>
      </div>

      {/* Empty State */}
      <div className="empty-state">
        <div className="empty-state__illustration">
          <svg width="280" height="200" viewBox="0 0 280 200" fill="none">
            {/* Ground/shadow */}
            <ellipse cx="140" cy="185" rx="100" ry="8" fill="#f3f4f6"/>
            
            {/* Robot body */}
            <rect x="110" y="90" width="60" height="70" rx="8" fill="#e5e7eb"/>
            <rect x="120" y="100" width="40" height="20" rx="4" fill="#d1d5db"/>
            
            {/* Robot head */}
            <rect x="115" y="55" width="50" height="40" rx="8" fill="#e5e7eb"/>
            <circle cx="130" cy="72" r="4" fill="#9ca3af"/>
            <circle cx="150" cy="72" r="4" fill="#9ca3af"/>
            <path d="M130 82 h20" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
            
            {/* Robot antenna */}
            <line x1="140" y1="55" x2="140" y2="42" stroke="#9ca3af" strokeWidth="2"/>
            <circle cx="140" cy="38" r="4" fill="#d1d5db"/>
            
            {/* X mark */}
            <circle cx="165" cy="100" r="16" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2"/>
            <path d="M159 94l12 12M171 94l-12 12" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round"/>
            
            {/* Question mark */}
            <circle cx="152" cy="40" r="12" fill="none" stroke="#d1d5db" strokeWidth="1.5"/>
            <text x="148" y="45" fill="#9ca3af" fontSize="14" fontWeight="bold">?</text>
            
            {/* Person */}
            <circle cx="85" cy="120" r="12" fill="#e5e7eb"/>
            <path d="M75 145c0-8 4-14 10-14s10 6 10 14" fill="#d1d5db"/>
            <rect x="70" y="145" width="30" height="35" rx="4" fill="#374151"/>
            <rect x="72" y="148" width="26" height="12" rx="2" fill="#4b5563"/>
          </svg>
        </div>
        <h3 className="empty-state__title">There are no transactions here!</h3>
        <p className="empty-state__desc">Your transactions details will show up here!</p>
      </div>

      {/* Product Tour */}
      <div className="product-tour" id="product-tour-btn">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
        </svg>
        <span>Product Tour</span>
      </div>
    </div>
  );
};

export default Payments;
