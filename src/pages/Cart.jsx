import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export function Cart() {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce(
    (sum, item) => sum + item.product.new_db_price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto py-8 px-2 sm:px-0">
      <Card className="shadow-xl border-2 border-gray-100">
        <CardHeader className="bg-gray-50 border-b">
          <CardTitle className="text-2xl font-bold">🛒 Shopping Cart</CardTitle>
          <CardDescription className="text-base">
            Review your selected products and proceed to checkout.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {items.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-lg">
              Your cart is empty.
            </div>
          ) : (
            <div className="divide-y">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.code}
                  className="flex flex-col sm:flex-row items-center gap-4 py-4 px-4 hover:bg-gray-50 transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain rounded-lg border bg-white"
                  />
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="font-semibold text-lg text-gray-800 line-clamp-1">
                      {product.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Code: {product.code}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      SKU/CRT: {product.sku_crt}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 min-w-[100px]">
                    <div className="text-base font-bold text-primary">
                      ₹{product.new_db_price}
                    </div>
                    <div className="text-xs text-gray-400 line-through">
                      ₹{product.new_mrp}
                    </div>
                    <div className="text-sm">
                      Qty: <span className="font-semibold">{quantity}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Subtotal:{" "}
                      <span className="font-semibold">
                        ₹{(product.new_db_price * quantity).toFixed(2)}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => removeFromCart(product.code)}
                      className="mt-1"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        {items.length > 0 && (
          <div className="border-t bg-gray-50 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-start gap-1">
              <div className="text-lg font-bold text-gray-800">Total</div>
              <div className="text-2xl font-extrabold text-primary">
                ₹{total.toFixed(2)}
              </div>
            </div>
            <Button
              variant="destructive"
              onClick={clearCart}
              className="w-full sm:w-auto mt-2 sm:mt-0"
            >
              Clear Cart
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
