import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, RotateCcw, Star } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  // Mock data - seria substituído por dados da API
  const featuredProducts = [
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
  ];

  const categories = [
    { name: "Tamanhos P/M/G", link: "/loja/vintage-treasures?size=p-m-g" },
    { name: "Vintage", link: "/loja/vintage-treasures?style=vintage" },
    { name: "Streetwear", link: "/loja/vintage-treasures?style=streetwear" },
    { name: "Infantil", link: "/loja/vintage-treasures?category=infantil" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Vintage fashion collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        
        <div className="relative container h-full flex items-center px-4 md:px-8">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Moda circular sem dor de cabeça
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Compre e venda peças únicas. Pix, boleto ou cartão.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/loja/vintage-treasures">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Explorar agora
                </Button>
              </Link>
              <Link to="/cadastrar">
                <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
                  Vender minhas peças
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="container px-4 py-12 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.name} to={category.link}>
              <div className="bg-card hover:bg-card/80 border border-border rounded-lg p-6 text-center transition-all hover:scale-105">
                <h3 className="font-semibold text-foreground">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 py-12 md:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Novidades
          </h2>
          <p className="text-muted-foreground">
            Peças adicionadas nos últimos 30 dias
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/loja/vintage-treasures">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Ver mais produtos
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-surface py-12">
        <div className="container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/10 p-4 rounded-full">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Frete Correios</h3>
              <p className="text-sm text-muted-foreground">
                Entrega rápida e segura em todo o Brasil
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/10 p-4 rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Pagamento Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Pix, boleto ou cartão com total proteção
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/10 p-4 rounded-full">
                <RotateCcw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Devolução Fácil</h3>
              <p className="text-sm text-muted-foreground">
                7 dias para trocar ou devolver sua compra
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container px-4 py-16 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a gente?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <Badge className="bg-primary text-primary-foreground">Consignação</Badge>
            <h3 className="text-xl font-semibold text-foreground">
              Transparência total
            </h3>
            <p className="text-muted-foreground">
              Você acompanha tudo: anúncio, vendas e pagamento. Sem surpresas, sem burocracia.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <Badge className="bg-primary text-primary-foreground">Split Justo</Badge>
            <h3 className="text-xl font-semibold text-foreground">
              Divisão equilibrada
            </h3>
            <p className="text-muted-foreground">
              Split justo entre você e a plataforma. Você ganha o que merece por cada peça vendida.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-3">
            <Badge className="bg-primary text-primary-foreground">Qualidade</Badge>
            <h3 className="text-xl font-semibold text-foreground">
              Curadoria verificada
            </h3>
            <p className="text-muted-foreground">
              Todas as peças passam por análise de qualidade antes de serem publicadas.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-surface py-12">
        <div className="container px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            4.8/5 de avaliação
          </h3>
          <p className="text-muted-foreground mb-4">
            Baseado em mais de 2.000 avaliações de clientes satisfeitos
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div>
              <p className="text-3xl font-bold text-primary">15.000+</p>
              <p className="text-sm text-muted-foreground">Peças vendidas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Marcas disponíveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container px-4 py-16 md:px-8">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Moda circular: o futuro sustentável da moda
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A moda circular é uma abordagem sustentável que busca eliminar o desperdício e prolongar 
            a vida útil das roupas. Na Vintage Treasures, conectamos pessoas que querem dar uma nova 
            vida às suas peças com quem busca moda única e sustentável. Nossa plataforma de consignação 
            facilita a compra e venda de roupas de qualidade, contribuindo para um futuro mais consciente 
            e reduzindo o impacto ambiental da indústria da moda.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
