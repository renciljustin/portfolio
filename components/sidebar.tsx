'use client';

import Explorer from './explorer';
import FileTabs from './file-tabs';
import SideBarMenu from './sidebar-menu';

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <aside className="bg-[#1F2428] lg:bg-[#24292e] border-r border-r-neutral-900">
        <SideBarMenu />
      </aside>
      <aside className="bg-[#1F2428] w-[250px] hidden lg:block border-r border-r-neutral-900">
        <Explorer />
      </aside>

      {/* 57px is the size of sidebarmenu + 1px right border size */}
      <div className="w-[calc(100vw-57px)] lg:w-auto lg:flex-1">
        <aside className="bg-[#1F2428] border-b border-b-neutral-900">
          <FileTabs />
        </aside>
        <section>{children}</section>
      </div>
    </main>
  );
};

export default SideBar;
