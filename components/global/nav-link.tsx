'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkCompatProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>,
    Omit<LinkProps, 'as' | 'passHref' | 'legacyBehavior' | 'href'> {
  to: string; // Keep 'to' for compatibility, map to 'href'
  activeClassName?: string;
  pendingClassName?: string; // Not directly supported in Next.js, but kept for interface compatibility
  className?:
    | string
    | ((props: { isActive: boolean; isPending: boolean }) => string);
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to;
    const isPending = false; // Next.js doesn't expose pending state in the same way as React Router

    const resolvedClassName =
      typeof className === 'function'
        ? className({ isActive, isPending })
        : cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          );

    return (
      <Link ref={ref} href={to} className={resolvedClassName} {...props} />
    );
  }
);

NavLink.displayName = 'NavLink';

export { NavLink };
