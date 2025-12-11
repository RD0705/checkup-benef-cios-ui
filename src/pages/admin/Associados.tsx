import { Search, Filter, MoreHorizontal, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock data for visualization
const mockMembers = [
  {
    id: 1,
    name: "João Silva",
    cpf: "123.456.789-00",
    plan: "Avançado",
    status: "ativo",
    expirationDate: "2025-12-31",
  },
  {
    id: 2,
    name: "Maria Santos",
    cpf: "987.654.321-00",
    plan: "Intermediário",
    status: "ativo",
    expirationDate: "2025-06-15",
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    cpf: "456.789.123-00",
    plan: "Básico",
    status: "vencido",
    expirationDate: "2024-11-30",
  },
  {
    id: 4,
    name: "Ana Costa",
    cpf: "321.654.987-00",
    plan: "Intermediário",
    status: "pendente",
    expirationDate: null,
  },
  {
    id: 5,
    name: "Pedro Lima",
    cpf: "789.123.456-00",
    plan: "Avançado",
    status: "vencido",
    expirationDate: "2024-10-15",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "ativo":
      return (
        <Badge className="bg-success/10 text-success hover:bg-success/20 border-0">
          Ativo
        </Badge>
      );
    case "vencido":
      return (
        <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20 border-0">
          Vencido
        </Badge>
      );
    case "pendente":
      return (
        <Badge className="bg-warning/10 text-warning hover:bg-warning/20 border-0">
          Pendente
        </Badge>
      );
    default:
      return (
        <Badge variant="outline">
          {status}
        </Badge>
      );
  }
};

const Associados = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Associados</h1>
        <p className="text-muted-foreground">
          Gerencie todos os associados cadastrados no sistema
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou CPF..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="font-semibold">Nome</TableHead>
              <TableHead className="font-semibold">CPF</TableHead>
              <TableHead className="font-semibold">Plano</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockMembers.map((member) => (
              <TableRow key={member.id} className="hover:bg-secondary/30">
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell className="text-muted-foreground">{member.cpf}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue-light text-brand-blue">
                    {member.plan}
                  </span>
                </TableCell>
                <TableCell>{getStatusBadge(member.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Eye className="w-4 h-4" />
                      Ver Detalhes
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination placeholder */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Mostrando 1-5 de 5 resultados
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Anterior
          </Button>
          <Button variant="outline" size="sm" disabled>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Associados;
