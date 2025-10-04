import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const files = [
  { name: 'home.tsx', icon: 'react.svg', href: '/' },
  { name: 'about.html', icon: 'html5.svg', href: '/about' },
  { name: 'contact.css', icon: 'css3.svg', href: '/contact' },
  { name: 'projects.js', icon: 'javascript.svg', href: '/projects' },
  { name: 'articles.ts', icon: 'typescript.svg', href: '/articles' },
  { name: 'github.md', icon: 'markdown.svg', href: '/github' }
];

const FileTabs = () => {
  const pathname = usePathname();

  return (
    <div className='overflow-x-auto'>
      <ul className='flex min-w-fit whitespace-nowrap'>
        {files.map((file) => {
          const isActive = file.href === pathname;

          return (
            <li
              key={file.name}
              className={`flex-shrink-0 border-r border-r-neutral-900 px-4 py-2 hover:bg-[#24292e] ${
                isActive ? 'bg-[#24292e]' : ''
              }`}>
              <Link href={file.href} className='flex items-center gap-2'>
                <Image src={file.icon} alt={file.name} height={14} width={14} unoptimized />
                <span>{file.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FileTabs;
