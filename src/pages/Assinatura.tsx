import { Shield, CheckCircle2, CreditCard, Calendar, ChevronLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

const mockPaymentHistory = [
  {
    id: 1,
    date: "01/12/2024",
    amount: "R$ 189,90",
    status: "Pago",
    method: "Cartão de Crédito",
  },
  {
    id: 2,
    date: "01/11/2024",
    amount: "R$ 189,90",
    status: "Pago",
    method: "Cartão de Crédito",
  },
  {
    id: 3,
    date: "01/10/2024",
    amount: "R$ 189,90",
    status: "Pago",
    method: "Cartão de Crédito",
  },
];

const Assinatura = () => {
  const subscription = {
    plan: "Plano Ouro",
    status: "Ativo",
    price: "R$ 189,90",
    nextBilling: "01/01/2025",
    paymentMethod: "Cartão •••• 8976",
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
            <Link to="/carteirinha" className="text-muted-foreground hover:text-brand-blue transition-colors font-medium">
              Carteirinha
            </Link>
            <Link to="/rede-credenciada" className="text-muted-foreground hover:text-brand-blue transition-colors font-medium">
              Rede Credenciada
            </Link>
          </nav>
          <Button variant="cta" size="sm">
            Acessar
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-brand-blue transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar ao início
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
              Status da Assinatura
            </h1>
            <p className="text-muted-foreground">
              Gerencie sua assinatura e visualize o histórico de pagamentos
            </p>
          </div>

          {/* Current Plan Card */}
          <Card className="mb-8 border-border shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-brand-blue to-brand-blue-medium p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/70 text-sm">Seu plano atual</p>
                  <h2 className="text-2xl font-bold text-primary-foreground">{subscription.plan}</h2>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/20 text-success-foreground text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  {subscription.status}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Valor Mensal</p>
                  <p className="text-2xl font-bold text-brand-blue">{subscription.price}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Próxima Cobrança</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <p className="text-lg font-semibold text-foreground">{subscription.nextBilling}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Forma de Pagamento</p>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    <p className="text-lg font-semibold text-foreground">{subscription.paymentMethod}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card className="mb-8 border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-brand-blue">Histórico de Pagamentos</CardTitle>
              <CardDescription>Seus últimos pagamentos realizados</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockPaymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.date}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell className="text-muted-foreground">{payment.method}</TableCell>
                      <TableCell className="text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">
                          {payment.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="flex-1 gap-2">
              <CreditCard className="w-5 h-5" />
              Alterar Forma de Pagamento
            </Button>
            <Button variant="destructive" size="lg" className="flex-1 gap-2">
              <AlertTriangle className="w-5 h-5" />
              Cancelar Assinatura
            </Button>
          </div>

          {/* Help Section */}
          <div className="mt-12 p-6 bg-secondary/50 rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-2">Precisa de ajuda?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Entre em contato com nossa central de atendimento para tirar dúvidas sobre sua assinatura.
            </p>
            <Button variant="brand-outline" size="sm">
              Falar com Suporte
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assinatura;
