import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      {/* Account Activation Card */}
      <div className="activation-card">
        <div className="activation-card__left">
          <div className="activation-card__progress">
            <svg viewBox="0 0 36 36" className="activation-progress-ring">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1a8c5b"
                strokeWidth="3"
                strokeDasharray="0, 100"
                strokeLinecap="round"
              />
            </svg>
            <span className="activation-progress-text">0%</span>
          </div>
          <div className="activation-card__content">
            <h2 className="activation-card__title">Hey, Lets activate your account</h2>
            <p className="activation-card__desc">Hey, Lets activate your account</p>
          </div>
        </div>
        <button className="activation-card__btn" id="lets-begin-btn">Let's Begin</button>
      </div>

      {/* Test Environment Info */}
      <div className="test-env-info">
        <div className="test-env-info__left">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#3b82f6" strokeWidth="2"/>
            <path d="M10 6v4M10 14h.01" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>In the mean time, you can test out payments in our test environment.</span>
        </div>
        <div className="test-env-info__right">
          <button className="test-env-btn" id="access-test-credentials-btn">Access Test Credentials</button>
          <button className="test-env-btn" id="api-documentation-btn">
            API Documentation
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 9l6-6M3 3h6v6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="overview-section">
        <div className="overview-section__header">
          <div className="overview-section__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="#1a8c5b"/>
              <rect x="13" y="2" width="9" height="9" rx="2" fill="#1a8c5b" opacity="0.6"/>
              <rect x="2" y="13" width="9" height="9" rx="2" fill="#1a8c5b" opacity="0.6"/>
              <rect x="13" y="13" width="9" height="9" rx="2" fill="#1a8c5b" opacity="0.3"/>
            </svg>
          </div>
          <div>
            <h3 className="overview-section__title">Overview</h3>
            <p className="overview-section__subtitle">Summary of transactions and issued refunds</p>
          </div>
        </div>

        <div className="overview-cards">
          <div className="overview-card" id="todays-transactions-card">
            <div className="overview-card__header">
              <span className="overview-card__label">Today's Transactions</span>
              <div className="overview-card__icon overview-card__icon--green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a8c5b" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <path d="M2 10h20"/>
                </svg>
              </div>
            </div>
            <div className="overview-card__amount">
              <span className="overview-card__rupee">₹</span>
              <span className="overview-card__value">0.00</span>
            </div>
            <div className="overview-card__footer">
              Yesterday: ₹ <strong>0.00</strong>
            </div>
          </div>

          <div className="overview-card" id="todays-refunds-card">
            <div className="overview-card__header">
              <span className="overview-card__label">Today's Refunds</span>
              <div className="overview-card__icon overview-card__icon--teal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2">
                  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" fill="#14b8a6" stroke="none"/>
                  <path d="M4 4h16" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="overview-card__amount">
              <span className="overview-card__rupee">₹</span>
              <span className="overview-card__value">0.00</span>
            </div>
            <div className="overview-card__footer">
              Yesterday: ₹ <strong>0.00</strong>
            </div>
          </div>

          <div className="overview-card" id="todays-settlement-card">
            <div className="overview-card__header">
              <span className="overview-card__label">Today's Settlement</span>
              <div className="overview-card__icon overview-card__icon--dark">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="#1a8c5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="overview-card__amount">
              <span className="overview-card__rupee">₹</span>
              <span className="overview-card__value">0.00</span>
            </div>
            <div className="overview-card__footer">
              Last Settled: ₹ <strong>0.00</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tour Button */}
      <div className="product-tour" id="product-tour-btn">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
        </svg>
        <span>Product Tour</span>
      </div>
    </div>
  );
};

export default Overview;
