import React from 'react';

import { Search } from 'lucide-react';
import Image from 'next/image';

const menu = ['Home', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

const MenuBar = () => {
  return (
    <nav className="hidden lg:flex items-center text-sm p-1.5 border-b border-b-neutral-900">
      {/* Left */}
      <div className="flex gap-x-1">
        <Image
          src={'vscode.svg'}
          alt="visual studio code logo"
          height={18}
          width={18}
          unoptimized={true}
          className="mx-1.5"
        />
        {menu.map((item) => (
          <span key={item} className="px-1.5 py-0.5 rounded hover:bg-neutral-700 cursor-default">
            {item}
          </span>
        ))}
      </div>

      {/* Middle */}
      <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer flex items-center justify-center gap-1.5 bg-neutral-700/35 hover:bg-neutral-700/50 rounded-md w-fit lg:w-2xs xl:w-lg 2xl:w-xl max-w-xl border border-neutral-500">
        <Search size={16} />
        <span>
          <span className="font-semibold">renciljustin/</span>portfolio
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 ml-auto">
        <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
      </div>
    </nav>
  );
};

export default MenuBar;
