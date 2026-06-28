import { Link, NavLink } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Home, BookOpen, Info, PhoneCall } from "lucide-react";
import { cn } from "@/utils/cn";

export function Navbar() {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/courses", icon: BookOpen, label: "Courses" },
    { to: "/about", icon: Info, label: "About Academy" },
    { to: "/contact", icon: PhoneCall, label: "Enquiry" },
  ];

  return (
    <>
      {/* 1. Floating Top-Left Branding Badge */}
      <div className="fixed top-6 left-4 md:left-6 z-50 flex items-center gap-3 bg-white/85 dark:bg-zinc-900/85 border border-black/5 dark:border-white/10 px-4 py-2 rounded-2xl backdrop-blur-md shadow-lg select-none">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl overflow-hidden bg-white shadow-sm border border-zinc-100 dark:border-zinc-800">
            <img src="/images/app-logo.png" alt="VHA Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-zinc-900 dark:text-white font-extrabold text-sm tracking-tight">Vasanth Academy</span>
        </Link>
      </div>

      {/* 2. Right-Side Vertical Floating Icon Navigation */}
      <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3.5 bg-white/85 dark:bg-zinc-900/85 border border-black/5 dark:border-white/10 p-2.5 rounded-full backdrop-blur-md shadow-2xl transition-colors duration-300">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              title={item.label}
              className={({ isActive }) =>
                cn(
                  "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 relative group",
                  isActive
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                )
              }
            >
              <Icon className="w-5 h-5" />
              
              {/* Desktop tooltip on hover */}
              <span className="absolute right-14 scale-75 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold px-2.5 py-1.5 rounded-xl whitespace-nowrap shadow-md">
                {item.label}
              </span>
            </NavLink>
          );
        })}

        {/* Separator Line */}
        <div className="w-7 h-[1px] bg-black/5 dark:bg-white/10" />

        {/* Theme Preference Toggle */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-300">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
