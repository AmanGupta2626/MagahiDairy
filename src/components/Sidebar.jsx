import { Link, useLocation } from "react-router-dom";
import {
  Bell,
  Home,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
  TrendingUp,
  Truck
} from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export function Sidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { cart } = useCart();
  
  const navLinks = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/products", icon: Package, label: "Products" },
    { to: "/sales", icon: ShoppingCart, label: "Sales" },
    { to: "/distributors", icon: Users, label: "Distributors" },
    { to: "/drivers", icon: Truck, label: "Drivers" },
    { to: "/reports", icon: LineChart, label: "Reports" },
    { to: "/cart", icon: ShoppingCart, label: "Cart" },
  ];

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <aside className="hidden border-r bg-white md:block shadow-sm">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* Logo Section */}
        <div className="flex h-16 items-center border-b px-4 lg:h-[70px] lg:px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <Link to="/" className="flex items-center gap-3 font-bold text-white">
            <div className="p-2 bg-white/20 rounded-lg">
              <Package2 className="h-6 w-6" />
            </div>
            <span className="text-lg">Maghi Dairy</span>
          </Link>
        </div>

        {/* User Profile Section */}
        {user && (
          <div className="p-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar || "https://i.pravatar.cc/150?u=a042581f4e29026024d"}
                className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
                alt="Avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-900 truncate">{user.name}</p>
                <p className="text-xs text-gray-600 truncate">{user.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 px-3 py-4">
          <nav className="grid items-start gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-200 group relative ${
                  location.pathname === link.to
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <link.icon className={`h-5 w-5 ${
                  location.pathname === link.to ? "text-white" : "text-gray-500 group-hover:text-gray-700"
                }`} />
                <span className="font-medium">{link.label}</span>
                {link.to === "/cart" && cartItemCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
                {location.pathname === link.to && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Today's Orders</span>
                <span className="font-semibold text-green-600">156</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Revenue</span>
                <span className="font-semibold text-blue-600">₹45,678</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold text-orange-600">23</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button 
              variant="ghost" 
              onClick={logout}
              className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
