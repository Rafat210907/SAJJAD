import { Home, User, Briefcase, FolderOpen, Newspaper, Mail, Moon, Sun } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState, useEffect } from "react";
export const Sidebar = () => {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    // Set dark mode by default on first load
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme') && !document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
    } else {
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, []);
  const toggleTheme = () => {
    const newIsDark = !isDark;
    document.documentElement.classList.toggle("dark");
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };
  const navItems = [{
    to: "/",
    icon: Home,
    label: "Home"
  }, {
    to: "/about",
    icon: User,
    label: "About"
  }, {
    to: "/services",
    icon: Briefcase,
    label: "Service"
  }, {
    to: "/portfolio",
    icon: FolderOpen,
    label: "Portfolio"
  }, {
    to: "/contact",
    icon: Mail,
    label: "Contact"
  }];
  return <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col p-8 z-50">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold tracking-widest">SAJJAD





      </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map(item => <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300" activeClassName="text-foreground bg-secondary font-medium">
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            </li>)}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8 border-t border-border">
        <div className="text-xs text-muted-foreground mb-4">
          <p>© 2025 Sajjad</p>
          <p className="mt-1">Created with passion</p>
        </div>
        
        <button onClick={toggleTheme} className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-muted transition-colors" aria-label="Toggle theme">
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </aside>;
};