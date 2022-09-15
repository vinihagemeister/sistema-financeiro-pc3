import { Veiculo } from './veiculo.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.urlApiTabelaFipe;
const RECURSO = API+'/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService{

  constructor(
    private httpClient: HttpClient
  ){}

  consutarModelos(obj: any){
    return this.httpClient.post<any>(RECURSO+"/ConsultarModelos", obj);
  }

  consutarMarcas(obj: any){
    return this.httpClient.post<any>(RECURSO+"/ConsultarMarcas", obj);
  }


  // selectAll(){
  //   return this.httpClient.get<Veiculo[]>(RECURSO);
  // }

  // selectById(id: number){
  //   return this.httpClient.get<Veiculo[]>(RECURSO+`/${id}`);
  // }

  // insert(obj: Veiculo){
  //   return this.httpClient.post<Veiculo>(RECURSO, obj);
  // }

  // update(obj: Veiculo){
  //   return this.httpClient.put<Veiculo>(RECURSO+`/${obj.id}`, obj);
  // }

  // insertOrUpdate(obj: Veiculo){
  //   if(obj && obj.id){
  //     return this.update(obj);
  //   }else{
  //     return this.insert(obj);
  //   }
  // }

  // delete(id: number){
  //   return this.httpClient.delete<Veiculo>(RECURSO+`/${id}`);
  // }

  // selectAll(){
  //   return [
  //     { id:1, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:2, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:3, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:4, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:5, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //     { id:6, ativo: true, createdAt: "2022-08-18", updatedAt: "2022-08-18", descricao: "teste", valor: 100, saldo: 200, tipo: "ENTRADA"},
  //   ] as Veiculo[]
  // }

}
