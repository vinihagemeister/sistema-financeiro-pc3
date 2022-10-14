export interface Usuario{
  id?: string | number;
  ativo?: boolean;
  createdAt?: string;
  updatedAt?: string;

  nome: string;
  sobrenome?: string;
  username: string;
  cpf: string;
}
