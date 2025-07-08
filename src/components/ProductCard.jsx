import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";
import { Star, ShoppingCart } from "lucide-react";

export function ProductCard({ product }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const quantity = Math.max(1, parseInt(qty, 10) || 1);
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`);
    setQty(1); // reset after add
  };

  return (
    <Card className="overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-200 group">
      <CardHeader className="p-0 bg-gray-50 flex justify-center items-center h-48 relative">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-44 max-w-full object-contain p-2"
        />
        {product.badge && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            {product.badge}
          </Badge>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
            <Star className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-3">
        <CardTitle className="line-clamp-2 mb-1 text-lg font-bold text-gray-800 text-center">
          {product.name}
        </CardTitle>
        
        <p className="text-sm text-gray-600 text-center line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < (product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.rating || 0})</span>
          </div>
        </div>

        <div className="flex justify-center items-center mt-2 mb-1">
          <span className="text-2xl sm:text-3xl font-extrabold text-blue-600">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-20 text-center h-10"
            />
            <span className="text-sm text-gray-600">Qty</span>
          </div>
          <Button
            className="w-full sm:w-auto font-semibold text-base py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
