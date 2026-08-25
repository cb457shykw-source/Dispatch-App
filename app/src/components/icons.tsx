import React from 'react';

interface IconProps {
  path: string;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
}

/** Generic Lucide-style icon: a single path drawn on a 24x24 viewbox. */
export function Icon({ path, size = 20, stroke = 'currentColor', strokeWidth = 2, fill = 'none' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
      <path d={path} />
    </svg>
  );
}

export const IconBack = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#201e1d" strokeWidth={2.4}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#201e1d" strokeWidth={2}>
    <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#201e1d" strokeWidth={2}>
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z" />
  </svg>
);

export const IconCheckGray = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#605d5d" strokeWidth={2.8}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconAlert = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.6}>
    <path d="M12 9v4M12 17h.01M10.3 3.9L2.4 18a2 2 0 001.7 3h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
  </svg>
);

export const IconCrew = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#201e1d" strokeWidth={2}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 11a3 3 0 100-6M21 20c0-2.5-1.5-4.6-3.6-5.5" />
  </svg>
);

export const IconFile = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec3013" strokeWidth={2}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

export const IconChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#201e1d" strokeWidth={2.2}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const IconCheckWhite = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f3f2f2" strokeWidth={3}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconCheckAccent = ({ stroke = '#ff9783' }: { stroke?: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={2.6}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const IconCamera = ({ stroke = '#f3f2f2' }: { stroke?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={2.2}>
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
