import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  image: string;
  brand: string;
  title: string;
  price: number;
  condition?: "Novo" | "Excelente" | "Bom" | "Usado";
  sizes?: string[];
}

export const ProductCard = ({ id, image, brand, title, price, condition, sizes }: ProductCardProps) => {
  return (
    <Link to={`/produto/${id}`} className="group">
      <div className="overflow-hidden rounded-lg bg-card transition-all hover:shadow-[var(--shadow-card)] hover:scale-[1.02]">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          {condition && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              {condition}
            </Badge>
          )}
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{brand}</p>
          <h3 className="text-base font-medium text-foreground line-clamp-2">{title}</h3>
          {sizes && sizes.length > 0 && (
            <p className="text-xs text-muted-foreground">
              Tamanhos: {sizes.join(", ")}
            </p>
          )}
          <p className="text-lg font-bold text-primary">
            R$ {price.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>
    </Link>
  );
};
