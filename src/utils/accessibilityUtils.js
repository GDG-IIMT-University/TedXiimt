import React, { useState, useEffect, useRef, useCallback } from 'react';

// Accessibility Context for managing focus and preferences
export const AccessibilityContext = React.createContext({
  reducedMotion: false,
  highContrast: false,
  fontSize: 'normal',
  focusRing: true,
  screenReader: false
});

// Accessibility Provider Component
export const AccessibilityProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    reducedMotion: false,
    highContrast: false,
    fontSize: 'normal',
    focusRing: true,
    screenReader: false
  });

  useEffect(() => {
    // Detect user preferences
    const mediaQueries = {
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)'),
      highContrast: window.matchMedia('(prefers-contrast: high)'),
      screenReader: navigator.userAgent.includes('NVDA') || 
                   navigator.userAgent.includes('JAWS') ||
                   navigator.userAgent.includes('VoiceOver')
    };

    const updatePreferences = () => {
      setPreferences(prev => ({
        ...prev,
        reducedMotion: mediaQueries.reducedMotion.matches,
        highContrast: mediaQueries.highContrast.matches,
        screenReader: mediaQueries.screenReader
      }));
    };

    // Initial check
    updatePreferences();

    // Listen for changes
    mediaQueries.reducedMotion.addListener(updatePreferences);
    mediaQueries.highContrast.addListener(updatePreferences);

    return () => {
      mediaQueries.reducedMotion.removeListener(updatePreferences);
      mediaQueries.highContrast.removeListener(updatePreferences);
    };
  }, []);

  // Apply accessibility classes to document
  useEffect(() => {
    const html = document.documentElement;
    
    if (preferences.reducedMotion) {
      html.classList.add('reduce-motion');
    } else {
      html.classList.remove('reduce-motion');
    }

    if (preferences.highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }

    html.classList.toggle('font-large', preferences.fontSize === 'large');
    html.classList.toggle('font-xl', preferences.fontSize === 'xl');
  }, [preferences]);

  return (
    <AccessibilityContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Skip Navigation Component
export const SkipNavigation = () => {
  return (
    <div className="skip-nav">
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded-md z-50 font-medium hover:bg-red-700 transition-colors"
      >
        Skip to main content
      </a>
      <a 
        href="#navigation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-red-600 text-white px-4 py-2 rounded-md z-50 font-medium hover:bg-red-700 transition-colors"
      >
        Skip to navigation
      </a>
    </div>
  );
};

// Focus Management Hook
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState(null);
  const previousFocusRef = useRef(null);

  const trapFocus = useCallback((container) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  }, []);

  const saveFocus = useCallback(() => {
    previousFocusRef.current = document.activeElement;
  }, []);

  const restoreFocus = useCallback(() => {
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, []);

  return { trapFocus, saveFocus, restoreFocus, focusedElement, setFocusedElement };
};

// Keyboard Navigation Hook
export const useKeyboardNavigation = (items, onSelect) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Home':
        e.preventDefault();
        setSelectedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setSelectedIndex(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (selectedIndex >= 0 && onSelect) {
          onSelect(items[selectedIndex], selectedIndex);
        }
        break;
      case 'Escape':
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  }, [items, selectedIndex, onSelect]);

  return { selectedIndex, setSelectedIndex, handleKeyDown };
};

// Screen Reader Announcements
export const useScreenReader = () => {
  const announcementRef = useRef(null);

  const announce = useCallback((message, priority = 'polite') => {
    if (!announcementRef.current) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', priority);
      announcement.setAttribute('aria-atomic', 'true');
      announcement.setAttribute('class', 'sr-only');
      document.body.appendChild(announcement);
      announcementRef.current = announcement;
    }

    // Clear and set new message
    announcementRef.current.textContent = '';
    setTimeout(() => {
      if (announcementRef.current) {
        announcementRef.current.textContent = message;
      }
    }, 100);
  }, []);

  return { announce };
};

