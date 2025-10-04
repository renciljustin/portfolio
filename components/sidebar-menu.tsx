'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CircleUserRound, Code, Files, Github, LucideProps, Mail, Rss, Settings } from 'lucide-react';

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
  { pos: 'bot', label: 'Settings', icon: Settings, href: '/settings' }
];

const SideBarMenu = () => {
  const pathname = usePathname();

  return (
    <div className='flex h-full flex-col items-center justify-between'>
      <div className='flex flex-col'>
        {items
          .filter((item) => item.pos === 'top')
          .map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.label} href={item.href} className='relative flex w-full justify-center'>
                <div
                  className={`relative cursor-pointer px-3 py-2 transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}>
                  {isActive && <div className='absolute top-1/2 left-0 h-12 w-1 -translate-y-1/2 bg-orange-500' />}
                  <item.icon strokeWidth={1} className='size-8' />
                </div>
              </Link>
            );
          })}
      </div>
      <div className='flex flex-col'>
        {items
          .filter((item) => item.pos === 'bot')
          .map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.label} href={item.href} className='relative flex w-full justify-center'>
                <div
                  className={`relative cursor-pointer px-3 py-2 transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}>
                  {isActive && <div className='absolute top-1/2 left-0 h-12 w-1 -translate-y-1/2 bg-orange-500' />}
                  <item.icon strokeWidth={1} className='size-8' />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SideBarMenu;
