import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from './utils';

export const Modal = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  children,
  footer,
}) => {
  const modalRef = useRef(null);
  const titleId = useId();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Basic focus management for keyboard users; can be extended to a full trap later.
  const previousActiveElement = useRef(null);
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      // Focus modal container for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  };

  const widthClass = sizeClasses[size] || sizeClasses.md;

  // Render using portal so it stands cleanly at the top of the body
  return createPortal(
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4"
      role="none"
    >
      <div
        className="fixed inset-0 bg-gray-900/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={cn(
          'relative z-50 flex max-h-screen w-full flex-col overflow-hidden rounded-md bg-brand-white shadow-xl focus:outline-none',
          widthClass,
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          {title && (
            <h3 id={titleId} className="text-xl font-semibold leading-6 text-brand-black">
              {title}
            </h3>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100"
            aria-label="Close modal"
          >
            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 text-base leading-relaxed text-gray-700">
          {children}
        </div>

        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-gray-100 bg-gray-50 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
