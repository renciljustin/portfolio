'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Files, Mail, Code, Github, Rss, CircleUserRound, Settings, LucideProps } from 'lucide-react';

interface NavItem {
  pos: 'top' | 'bot';
  label: string;
  icon: React.ForwardRefExoticComponent<LucideProps>;
  href: string;
}
const items: NavItem[] = [
  { pos: 'top', label: 'Home', icon: Files, href: '/' },
  { pos: 'top', label: 'Projects', icon: Code, href: '/projects' },
  { pos: 'top', label: 'Github', icon: Github, href: '/github' },
  { pos: 'top', label: 'Contact', icon: Mail, href: '/contact' },
  { pos: 'top', label: 'Articles', icon: Rss, href: '/articles' },
  { pos: 'bot', label: 'Account', icon: CircleUserRound, href: '/about' },
  { pos: 'bot', label: 'Settings', icon: Settings, href: '/settings' },
];

const SideBarMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col">
        {items
          .filter((item) => item.pos === 'top')
          .map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.label} href={item.href} className="relative w-full flex justify-center">
                <div
                  className={`relative py-2 px-3 cursor-pointer transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}>
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-orange-500" />}
                  <item.icon strokeWidth={1} className="size-8" />
                </div>
              </Link>
            );
          })}
      </div>
      <div className="flex flex-col">
        {items
          .filter((item) => item.pos === 'bot')
          .map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.label} href={item.href} className="relative w-full flex justify-center">
                <div
                  className={`relative py-2 px-3 cursor-pointer transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}>
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-orange-500" />}
                  <item.icon strokeWidth={1} className="size-8" />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SideBarMenu;
