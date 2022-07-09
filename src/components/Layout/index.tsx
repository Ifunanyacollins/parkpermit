import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children: content }: LayoutProps) {
  return (
    <main className="grid grid-cols-12  h-full overflow-hidden">
      <section className="bg-white col-span-2 overflow-scroll">
        <Sidebar />
      </section>
      <section className=" bg-[#F7F7F9] col-span-10 overflow-scroll">
        <Header />
        <div className="mx-20">{content}</div>
      </section>
    </main>
  );
}

export default Layout;
