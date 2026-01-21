import NavBarV2 from "@/src/components/shared/NavBar/NavBarV2";
import Sidebar from "@/src/components/shared/sidebar/Sidebar";
// import NavBar from "@/src/components/shared/NavBar/navComponent/NavBar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="max-w-360 mx-auto">
        <NavBarV2 />
        <div className="flex gap-4 md:gap-6">
          <div>
            <Sidebar />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
