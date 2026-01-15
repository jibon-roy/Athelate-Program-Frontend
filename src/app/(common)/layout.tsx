import NavBarV2 from "@/src/components/shared/NavBar/NavBarV2";
import Sidebar from "@/src/components/shared/sidebar/Sidebar";
// import NavBar from "@/src/components/shared/NavBar/navComponent/NavBar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <NavBarV2 />
        <div>
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