// Accessible Modal Component
export const AccessibleModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className = '' 
}) => {
  const modalRef = useRef(null);
  const { trapFocus, saveFocus, restoreFocus } = useFocusManagement();

  useEffect(() => {
    if (isOpen) {
      saveFocus();
      document.body.style.overflow = 'hidden';
      
      const cleanup = trapFocus(modalRef.current);
      
      // Focus first element
      setTimeout(() => {
        const firstFocusable = modalRef.current?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 100);

      return () => {
        cleanup();
        document.body.style.overflow = '';
      };
    } else {
      restoreFocus();
    }
  }, [isOpen, trapFocus, saveFocus, restoreFocus]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        className={`bg-gray-900 rounded-lg shadow-2xl max-w-lg w-full mx-4 ${className}`}
        role="document"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 id="modal-title" className="text-xl font-bold text-white">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

// Accessible Button Component
export const AccessibleButton = ({ 
  children, 
  onClick, 
  disabled = false,
  variant = 'primary',
  size = 'medium',
  ariaLabel,
  ariaDescribedBy,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800"
  };

  const sizes = {
    small: "px-3 py-2 text-sm min-h-[36px]",
    medium: "px-4 py-2 text-base min-h-[44px]",
    large: "px-6 py-3 text-lg min-h-[48px]"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {children}
    </button>
  );
};

// Accessible Form Field Component
export const AccessibleFormField = ({
  label,
  type = 'text',
  id,
  value,
  onChange,
  error,
  helpText,
  required = false,
  className = '',
  ...props
}) => {
  const errorId = error ? `${id}-error` : undefined;
  const helpId = helpText ? `${id}-help` : undefined;
  const describedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={`space-y-2 ${className}`}>
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-white"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-describedby={describedBy}
        aria-invalid={error ? 'true' : 'false'}
        className={`w-full px-3 py-2 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors min-h-[44px] ${
          error ? 'border-red-500' : 'border-gray-600'
        }`}
        {...props}
      />
      
      {helpText && (
        <p id={helpId} className="text-sm text-gray-400">
          {helpText}
        </p>
      )}
      
      {error && (
        <p id={errorId} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// Accessibility Settings Panel
export const AccessibilitySettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { preferences, setPreferences } = React.useContext(AccessibilityContext);

  const updatePreference = (key, value) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-40"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      <AccessibleModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Accessibility Settings"
      >
        <div className="space-y-6">
          {/* Motion Preferences */}
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.reducedMotion}
                onChange={(e) => updatePreference('reducedMotion', e.target.checked)}
                className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500"
              />
              <span className="text-white">Reduce motion effects</span>
            </label>
            <p className="text-sm text-gray-400 mt-1">
              Minimizes animations and transitions for better accessibility
            </p>
          </div>

          {/* Contrast Preferences */}
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.highContrast}
                onChange={(e) => updatePreference('highContrast', e.target.checked)}
                className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500"
              />
              <span className="text-white">High contrast mode</span>
            </label>
            <p className="text-sm text-gray-400 mt-1">
              Increases contrast for better readability
            </p>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-white mb-2">Font Size</label>
            <select
              value={preferences.fontSize}
              onChange={(e) => updatePreference('fontSize', e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="normal">Normal</option>
              <option value="large">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>

          {/* Focus Ring */}
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.focusRing}
                onChange={(e) => updatePreference('focusRing', e.target.checked)}
                className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500"
              />
              <span className="text-white">Enhanced focus indicators</span>
            </label>
            <p className="text-sm text-gray-400 mt-1">
              Shows clearer outlines around focused elements
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <AccessibleButton onClick={() => setIsOpen(false)}>
            Close
          </AccessibleButton>
        </div>
      </AccessibleModal>
    </>
  );
};

// Export all utilities
export default {
  AccessibilityProvider,
  AccessibilityContext,
  SkipNavigation,
  useFocusManagement,
  useKeyboardNavigation,
  useScreenReader,
  AccessibleModal,
  AccessibleButton,
  AccessibleFormField,
  AccessibilitySettings
};