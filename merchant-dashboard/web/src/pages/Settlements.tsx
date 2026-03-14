import { useState } from 'react';
import './Settlements.css';

const Settlements = () => {
  return (
    <div className="settlements">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header__left">
          <div className="page-header__icon page-header__icon--green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="#1a8c5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="page-header__title">Settlements</h1>
            <p className="page-header__subtitle">View all settlements made into your account(s) across payment gateways</p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="settlements-overview">
        <h3 className="settlements-overview__title">Overview</h3>
        
        <div className="settlements-overview__cards">
          <div className="settlement-card" id="todays-settlements-card">
            <div className="settlement-card__label">Today's Settlements</div>
            <div className="settlement-card__amount">
              <span className="settlement-card__rupee">₹</span>
              <span className="settlement-card__value">0.00</span>
            </div>
            <button className="settlement-card__link" id="transactions-settled-today-btn">
              0 Transaction Settled Today
            </button>
          </div>

          <div className="settlement-card" id="yet-to-be-settled-card">
            <div className="settlement-card__label">Yet To Be Settled</div>
            <div className="settlement-card__amount">
              <span className="settlement-card__rupee">₹</span>
              <span className="settlement-card__value">0.00</span>
            </div>
            <button className="settlement-card__link" id="transactions-to-be-settled-btn">
              0 Transaction To Be Settled
            </button>
          </div>
        </div>
      </div>

      {/* UTR Wise Settlements */}
      <div className="utr-section">
        <h3 className="utr-section__title">UTR Wise Settlements</h3>
        
        <div className="utr-filters">
          <div className="utr-search" id="utr-search">
            <input
              type="text"
              placeholder="Search UTR"
              className="utr-search__input"
            />
            <svg className="utr-search__icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
          </div>
          <div className="payments-daterange" id="settlements-daterange">
            <div className="date-input">
              <span>March 8th,2026 00:00:00</span>
            </div>
            <span className="date-arrow">→</span>
            <div className="date-input">
              <span>March 14th,2026 12:46:01</span>
            </div>
            <svg className="date-calendar-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
          </div>
          <button className="filter-btn" id="download-settlements-btn">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
            Download
          </button>
        </div>

        {/* Empty state for UTR settlements */}
        <div className="empty-state empty-state--compact">
          <p className="empty-state__desc">No UTR settlements found for the selected date range.</p>
        </div>
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

export default Settlements;
