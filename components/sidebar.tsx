'use client';

import SideBarMenu from './sidebar-menu';

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <aside className="bg-neutral-800">
        <SideBarMenu />
      </aside>
      <section className="flex-1 bg-neutral-900 overflow-auto">{children}</section>
    </main>
  );
};

export default SideBar;
