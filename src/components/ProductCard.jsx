import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "react-hot-toast";

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
    <Card className="overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-200">
      <CardHeader className="p-0 bg-gray-50 flex justify-center items-center h-40">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-36 max-w-full object-contain"
        />
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-2">
        <CardTitle className="line-clamp-2 mb-1 text-lg font-bold text-gray-800 text-center">
          {product.name}
        </CardTitle>
        <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
          <div>
            Code:{" "}
            <span className="font-semibold text-gray-700">{product.code}</span>
          </div>
          <div>
            SKU/CRT:{" "}
            <span className="font-semibold text-gray-700">
              {product.sku_crt}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 mb-1">
          <span className="text-2xl sm:text-3xl font-extrabold text-primary">
            ₹{product.new_db_price}
          </span>
          <span className="ml-2 text-xs text-gray-400 line-through">
            ₹{product.new_mrp}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-4 ">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-20 text-center"
          />
          <span className="text-sm text-muted-foreground">Qty</span>
        </div>
        <Button
          className="w-full sm:w-auto font-semibold text-base py-2 px-4"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
