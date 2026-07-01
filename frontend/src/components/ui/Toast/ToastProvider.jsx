import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ToastContext } from './ToastContext';
import { cn } from '../utils';

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const timeoutRef = useRef(new Map());

  const removeToast = useCallback((id) => {
    const timeoutId = timeoutRef.current.get(id);

    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutRef.current.delete(id);
    }

    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((message, options = {}) => {
    const { type = 'info', duration = 4000 } = options;
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const newToast = { id, message, type, duration };
    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      const timeoutId = window.setTimeout(() => {
        removeToast(id);
      }, duration);

      timeoutRef.current.set(id, timeoutId);
    }

    return id;
  }, [removeToast]);

  useEffect(() => () => {
    timeoutRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    timeoutRef.current.clear();
  }, []);

  // Semantic shorthand helper methods
  const toastHelpers = {
    show: addToast,
    success: (msg, dur) => addToast(msg, { type: 'success', duration: dur }),
    error: (msg, dur) => addToast(msg, { type: 'error', duration: dur }),
    warning: (msg, dur) => addToast(msg, { type: 'warning', duration: dur }),
    info: (msg, dur) => addToast(msg, { type: 'info', duration: dur }),
  };

  const getToastIcon = (type) => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5 text-success shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5 text-error shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-5 h-5 text-warning shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg className="w-5 h-5 text-info shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const borderClasses = {
    success: 'border-success',
    error: 'border-error',
    warning: 'border-warning',
    info: 'border-info',
  };

  return (
    <ToastContext.Provider value={toastHelpers}>
      {children}
      {createPortal(
        <div 
          className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-full max-w-sm flex-col gap-3 px-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {toasts.map((toast) => (
            <div
              key={toast.id}
              role="alert"
              className={cn(
                'pointer-events-auto flex w-full items-start gap-3 rounded-md border bg-brand-white p-4 shadow-md',
                borderClasses[toast.type] || borderClasses.info,
              )}
            >
              {getToastIcon(toast.type)}
              <div className="flex-1 text-sm font-medium text-gray-900">
                {toast.message}
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="rounded p-1 text-gray-400 transition-colors hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
                aria-label="Close alert"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
