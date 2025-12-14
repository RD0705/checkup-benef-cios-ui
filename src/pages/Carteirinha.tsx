import { Shield, Download, Wallet, User, Calendar, CreditCard, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Carteirinha = () => {
  // Mock user data
  const userData = {
    name: "João Carlos da Silva",
    plan: "Plano Ouro",
    cardNumber: "4532 •••• •••• 8976",
    validity: "12/2026",
    memberId: "CB-2024-001234",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-brand-blue">CheckUp Benefícios</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-brand-blue transition-colors font-medium">
              Início
            </Link>
            <Link to="/rede-credenciada" className="text-muted-foreground hover:text-brand-blue transition-colors font-medium">
              Rede Credenciada
            </Link>
            <Link to="/assinatura" className="text-muted-foreground hover:text-brand-blue transition-colors font-medium">
              Assinatura
            </Link>
          </nav>
          <Button variant="cta" size="sm">
            Acessar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-brand-blue transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar ao início
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Sua Carteirinha Digital
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Apresente sua carteirinha digital em qualquer estabelecimento da rede credenciada
            </p>
          </div>

          {/* 3D Card Container */}
          <div className="flex justify-center mb-12" style={{ perspective: "1000px" }}>
            <div
              className="relative w-[380px] h-[240px] animate-float"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-5deg) rotateX(5deg)",
              }}
            >
              {/* Card */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, hsl(210 100% 20%) 0%, hsl(210 80% 35%) 50%, hsl(210 100% 25%) 100%)",
                  boxShadow: "0 25px 50px -12px rgba(0, 51, 102, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset",
                  transform: "translateZ(20px)",
                }}
              >
                {/* Card Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Card Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
                        <Shield className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/70 text-xs">CheckUp Benefícios</p>
                        <p className="text-primary-foreground font-bold">{userData.plan}</p>
                      </div>
                    </div>
                    <div className="w-14 h-10 rounded bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Card Number */}
                  <div>
                    <p className="text-primary-foreground/60 text-xs mb-1">Número da Carteirinha</p>
                    <p className="text-primary-foreground text-lg font-mono tracking-wider">
                      {userData.memberId}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-primary-foreground/60 text-xs mb-1">Titular</p>
                      <p className="text-primary-foreground font-semibold">{userData.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary-foreground/60 text-xs mb-1">Validade</p>
                      <p className="text-primary-foreground font-semibold">{userData.validity}</p>
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)",
                  }}
                />
              </div>

              {/* Card Shadow */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "hsl(210 100% 15%)",
                  transform: "translateZ(-10px) translateY(10px)",
                  filter: "blur(20px)",
                  opacity: 0.3,
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="cta" size="lg" className="flex-1 gap-2">
              <Download className="w-5 h-5" />
              Baixar PDF
            </Button>
            <Button variant="outline" size="lg" className="flex-1 gap-2 border-foreground/20">
              <Wallet className="w-5 h-5" />
              Adicionar à Apple Wallet
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg bg-brand-blue-light flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Dados do Titular</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Nome:</span> {userData.name}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Plano:</span> {userData.plan}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">ID:</span> {userData.memberId}
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg bg-brand-orange-light flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Validade</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Válido até:</span> {userData.validity}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Status:</span>{" "}
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">
                      Ativo
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Carteirinha;
