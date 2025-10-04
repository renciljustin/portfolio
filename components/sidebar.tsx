'use client';

import Explorer from './explorer';
import FileTabs from './file-tabs';
import SideBarMenu from './sidebar-menu';

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex'>
      <aside className='border-r border-r-[var(--color-border)] bg-[var(--color-sidebar-bg)]'>
        <SideBarMenu />
      </aside>
      <aside className='hidden w-[250px] border-r border-r-[var(--color-border)] bg-[var(--color-explorer-bg)] text-[var(--color-explorer)] lg:block'>
        <Explorer />
      </aside>

      {/* 57px is the size of sidebarmenu + 1px right border size */}
      <div className='w-[calc(100vw-57px)] lg:w-auto lg:flex-1'>
        <aside className='border-b border-b-[var(--color-border)] bg-[var(--color-tab-group-bg)] text-[var(--color-tab-item)]'>
          <FileTabs />
        </aside>
        <section className='bg-[var(--color-background)] text-[var(--color-foreground)]'>{children}</section>
      </div>
    </main>
  );
};

export default SideBar;
