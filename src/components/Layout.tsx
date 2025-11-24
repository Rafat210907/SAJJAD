import { ReactNode, lazy, Suspense } from "react";
import { Sidebar } from "./Sidebar";
import { PageTransition } from "./PageTransition";

const CursorFollower = lazy(() => 
  import("./CursorFollower").then(module => ({ default: module.CursorFollower }))
);

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={null}>
        <CursorFollower />
      </Suspense>
      <Sidebar />
      <main className="ml-64 min-h-screen">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
};
