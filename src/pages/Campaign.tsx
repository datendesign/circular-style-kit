import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Countdown } from "@/components/Countdown";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Tag } from "lucide-react";
import heroCampaign from "@/assets/hero-campaign.jpg";
import { toast } from "sonner";

const Campaign = () => {
  const { slug } = useParams();

  // Mock data - seria substituído por dados da API
  const campaignProducts = [
    {
      id: "c1",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      brand: "LEVI'S",
      title: "Jeans 501 Original Vintage",
      price: 159.9,
      condition: "Excelente" as const,
      sizes: ["38", "40", "42"],
    },
    {
      id: "c2",
      image: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=400&h=500&fit=crop",
      brand: "DIESEL",
      title: "Jeans Skinny Premium",
      price: 189.9,
      condition: "Novo" as const,
      sizes: ["36", "38", "40"],
    },
    {
      id: "c3",
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
      brand: "WRANGLER",
      title: "Jeans Bootcut Clássico",
      price: 139.9,
      condition: "Excelente" as const,
      sizes: ["40", "42", "44"],
    },
    {
      id: "c4",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
      brand: "CALVIN KLEIN",
      title: "Jeans Slim Fit Premium",
      price: 169.9,
      condition: "Novo" as const,
      sizes: ["38", "40", "42", "44"],
    },
    {
      id: "c5",
      image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=500&fit=crop",
      brand: "LEE",
      title: "Jeans Relaxed Vintage",
      price: 129.9,
      condition: "Excelente" as const,
      sizes: ["40", "42", "44", "46"],
    },
    {
      id: "c6",
      image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=400&h=500&fit=crop",
      brand: "GAP",
      title: "Jeans Straight Premium",
      price: 149.9,
      condition: "Excelente" as const,
      sizes: ["36", "38", "40", "42"],
    },
  ];

  const faqs = [
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega varia de 7 a 15 dias úteis, dependendo da sua região. Você pode rastrear seu pedido através do e-mail de confirmação.",
    },
    {
      question: "Posso trocar se não servir?",
      answer: "Sim! Você tem 7 dias corridos para solicitar troca ou devolução. O produto deve estar sem uso e com todas as etiquetas.",
    },
    {
      question: "Como funciona o frete grátis?",
      answer: "Para compras acima de R$ 200,00, o frete é totalmente grátis para todo o Brasil.",
    },
    {
      question: "Os produtos são originais?",
      answer: "Sim, todas as peças passam por verificação de autenticidade e qualidade antes de serem publicadas.",
    },
  ];

  const handleLeadCapture = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Obrigado! Você receberá nossas novidades em breve.");
  };

  // Data de término da campanha (exemplo: 7 dias a partir de agora)
  const campaignEndDate = new Date();
  campaignEndDate.setDate(campaignEndDate.getDate() + 7);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCampaign}
            alt="Semana do Jeans Premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>

        <div className="relative container h-full flex flex-col justify-center px-4 md:px-8">
          <Badge className="bg-primary text-primary-foreground w-fit mb-4">
            Oferta Limitada
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Semana do Jeans Premium
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
            Tamanhos do 34 ao 46. Marcas premium com até 20% de desconto. Só até domingo!
          </p>
          <div className="mb-6">
            <Countdown targetDate={campaignEndDate} />
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
            Ver Coleção
          </Button>
        </div>
      </section>

      {/* Offer Highlight */}
      <section className="bg-surface py-8">
        <div className="container px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Tag className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Até 20% OFF</p>
                <p className="text-sm text-muted-foreground">Em peças selecionadas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Frete Grátis</p>
                <p className="text-sm text-muted-foreground">Acima de R$ 200</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Garantia</p>
                <p className="text-sm text-muted-foreground">7 dias para trocas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container px-4 py-12 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Coleção Premium de Jeans
            </h2>
            <p className="text-muted-foreground">
              {campaignProducts.length} peças únicas — estoque limitado
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {campaignProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Carregar mais produtos
          </Button>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="bg-surface py-12">
        <div className="container px-4 md:px-8 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não perca as próximas ofertas
          </h2>
          <p className="text-muted-foreground mb-6">
            Cadastre-se e receba em primeira mão nossas campanhas exclusivas
          </p>
          
          <form onSubmit={handleLeadCapture} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 bg-background border-border"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Quero receber
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="container px-4 py-12 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Campaign;
