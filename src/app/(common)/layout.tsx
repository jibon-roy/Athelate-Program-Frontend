import NavBar from "@/src/components/shared/NavBar/navComponent/NavBar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
