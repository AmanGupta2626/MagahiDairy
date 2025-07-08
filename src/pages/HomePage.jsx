import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Package2, Menu, X, ChevronRight, Star, Truck, Shield, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery across the city"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "100% fresh and pure dairy products"
    },
    {
      icon: Zap,
      title: "Smart Ordering",
      description: "Easy online ordering system"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Franchise Partners" },
    { number: "24/7", label: "Customer Support" },
    { number: "5★", label: "Customer Rating" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 w-full">
      {/* Enhanced Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="container flex h-16 items-center w-full max-w-[100%] px-4 mx-auto">
          <Link to="/" className="flex items-center gap-3 font-bold text-xl">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <Package2 className="h-6 w-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Maghi Dairy
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            <Button asChild variant="ghost" className="hover:bg-blue-50">
              <Link to="/products">Products</Link>
            </Button>
            <Button asChild variant="ghost" className="hover:bg-blue-50">
              <Link to="/contact">Contact</Link>
            </Button>
            {isLoggedIn ? (
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link to="/sign-in">Login</Link>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <nav className="flex flex-col gap-4">
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/products">Products</Link>
              </Button>
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/contact">Contact</Link>
              </Button>
              {isLoggedIn ? (
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link to="/sign-in">Login</Link>
                </Button>
              )}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 w-full">
        {/* Enhanced Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative w-full max-w-[100%] px-4 mx-auto text-center md:px-6">
            <div className="mx-auto max-w-5xl space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Freshness Delivered
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    to Your Doorstep
                  </span>
                </h1>
                <p className="mx-auto max-w-[800px] text-xl text-gray-600 md:text-2xl leading-relaxed">
                  Experience the authentic taste of farm-fresh dairy, handcrafted
                  with care and delivered daily. Join our franchise network today.
                </p>
              </div>
              
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                  <a href="#products">Explore Products</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50">
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 bg-white">
          <div className="w-full max-w-[100%] px-4 mx-auto md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                  Why Choose Maghi Dairy?
                </h2>
                <p className="max-w-[600px] mx-auto text-lg text-gray-600">
                  We're committed to delivering the highest quality dairy products with exceptional service
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105">
                    <div className="inline-flex p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Products Section */}
        <section id="products" className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full max-w-[100%] px-4 mx-auto md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-16 flex flex-col items-center justify-center space-y-6 text-center">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Our Premium Products
                  </h2>
                  <p className="max-w-[800px] text-lg text-gray-600 md:text-xl">
                    From rich ghee to creamy paneer, discover the quality and
                    taste that sets us apart. All products are sourced from our own farms.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {products.map((product) => (
                  <div key={product.name} className="group">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button asChild size="lg" className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link to="/products">View All Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 bg-white">
          <div className="w-full max-w-[100%] px-4 mx-auto md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                  What Our Customers Say
                </h2>
                <p className="max-w-[600px] mx-auto text-lg text-gray-600">
                  Don't just take our word for it - hear from our satisfied customers
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Rahul Sharma",
                    role: "Restaurant Owner",
                    content: "The quality of Maghi Dairy products is exceptional. Our customers love the fresh taste!",
                    rating: 5
                  },
                  {
                    name: "Priya Patel",
                    role: "Home Chef",
                    content: "I've been using Maghi Dairy for months now. The delivery is always on time and products are fresh.",
                    rating: 5
                  },
                  {
                    name: "Amit Kumar",
                    role: "Cafe Manager",
                    content: "Best dairy supplier we've worked with. Consistent quality and great service.",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer for Desktop */}
      <footer className="hidden border-t bg-gradient-to-r from-gray-900 to-gray-800 text-white md:block w-full">
        <div className="w-full max-w-[100%] px-4 mx-auto grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="mb-2 flex items-center gap-2 font-semibold text-xl">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Package2 className="h-6 w-6 text-white" />
              </div>
              <span>Maghi Dairy</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Delivering Freshness & Quality Through Our Wide Range Of Dairy
              Products. Join our franchise network and grow with us.
            </p>
            <div className="flex space-x-4 mt-4">
              <Button variant="outline" size="icon" className="h-10 w-10 border-gray-600 hover:border-blue-500 hover:bg-blue-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10 border-gray-600 hover:border-blue-500 hover:bg-blue-500">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.507.4 3.533 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.07 4.85.07s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647 2.175 15.267 2.163 12 2.163z" />
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10 border-gray-600 hover:border-blue-500 hover:bg-blue-500">
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-6 font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                Products
              </a>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact us
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-6 font-semibold text-lg">Company</h3>
            <nav className="flex flex-col gap-3">
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                About us
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                Events & News
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                Franchise Opportunities
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-6 font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p className="font-medium text-white">MUNESHWARI AGRO PVT. LTD.</p>
              <p>Vill & P.O. Dohra, Nawada, Bihar – 805109</p>
              <p className="flex items-center gap-2">
                <span>📞</span> +91 8084225753
              </p>
              <p className="flex items-center gap-2">
                <span>✉️</span> Reachus@magahidairy.com
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 w-full">
          <div className="w-full max-w-[100%] px-4 mx-auto py-6 text-center text-sm text-gray-400">
            Copyright © 2025 Maghi Dairy. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
