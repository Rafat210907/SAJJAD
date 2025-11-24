import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      key={location.pathname}
      className={isHomePage ? "" : "animate-wipe-in"}
    >
      {children}
    </div>
  );
};
