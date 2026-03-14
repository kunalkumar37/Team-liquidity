import './Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <div className="page-header">
        <div className="page-header__left">
          <div className="page-header__icon page-header__icon--green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a8c5b" strokeWidth="2">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
            </svg>
          </div>
          <div>
            <h1 className="page-header__title">Settings</h1>
            <p className="page-header__subtitle">Manage your account settings and preferences</p>
          </div>
        </div>
      </div>

      <div className="settings__content">
        <div className="settings__card">
          <h3 className="settings__card-title">Account Information</h3>
          <div className="settings__field">
            <label className="settings__label">Business Name</label>
            <div className="settings__value">Pine Labs Merchant</div>
          </div>
          <div className="settings__field">
            <label className="settings__label">Email</label>
            <div className="settings__value">merchant@pinelabs.com</div>
          </div>
          <div className="settings__field">
            <label className="settings__label">Phone</label>
            <div className="settings__value">+91 XXXXXXXXXX</div>
          </div>
        </div>

        <div className="settings__card">
          <h3 className="settings__card-title">API Configuration</h3>
          <div className="settings__field">
            <label className="settings__label">Merchant ID</label>
            <div className="settings__value settings__value--mono">XXXXXXXXXXXXXXX</div>
          </div>
          <div className="settings__field">
            <label className="settings__label">API Key</label>
            <div className="settings__value settings__value--mono">••••••••••••••••</div>
          </div>
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

export default Settings;
