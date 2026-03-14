import './TopBar.css';

const TopBar = () => {
  return (
    <>
      {/* <div className="env-banner">
        <div className="env-banner__left">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="#22c55e"/>
            <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>You're in Live Environment.</span>
        </div>
        <div className="env-banner__right">
          <button className="env-mode-btn env-mode-btn--test">Test Mode</button>
          <button className="env-mode-btn env-mode-btn--live">Live Mode</button>
        </div>
      </div> */}
      <header className="topbar">
        <div className="topbar__right">
          <button className="topbar__action" id="contact-support-btn">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span>Contact Support</span>
          </button>
          <div className="topbar__divider"></div>
          <button className="topbar__action" id="documentation-btn">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
            <span>Documentation</span>
          </button>
          <div className="topbar__avatar" id="user-avatar">
            <span>MK</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
