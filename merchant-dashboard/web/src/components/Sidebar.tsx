import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1a8c5b" opacity="0.1"/>
            <path d="M12 15C12 15 16 10 20 12C24 14 22 18 26 16C30 14 28 20 28 20" stroke="#1a8c5b" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            <path d="M12 22C12 22 16 17 20 19C24 21 22 25 26 23C30 21 28 27 28 27" stroke="#1a8c5b" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        {!collapsed && (
          <div className="sidebar__logo-text">
            <span className="sidebar__logo-title">Payment Gateway</span>
            <span className="sidebar__logo-subtitle">Pine Labs Online</span>
          </div>
        )}
      </div>

      <nav className="sidebar__nav">
        <div className="sidebar__section">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
            }
            end
          >
            <svg className="sidebar__icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            {!collapsed && <span>Overview</span>}
          </NavLink>
        </div>

        <div className="sidebar__section">
          {!collapsed && <div className="sidebar__section-title">TRANSACTIONS</div>}
          <NavLink
            to="/payments"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
            }
          >
            <svg className="sidebar__icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
            </svg>
            {!collapsed && <span>Payments</span>}
          </NavLink>
          <NavLink
            to="/settlements"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
            }
          >
            <svg className="sidebar__icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" opacity="0.3"/>
              <path d="M3 6a2 2 0 012-2h10a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm3 1a1 1 0 000 2h4a1 1 0 100-2H6zm0 4a1 1 0 100 2h4a1 1 0 100-2H6z"/>
            </svg>
            {!collapsed && <span>Settlements</span>}
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
            }
          >
            <svg className="sidebar__icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
            {!collapsed && <span>Reports</span>}
          </NavLink>
        </div>

        <div className="sidebar__section">
          {!collapsed && <div className="sidebar__section-title">LIQUIDITY</div>}
          <NavLink
            to="/liquidity-hub"
            className={({ isActive }) =>
              `sidebar__link sidebar__link--accent ${isActive ? 'sidebar__link--active' : ''}`
            }
          >
            <svg className="sidebar__icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z" opacity="0.3"/>
              <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 12.93V14h-2v.93A6.006 6.006 0 014.07 10H5v-2h-.93A6.006 6.006 0 019 3.07V5h2V3.07A6.006 6.006 0 0115.93 8H15v2h.93A6.006 6.006 0 0111 14.93z"/>
              <circle cx="10" cy="10" r="2"/>
            </svg>
            {!collapsed && <span>Liquidity Hub</span>}
          </NavLink>
        </div>

        <div className="sidebar__section">
          {!collapsed && <div className="sidebar__section-title">OTHER PRODUCTS</div>}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
            }
          >
            <svg className="sidebar__icon" viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            </svg>
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </div>
      </nav>

      <button
        className="sidebar__collapse-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        <svg
          className={`sidebar__collapse-icon ${collapsed ? 'sidebar__collapse-icon--rotated' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
        {!collapsed && <span>Collapse Sidebar</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
