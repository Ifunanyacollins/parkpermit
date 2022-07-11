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
      <section className=" bg-[#F7F7F9] col-span-10 overflow-scroll flex flex-col">
        <div>
          <Header />
        </div>

        <div className="mx-10 py-10 overflow-scroll">{content}</div>
      </section>
    </main>
  );
}

export default Layout;
