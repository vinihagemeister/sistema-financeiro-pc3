import { map } from 'rxjs';
import { Transacao } from './transacao.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.urlApi;
const RECURSO = API+'/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService{

  constructor(
    private httpClient: HttpClient
  ){}

  selectAll(pagina: number, limiteDeLinhas: number){
    return this.httpClient.get<{ items: Transacao[], count: number }>(`${RECURSO}?page=${pagina+1}&limit=${limiteDeLinhas}`);
  }

  selectById(id: number){
    return this.httpClient.get<Transacao>(RECURSO+`/${id}`);
  }

  insert(obj: Transacao){
    return this.httpClient.post<Transacao>(RECURSO, obj);
  }

  update(obj: Transacao){
    return this.httpClient.put<Transacao>(RECURSO+`/${obj.id}`, obj);
  }

  insertOrUpdate(obj: Transacao){
    if(obj && obj.id){
      return this.update(obj);
    }else{
      return this.insert(obj);
    }
  }

  delete(id: number){
    return this.httpClient.delete<Transacao>(RECURSO+`/${id}`);
  }

  selectUltimoSaldo(){
    return this.httpClient.get<{ items: Transacao[], count: number }>
    (RECURSO).pipe(
      map(
        resposta=>{
          return resposta.items.pop()?.saldo;
          // return resposta.items[resposta.items.length-1];
        }
      )
    );
  }

}
