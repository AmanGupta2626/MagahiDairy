import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

export function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Input type="number" defaultValue="1" className="w-20 text-center" />
          <span className="text-sm text-muted-foreground">Qty</span>
        </div>
        <Button className="w-full sm:w-auto">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
