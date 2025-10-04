'use client';

import Explorer from './explorer';
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
      <section className="flex-1 overflow-auto">{children}</section>
    </main>
  );
};

export default SideBar;
