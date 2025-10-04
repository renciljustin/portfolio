import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const files = [
  { name: 'home.tsx', icon: 'react.svg', href: '/' },
  { name: 'about.html', icon: 'html5.svg', href: '/about' },
  { name: 'contact.css', icon: 'css3.svg', href: '/contact' },
  { name: 'projects.js', icon: 'javascript.svg', href: '/projects' },
  { name: 'articles.ts', icon: 'typescript.svg', href: '/articles' },
  { name: 'github.md', icon: 'markdown.svg', href: '/github' },
];

const Explorer = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="uppercase text-xs py-4 pl-4">Explorer</div>
      <div className="flex items-center gap-x-1 uppercase text-xs font-bold px-2 pb-2 cursor-pointer">
        <ChevronDown size={14} /> Portfolio
      </div>
      <ul>
        {files.map((file) => {
          const isActive = file.href === pathname;

          return (
            <li key={file.name} className={`pl-8 py-[1px] hover:bg-[#24292e] ${isActive && 'bg-[#24292e]'}`}>
              <Link href={file.href} className="flex items-center gap-2">
                <Image src={file.icon} alt={file.name} height={14} width={14} unoptimized={true} />
                <span>{file.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Explorer;
