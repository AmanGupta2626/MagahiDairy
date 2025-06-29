import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Package2 } from "lucide-react";
import { Footer } from "@/components/Footer";

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
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.507.4 3.533 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.07 4.85.07s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647 2.175 15.267 2.163 12 2.163z" />
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
                to="/"
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
      <Footer />
    </div>
  );
};

export default HomePage;
