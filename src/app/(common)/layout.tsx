import NavBarV2 from "@/src/components/shared/NavBar/NavBarV2";
// import NavBar from "@/src/components/shared/NavBar/navComponent/NavBar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBarV2 />
      {children}
    </>
  );
};

export default Layout;
