import { Link, useLocation } from "react-router-dom";
import { Package, ShoppingCart, LayoutDashboard } from "lucide-react";

export function Footer() {
  const location = useLocation();
  const navLinks = [
    { to: "/products", icon: Package, label: "Products" },
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/cart", icon: ShoppingCart, label: "Cart" },
  ];

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background">
      <nav className="flex justify-around p-2">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex flex-col items-center gap-1 p-2 rounded-md transition-all ${
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
