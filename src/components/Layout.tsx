import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { CursorFollower } from "./CursorFollower";
import { PageTransition } from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <CursorFollower />
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
};
