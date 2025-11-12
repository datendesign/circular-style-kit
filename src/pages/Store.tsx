import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Star } from "lucide-react";

const Store = () => {
  const { slug } = useParams();

  // Mock data - seria substituído por dados da API
  const storeInfo = {
    name: "Vintage Treasures",
    rating: 4.8,
    reviewsCount: 234,
    itemsCount: 156,
    description: "Peças vintage cuidadosamente selecionadas de marcas premium",
  };

  const products = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      brand: "LEVI'S",
      title: "Jaqueta Jeans Vintage",
      price: 129.9,
      condition: "Excelente" as const,
      sizes: ["M", "G"],
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      brand: "ZARA",
      title: "Vestido Floral de Verão",
      price: 89.9,
      condition: "Novo" as const,
      sizes: ["P", "M"],
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
      brand: "TIMBERLAND",
      title: "Botas de Couro Premium",
      price: 199.9,
      condition: "Excelente" as const,
      sizes: ["38", "39", "40"],
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      brand: "H&M",
      title: "Camiseta Básica Premium",
      price: 39.9,
      condition: "Bom" as const,
      sizes: ["P", "M", "G"],
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=500&fit=crop",
      brand: "DIESEL",
      title: "Calça Jeans Skinny",
      price: 149.9,
      condition: "Excelente" as const,
      sizes: ["38", "40", "42"],
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
      brand: "ADIDAS",
      title: "Jaqueta Bomber Vintage",
      price: 179.9,
      condition: "Bom" as const,
      sizes: ["M", "G", "GG"],
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
      brand: "NIKE",
      title: "Moletom Classic Logo",
      price: 119.9,
      condition: "Excelente" as const,
      sizes: ["M", "G"],
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?w=400&h=500&fit=crop",
      brand: "ZARA",
      title: "Blazer Alfaiataria",
      price: 169.9,
      condition: "Novo" as const,
      sizes: ["P", "M"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Store Header */}
      <section className="bg-surface border-b border-border py-12">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {storeInfo.name}
              </h1>
              <p className="text-muted-foreground mb-3">
                {storeInfo.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="font-semibold text-foreground">
                    {storeInfo.rating}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ({storeInfo.reviewsCount} avaliações)
                  </span>
                </div>
                <Badge variant="secondary">{storeInfo.itemsCount} produtos</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="container px-4 py-6 md:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              Tamanho
            </Button>
            <Button variant="outline" size="sm">
              Marca
            </Button>
            <Button variant="outline" size="sm">
              Condição
            </Button>
          </div>

          <Select defaultValue="newest">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Mais recentes</SelectItem>
              <SelectItem value="price-asc">Menor preço</SelectItem>
              <SelectItem value="price-desc">Maior preço</SelectItem>
              <SelectItem value="popular">Mais populares</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container px-4 pb-12 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Carregar mais produtos
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;
