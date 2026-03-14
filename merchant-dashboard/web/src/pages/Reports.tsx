import { useRef, useEffect, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import './Reports.css';

Chart.register(...registerables);

const paymentMethods = [
  { name: 'UPI', color: '#6366f1', icon: '💳', percentage: '0.0%' },
  { name: 'CREDIT/DEBIT CARD', color: '#f59e0b', icon: '💳', percentage: '0.0%' },
  { name: 'NET BANKING', color: '#22c55e', icon: '🏦', percentage: '0.0%' },
  { name: 'EMI', color: '#ef4444', icon: '📋', percentage: '0.0%' },
  { name: 'WALLET', color: '#8b5cf6', icon: '👛', percentage: '0.0%' },
  { name: 'BRAND WALLET', color: '#06b6d4', icon: '👛', percentage: '0.0%' },
  { name: 'PAY BY POINTS', color: '#f97316', icon: '⭐', percentage: '0.0%' },
  { name: 'BANK TRANSFER', color: '#14b8a6', icon: '🏧', percentage: '0.0%' },
  { name: 'OTHERS', color: '#6b7280', icon: '📦', percentage: '0.0%' },
];

const Reports = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [viewMode, setViewMode] = useState<'daily' | 'hourly'>('daily');

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const labels = ['8/03', '9/03', '10/03', '11/03', '12/03', '13/03', '14/03'];
    const volumeData = [0, 0, 0, 0, 0, 0, 0];
    const countData = [0, 0, 0, 0, 0, 0, 0];

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Transaction Volume',
            data: volumeData,
            borderColor: '#14b8a6',
            backgroundColor: 'rgba(20, 184, 166, 0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#14b8a6',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            yAxisID: 'y',
            fill: true,
          },
          {
            label: 'Transaction Count',
            data: countData,
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            borderWidth: 2,
            pointBackgroundColor: '#6366f1',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            yAxisID: 'y1',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: '#1f2937',
            titleColor: '#fff',
            bodyColor: '#d1d5db',
            padding: 12,
            borderColor: '#374151',
            borderWidth: 1,
            cornerRadius: 8,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#9ca3af',
              font: {
                size: 11,
              },
            },
            border: {
              display: false,
            },
          },
          y: {
            position: 'left',
            title: {
              display: true,
              text: '(INR)',
              color: '#9ca3af',
              font: {
                size: 11,
              },
            },
            grid: {
              color: '#f3f4f6',
            },
            ticks: {
              color: '#9ca3af',
              font: {
                size: 11,
              },
              callback: function(value: any) {
                if (value >= 1000) return (value / 1000) + 'K';
                return value;
              },
            },
            border: {
              display: false,
            },
            min: 0,
            max: 4000,
          },
          y1: {
            position: 'right',
            title: {
              display: true,
              text: 'Transaction Count (in thousands)',
              color: '#9ca3af',
              font: {
                size: 11,
              },
            },
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              color: '#9ca3af',
              font: {
                size: 11,
              },
            },
            border: {
              display: false,
            },
            min: 0,
            max: 2,
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [viewMode]);

  return (
    <div className="reports">
      {/* Page Title */}
      <h1 className="reports__title">Reports</h1>

      <div className="reports__layout">
        {/* Chart Section */}
        <div className="reports__chart-section">
          {/* Date Range */}
          <div className="reports__daterange" id="reports-daterange">
            <div className="payments-daterange">
              <div className="date-input">
                <span>March 8th,2026 00:00:00</span>
              </div>
              <span className="date-arrow">→</span>
              <div className="date-input">
                <span>March 14th,2026 12:42:10</span>
              </div>
              <svg className="date-calendar-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Chart Controls */}
          <div className="reports__controls">
            <div className="reports__control-left">
              <button className="reports__dropdown" id="transactions-dropdown">
                Transactions
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
              <button className="reports__dropdown" id="volume-count-dropdown">
                By Volume and Count
                <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
            <div className="reports__control-right">
              <button 
                className={`reports__toggle ${viewMode === 'hourly' ? 'reports__toggle--active' : ''}`}
                onClick={() => setViewMode('hourly')}
                id="hourly-toggle"
              >
                Hourly
              </button>
              <button 
                className={`reports__toggle ${viewMode === 'daily' ? 'reports__toggle--active' : ''}`}
                onClick={() => setViewMode('daily')}
                id="daily-toggle"
              >
                Daily
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="reports__chart-container">
            <canvas ref={chartRef} id="reports-chart"></canvas>
          </div>

          {/* Scrollbar indicator */}
          <div className="reports__scroll-indicator">
            <div className="reports__scroll-bar"></div>
          </div>

          {/* Chart Legend */}
          <div className="reports__legend">
            <div className="reports__legend-item">
              <span className="reports__legend-dot reports__legend-dot--teal"></span>
              <span>Transaction Volume</span>
            </div>
            <div className="reports__legend-item">
              <span className="reports__legend-dot reports__legend-dot--indigo"></span>
              <span>Transaction Count</span>
            </div>
            <button className="reports__download" id="download-report-btn">
              Download Report
              <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="reports__payment-methods">
          <h3 className="reports__pm-title">Payment Method</h3>
          <div className="reports__pm-list">
            {paymentMethods.map((method, index) => (
              <div key={index} className="reports__pm-item" id={`pm-${method.name.toLowerCase().replace(/[\s\/]/g, '-')}`}>
                <div className="reports__pm-item-left">
                  <div 
                    className="reports__pm-icon" 
                    style={{ backgroundColor: method.color + '20', color: method.color }}
                  >
                    {method.name === 'UPI' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={method.color}><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg>
                    )}
                    {method.name === 'CREDIT/DEBIT CARD' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={method.color} strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                    )}
                    {method.name === 'NET BANKING' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={method.color} strokeWidth="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3"/></svg>
                    )}
                    {method.name === 'EMI' && (
                      <span style={{ fontSize: '10px', fontWeight: 700 }}>EMI</span>
                    )}
                    {method.name === 'WALLET' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={method.color} strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 14h2"/></svg>
                    )}
                    {method.name === 'BRAND WALLET' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={method.color} strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 14h2"/></svg>
                    )}
                    {method.name === 'PAY BY POINTS' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={method.color}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    )}
                    {method.name === 'BANK TRANSFER' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={method.color} strokeWidth="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11"/></svg>
                    )}
                    {method.name === 'OTHERS' && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={method.color}><circle cx="12" cy="12" r="2"/><circle cx="6" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    )}
                  </div>
                  <span className="reports__pm-name">{method.name}</span>
                </div>
                <span className="reports__pm-percentage">{method.percentage}</span>
              </div>
            ))}
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

export default Reports;
