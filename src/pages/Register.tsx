import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft } from "lucide-react";
import authBg from "@/assets/auth-bg.jpg";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de cadastro
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12 bg-background">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Voltar para home
            </Link>
            
            <h1 className="text-3xl font-bold text-foreground">
              Criar sua conta
            </h1>
            <p className="mt-2 text-muted-foreground">
              Comece a vender suas peças em minutos
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="João Silva"
                required
                className="bg-surface border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="bg-surface border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                required
                className="bg-surface border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 8 caracteres"
                required
                minLength={8}
                className="bg-surface border-border"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" required />
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
              >
                Concordo com os{" "}
                <Link to="/termos" className="text-primary hover:underline">
                  termos de uso
                </Link>{" "}
                e{" "}
                <Link to="/privacidade" className="text-primary hover:underline">
                  política de privacidade
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Criando conta..." : "Criar conta"}
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Já tem uma conta? </span>
              <Link to="/login" className="text-primary hover:underline font-medium">
                Fazer login
              </Link>
            </div>
          </form>

          <div className="bg-surface border border-border rounded-lg p-4 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Por que cadastrar?</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Consignação transparente e sem burocracia</li>
              <li>Acompanhe suas vendas em tempo real</li>
              <li>Receba pagamentos de forma segura</li>
              <li>Faça parte da moda circular</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src={authBg}
          alt="Fashion background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40 flex items-center justify-center p-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Vintage Treasures
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforme seu guarda-roupa em renda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
