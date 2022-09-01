export interface Transacao{
  id?: number;
  ativo?: boolean;
  createdAt?: string;
  updatedAt?: string;
  tipo: string;
  valor: number;
  saldo?: number;
  descricao: string;
}
