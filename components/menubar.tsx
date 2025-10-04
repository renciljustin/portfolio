'use client';

import Image from 'next/image';

import { Search } from 'lucide-react';

const menu = ['Home', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

const MenuBar = () => {
  return (
    <nav className='flex items-center border-b border-b-neutral-900 p-1.5 text-sm'>
      {/* Left */}
      <div className='flex gap-x-1'>
        <Image
          src={'vscode.svg'}
          alt='visual studio code logo'
          height={18}
          width={18}
          unoptimized={true}
          className='mx-1.5'
        />
        {menu.map((item) => (
          <span key={item} className='hidden cursor-default rounded px-1.5 py-0.5 hover:bg-neutral-700 lg:inline-block'>
            {item}
          </span>
        ))}
      </div>

      {/* Middle */}
      <div className='absolute left-1/2 flex w-[200px] max-w-xl -translate-x-1/2 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-neutral-500 bg-neutral-700/35 hover:bg-neutral-700/50 lg:w-2xs xl:w-lg 2xl:w-xl'>
        <Search size={16} />
        <span>
          <span className='font-semibold'>renciljustin/</span>portfolio
        </span>
      </div>

      {/* Right */}
      <div className='ml-auto flex items-center gap-2'>
        <div className='h-3.5 w-3.5 rounded-full bg-green-500'></div>
        <div className='h-3.5 w-3.5 rounded-full bg-yellow-500'></div>
        <div className='h-3.5 w-3.5 rounded-full bg-red-500'></div>
      </div>
    </nav>
  );
};

export default MenuBar;
