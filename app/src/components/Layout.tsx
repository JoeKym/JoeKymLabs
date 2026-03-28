import React, { ReactNode } from 'react';
import NavigationFixed from './Navigation-fixed';
import SocialFooter from './SocialFooter';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-background text-foreground ${className}`}>
      <NavigationFixed />
      <main className="pt-20 pb-20">
        {children}
      </main>
      <SocialFooter />
    </div>
  );
}

