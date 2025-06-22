import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Package2 } from "lucide-react";
import { HomeFooter } from "@/components/HomeFooter";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center w-full max-w-[100%] px-4 mx-auto">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span>Maghi Dairy</span>
          </Link>
          <nav className="ml-auto hidden items-center gap-4 md:flex">
            <Button asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/sign-in">Login</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/20">
          <div className="w-full max-w-[100%] px-4 mx-auto text-center md:px-6">
            <div className="mx-auto max-w-4xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Freshness Delivered to Your Doorstep
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Experience the authentic taste of farm-fresh dairy, handcrafted
                with care and delivered daily.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#products">Shop Now</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-[100%] px-4 mx-auto md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Delicious Products
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From rich ghee to creamy paneer, discover the quality and
                  taste that sets us apart.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-start gap-2 grid-cols-2 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer for Desktop */}
      <footer className="hidden border-t bg-muted/40 md:block w-full">
        <div className="w-full max-w-[100%] px-4 mx-auto grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="mb-2 flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span>Magahi Dairy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Delivering Freshness & Quality Through Our Wide Range Of Dairy
              Products
            </p>
            <div className="flex space-x-4 mt-4">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.796-1.418-1.947-1.418-3.244s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/home"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Home
              </Link>
              <a
                href="#products"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Products
              </a>
              <Link
                to="/dashboard"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Dashboard
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Contact us
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                About us
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Events & News
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Careers
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium">MUNESHWARI AGRO PVT. LTD.</p>
              <p>Vill & P.O. Dohra, Nawada, Bihar – 805109</p>
              <p>+91 8084225753</p>
              <p>Reachus@magahidairy.com</p>
            </div>
          </div>
        </div>
        <div className="border-t w-full">
          <div className="w-full max-w-[100%] px-4 mx-auto py-6 text-center text-sm text-muted-foreground">
            Copyright © 2025 Magahi. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <HomeFooter />
    </div>
  );
};

export default HomePage;
