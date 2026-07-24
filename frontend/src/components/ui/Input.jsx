import React, { useState } from 'react';
import { cn } from './utils';

export const Input = React.forwardRef(({
  label,
  type = 'text',
  error,
  helperText,
  required = false,
  disabled = false,
  className = '',
  rows = 4,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  const inputId = React.useId();
  const errorId = React.useId();
  const helperId = React.useId();

  const isTextarea = type === 'textarea';

  const baseInputStyles = 'w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 transition-colors duration-200 placeholder:text-gray-400 focus:border-brand-black focus:outline-none focus:ring-1 focus:ring-brand-black';
  const disabledStyles = 'cursor-not-allowed bg-gray-100 text-gray-500';
  const errorStyles = 'border-error focus:border-error focus:ring-gray-200';

  const hasError = !!error;

  const componentClasses = cn(
    baseInputStyles,
    !disabled && 'hover:border-gray-400',
    disabled && disabledStyles,
    hasError && errorStyles,
    isPassword && 'pr-10',
    className,
  );

  const renderLabel = () => {
    if (!label) return null;
    return (
      <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-error ml-1" aria-hidden="true">*</span>}
      </label>
    );
  };

  const renderHelperText = () => {
    if (hasError && typeof error === 'string') {
      return (
        <p id={errorId} className="mt-1 flex items-center gap-1 text-xs font-medium text-error">
          <svg className="size-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      );
    }
    if (helperText) {
      return (
        <p id={helperId} className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      );
    }
    return null;
  };

  const inputProps = {
    id: inputId,
    ref,
    disabled,
    required,
    'aria-invalid': hasError ? 'true' : 'false',
    'aria-describedby': hasError ? errorId : (helperText ? helperId : undefined),
    className: componentClasses,
    ...props
  };

  return (
    <div className="w-full">
      {renderLabel()}
      <div className="relative">
        {isTextarea ? (
          <textarea rows={rows} {...inputProps} />
        ) : (
          <>
            <input type={inputType} {...inputProps} />
            {isPassword && !disabled && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-colors hover:text-gray-700 focus:text-blue-600 focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            )}
          </>
        )}
      </div>
      {renderHelperText()}
    </div>
  );
});

Input.displayName = 'Input';
