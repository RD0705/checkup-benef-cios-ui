import { UserPlus, Trash2, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for visualization
const mockAdmins = [
  {
    id: 1,
    email: "admin@checkup.com.br",
    createdAt: "2024-01-15",
    role: "Super Admin",
  },
  {
    id: 2,
    email: "gerente@checkup.com.br",
    createdAt: "2024-03-20",
    role: "Admin",
  },
  {
    id: 3,
    email: "suporte@checkup.com.br",
    createdAt: "2024-06-10",
    role: "Admin",
  },
];

const Configuracoes = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie administradores e configurações do sistema
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Add Admin Card */}
        <div className="bg-card rounded-xl border border-border shadow-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-brand-blue" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Adicionar Administrador</h2>
              <p className="text-sm text-muted-foreground">Convide um novo admin por e-mail</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">E-mail do administrador</Label>
              <Input
                id="email"
                type="email"
                placeholder="novo.admin@empresa.com"
                className="mt-1.5"
              />
            </div>
            <Button variant="cta" className="w-full gap-2">
              <UserPlus className="w-4 h-4" />
              Convidar Administrador
            </Button>
          </div>
        </div>

        {/* System Settings Card */}
        <div className="bg-card rounded-xl border border-border shadow-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-warning" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Sistema</h2>
              <p className="text-sm text-muted-foreground">Configurações gerais do sistema</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <div>
                  <Label htmlFor="maintenance" className="font-medium">Modo Manutenção</Label>
                  <p className="text-sm text-muted-foreground">
                    Desativa acesso público temporariamente
                  </p>
                </div>
              </div>
              <Switch id="maintenance" />
            </div>

            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
              <div>
                <Label className="font-medium">Notificações por E-mail</Label>
                <p className="text-sm text-muted-foreground">
                  Receber alertas de novos cadastros
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>

      {/* Admin List Card */}
      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="font-semibold text-foreground">Lista de Administradores</h2>
          <p className="text-sm text-muted-foreground">
            Todos os usuários com acesso administrativo
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="font-semibold">E-mail</TableHead>
              <TableHead className="font-semibold">Função</TableHead>
              <TableHead className="font-semibold">Adicionado em</TableHead>
              <TableHead className="font-semibold text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAdmins.map((admin) => (
              <TableRow key={admin.id} className="hover:bg-secondary/30">
                <TableCell className="font-medium">{admin.email}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    admin.role === "Super Admin"
                      ? "bg-brand-orange-light text-brand-orange"
                      : "bg-brand-blue-light text-brand-blue"
                  }`}>
                    {admin.role}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(admin.createdAt).toLocaleDateString("pt-BR")}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-1"
                    disabled={admin.role === "Super Admin"}
                  >
                    <Trash2 className="w-4 h-4" />
                    Remover
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Configuracoes;
