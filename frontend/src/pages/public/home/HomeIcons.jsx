import React from 'react';

export const HomeIcon = ({ name, className = 'size-6' }) => {
  const icons = {
    card: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7.5h18M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      />
    ),
    brochure: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v12A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5Zm4.5 0v15"
      />
    ),
    flyer: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 3.75h6l4.5 4.5v11.25a.75.75 0 0 1-.75.75H7.5a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Zm6 0v4.5H18"
      />
    ),
    print: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25V4.5h9v3.75M6.75 17.25h10.5V13.5H6.75v3.75Zm-1.5-7.5h13.5A2.25 2.25 0 0 1 21 12v3.75A2.25 2.25 0 0 1 18.75 18h-1.5v-4.5H6.75V18h-1.5A2.25 2.25 0 0 1 3 15.75V12a2.25 2.25 0 0 1 2.25-2.25Z"
      />
    ),
    stack: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12 4.5 7.5 3.75L12 12 4.5 8.25 12 4.5Zm0 7.5 7.5-3.75v7.5L12 19.5l-7.5-3.75v-7.5L12 12Z"
      />
    ),
    bolt: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 2.25 6 13.5h4.5l-1.5 8.25L18 10.5h-4.5l1.5-8.25Z"
      />
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75c2.25 1.5 4.5 2.25 6.75 2.25v4.5c0 4.5-2.7 8.25-6.75 9.75-4.05-1.5-6.75-5.25-6.75-9.75V6c2.25 0 4.5-.75 6.75-2.25Z"
      />
    ),
    upload: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16.5V6.75m0 0 3.75 3.75M12 6.75 8.25 10.5M4.5 16.5v1.125A1.875 1.875 0 0 0 6.375 19.5h11.25A1.875 1.875 0 0 0 19.5 17.625V16.5"
      />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden="true"
    >
      {icons[name] || icons.card}
    </svg>
  );
};
