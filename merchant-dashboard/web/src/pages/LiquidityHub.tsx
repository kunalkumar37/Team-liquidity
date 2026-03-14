import { useState, useRef, useEffect } from 'react';
import './LiquidityHub.css';

interface Message {
  id: string;
  role: 'user' | 'agent' | 'system';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const MOCK_FLOW: { role: 'user' | 'agent' | 'system'; content: string; delay: number }[] = [
  {
    role: 'agent',
    content: "I can help with that! Let me analyze your current 'Pulse' and settlement history. One moment while I secure the underwriting...",
    delay: 1200,
  },
  {
    role: 'system',
    content: 'UNDERWRITER_LOADING',
    delay: 2000,
  },
];

const LiquidityHub = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'agent',
      content:
        "Welcome to the Liquidity Hub! I'm your AI-powered lending assistant. Tell me about your funding needs and I'll match you with the best options based on your transaction history.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showUnderwriter, setShowUnderwriter] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showUnderwriter]);

  const addMessage = (msg: Omit<Message, 'id' | 'timestamp'>) => {
    const newMsg: Message = {
      ...msg,
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMsg]);
    return newMsg;
  };

  const runMockFlow = async () => {
    setIsProcessing(true);

    // Step 1: Agent typing indicator, then agent response
    setMessages((prev) => [
      ...prev,
      { id: 'typing', role: 'agent', content: '', timestamp: new Date(), isTyping: true },
    ]);

    await new Promise((r) => setTimeout(r, MOCK_FLOW[0].delay));

    // Remove typing, add agent message
    setMessages((prev) => {
      const filtered = prev.filter((m) => m.id !== 'typing');
      return [
        ...filtered,
        {
          id: `msg-${Date.now()}`,
          role: 'agent' as const,
          content: MOCK_FLOW[0].content,
          timestamp: new Date(),
        },
      ];
    });

    // Step 2: Show underwriter loading
    await new Promise((r) => setTimeout(r, 800));
    setShowUnderwriter(true);
    setIsProcessing(false);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text || isProcessing) return;

    addMessage({ role: 'user', content: text });
    setInputValue('');

    // Trigger mock flow for any message
    runMockFlow();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="liquidity-hub">
      {/* Header */}
      <div className="lh-header">
        <div className="lh-header__left">
          <div className="lh-header__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                fill="#1a8c5b"
                opacity="0.12"
              />
              <path
                d="M12 6v6l4.5 2.5"
                stroke="#1a8c5b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3l2 2M8 3L6 5"
                stroke="#1a8c5b"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="9" stroke="#1a8c5b" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div>
            <h1 className="lh-header__title">Liquidity Hub</h1>
            <p className="lh-header__subtitle">AI-powered instant lending based on your transaction pulse</p>
          </div>
        </div>
        <div className="lh-header__status">
          <span className="lh-status-dot"></span>
          <span>Agent Online</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="lh-chat">
        <div className="lh-chat__messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`lh-message lh-message--${msg.role} ${msg.isTyping ? 'lh-message--typing' : ''}`}
            >
              {msg.role === 'agent' && !msg.isTyping && (
                <div className="lh-message__avatar lh-message__avatar--agent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1.07A7.001 7.001 0 0113 23h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zm-3 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  </svg>
                </div>
              )}
              {msg.role === 'user' && (
                <div className="lh-message__avatar lh-message__avatar--user">
                  <span>MK</span>
                </div>
              )}
              <div className="lh-message__bubble">
                {msg.isTyping ? (
                  <div className="lh-typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <>
                    <p className="lh-message__text">{msg.content}</p>
                    <span className="lh-message__time">{formatTime(msg.timestamp)}</span>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Underwriter Loading Card */}
          {showUnderwriter && (
            <div className="lh-underwriter">
              <div className="lh-underwriter__card">
                <div className="lh-underwriter__spinner">
                  <div className="lh-spinner">
                    <div className="lh-spinner__ring"></div>
                    <div className="lh-spinner__ring lh-spinner__ring--2"></div>
                    <div className="lh-spinner__ring lh-spinner__ring--3"></div>
                    <svg
                      className="lh-spinner__icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1a8c5b"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M12 3c-1.2 0-2.4.6-3 1.5A3.5 3.5 0 006 8c-2.2 0-4 1.8-4 4s1.8 4 4 4h12c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.6-1.5-2.1-2.5-3.5-2.5-.5-1.5-1.9-2.5-3.5-2.5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lh-underwriter__text">
                  <p className="lh-underwriter__label">Consulting Underwriter Agent...</p>
                  <p className="lh-underwriter__sublabel">Analyzing transaction pulse & settlement patterns</p>
                </div>
                <div className="lh-underwriter__steps">
                  <div className="lh-underwriter__step lh-underwriter__step--done">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="#1a8c5b">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Merchant identity verified</span>
                  </div>
                  <div className="lh-underwriter__step lh-underwriter__step--done">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="#1a8c5b">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Settlement history fetched</span>
                  </div>
                  <div className="lh-underwriter__step lh-underwriter__step--active">
                    <div className="lh-step-spinner"></div>
                    <span>Running credit risk model...</span>
                  </div>
                  <div className="lh-underwriter__step lh-underwriter__step--pending">
                    <div className="lh-step-dot"></div>
                    <span>Generating loan offer</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && !isProcessing && (
          <div className="lh-suggestions">
            <button
              className="lh-suggestion"
              onClick={() => {
                setInputValue('I need ₹50,000 for my wholesaler payment today.');
              }}
              id="suggestion-wholesaler"
            >
              💰 I need ₹50,000 for my wholesaler payment today
            </button>
            <button
              className="lh-suggestion"
              onClick={() => {
                setInputValue('What credit line am I eligible for?');
              }}
              id="suggestion-credit"
            >
              📊 What credit line am I eligible for?
            </button>
            <button
              className="lh-suggestion"
              onClick={() => {
                setInputValue('Show me my settlement forecast for this week.');
              }}
              id="suggestion-forecast"
            >
              📈 Show me my settlement forecast for this week
            </button>
          </div>
        )}

        {/* Input Area */}
        <div className="lh-input-area">
          <div className="lh-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="lh-input"
              placeholder="Ask about instant credit, settlement advances, or working capital..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isProcessing}
              id="liquidity-chat-input"
            />
            <button
              className={`lh-send-btn ${inputValue.trim() ? 'lh-send-btn--active' : ''}`}
              onClick={handleSend}
              disabled={!inputValue.trim() || isProcessing}
              id="liquidity-send-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="lh-input-disclaimer">
            Powered by AI underwriting • Instant decisions based on your transaction pulse
          </p>
        </div>
      </div>

      {/* Product Tour */}
      <div className="product-tour" id="product-tour-btn">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="white">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
        <span>Product Tour</span>
      </div>
    </div>
  );
};

export default LiquidityHub;
