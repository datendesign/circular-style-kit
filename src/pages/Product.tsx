import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Truck, RotateCcw, Shield, Star } from "lucide-react";
import { toast } from "sonner";

const Product = () => {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Mock data - seria substituído por dados da API
  const product = {
    id: "1",
    title: "Jaqueta Jeans Vintage Premium",
    brand: "LEVI'S",
    price: 129.9,
    originalPrice: 249.9,
    condition: "Excelente",
    description:
      "Jaqueta jeans clássica da Levi's em excelente estado de conservação. Modelo icônico dos anos 90 com detalhe de lavagem vintage. Tecido 100% algodão de alta qualidade. Perfeita para um visual casual e atemporal.",
    sizes: ["M", "G"],
    measurements: {
      bust: "110cm",
      length: "65cm",
      shoulders: "48cm",
    },
    material: "100% Algodão",
    color: "Azul Denim",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?w=800&h=1000&fit=crop",
    ],
    rating: 4.8,
    reviewsCount: 12,
  };

  const relatedProducts = [
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
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Por favor, selecione um tamanho");
      return;
    }
    toast.success("Produto adicionado ao carrinho!");
  };

  const handleAddToWishlist = () => {
    toast.success("Adicionado aos favoritos!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container px-4 py-4 md:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link to="/loja/vintage-treasures" className="hover:text-primary">
            Vintage Treasures
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="container px-4 pb-12 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-card">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden bg-card cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewsCount} avaliações)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-xl text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2).replace(".", ",")}
              </span>
              <Badge className="bg-success text-success-foreground">
                48% OFF
              </Badge>
            </div>

            <Separator />

            <div>
              <Badge className="bg-primary text-primary-foreground mb-4">
                {product.condition}
              </Badge>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">
                Selecione o tamanho
              </h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className={
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleAddToCart}
              >
                Adicionar ao carrinho
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={handleAddToWishlist}
              >
                <Heart className="h-5 w-5 mr-2" />
                Adicionar aos favoritos
              </Button>
            </div>

            <div className="bg-surface rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-foreground">
                  Frete grátis acima de R$ 200
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-foreground">
                  7 dias para troca ou devolução
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-foreground">
                  Compra 100% segura
                </span>
              </div>
            </div>

            <Separator />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Material:</span>
                <span className="text-foreground font-medium">
                  {product.material}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cor:</span>
                <span className="text-foreground font-medium">
                  {product.color}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Busto:</span>
                <span className="text-foreground font-medium">
                  {product.measurements.bust}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Comprimento:</span>
                <span className="text-foreground font-medium">
                  {product.measurements.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ombros:</span>
                <span className="text-foreground font-medium">
                  {product.measurements.shoulders}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="container px-4 pb-12 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Você também pode gostar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
