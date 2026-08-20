'use client';

import { useAnalytics } from '@/hooks/useAnalytics';

interface RegistrationLinkProps {
  href: string;
  programName?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function RegistrationLink({
  href,
  programName = 'unknown',
  children,
  className,
  style,
}: RegistrationLinkProps) {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent('click_registration', {
      program: programName,
      form_url: href,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
