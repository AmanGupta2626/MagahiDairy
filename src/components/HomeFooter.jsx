import { Link, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, LogIn, Mail } from "lucide-react";

export function HomeFooter() {
  const location = useLocation();
  const navLinks = [
    { to: "/home", icon: Home, label: "Home" },
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/contact", icon: Mail, label: "Contact" },
    { to: "/sign-in", icon: LogIn, label: "Login" },
  ];

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background">
      <nav className="flex justify-around p-2">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex flex-col items-center gap-1 p-2 rounded-md transition-all w-24 ${
              location.pathname === link.to
                ? "text-primary bg-muted"
                : "text-muted-foreground"
            }`}
          >
            <link.icon className="h-6 w-6" />
            <span className="text-xs">{link.label}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
}
