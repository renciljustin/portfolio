'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Files, Mail, Code, Github, Rss } from 'lucide-react';

const menu = [
  { label: 'Home', icon: Files, href: '/' },
  { label: 'Projects', icon: Code, href: '/projects' },
  { label: 'Github', icon: Github, href: '/github' },
  { label: 'Contact', icon: Mail, href: '/contact' },
  { label: 'Blog', icon: Rss, href: '/blog' },
];

const SideBarMenu = () => {
  const [selected, setSelected] = useState('Home'); // default selected

  return (
    <div className="flex flex-col items-center">
      {menu.map((item) => {
        const isActive = selected === item.label;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setSelected(item.label)}
            className="relative w-full flex justify-center">
            <div
              className={`relative py-2 px-3 cursor-pointer transition-colors ${
                isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}>
              {/* Vertical line indicator */}
              {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-orange-500" />}
              <item.icon strokeWidth={1} className="size-8" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBarMenu;
