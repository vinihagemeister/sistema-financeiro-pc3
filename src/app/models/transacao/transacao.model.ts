import { Usuario } from "../usuario/usuario.model";

export interface Transacao{
  id?: string | number;
  ativo?: boolean;
  createdAt?: string;
  updatedAt?: string;
  tipo: string;
  valor: number;
  saldo?: number;
  descricao: string;
  usuario: Usuario
}
