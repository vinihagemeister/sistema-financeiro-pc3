import { DialogInserirTransacaoComponent } from './../dialog-inserir-transacao/dialog-inserir-transacao.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transacao } from 'src/app/models/transacao/transacao.model';
import { TransacaoService } from 'src/app/models/transacao/transacao.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  transacoes: any = [];

  displayedColumns: string[] = ['id', 'createdAt', 'tipo', 'valor', 'saldo', 'acoes'];

  constructor(
    private router: Router,
    private transacaoService: TransacaoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

   this.buscaListaDeTransacoes();



    // let transacao1: Transacao = {
    //   id:1,
    //   ativo: true,
    //   createdAt: "2022-08-18",
    //   updatedAt: "2022-08-18",
    //   descricao: "teste",
    //   valor: 100,
    //   saldo: 200,
    //   tipo: "ENTRADA"
    // };


  }

  buscaListaDeTransacoes() {
    let that = this;

    this.transacaoService.selectAll().subscribe(
      {
        next(transacoes){
          that.transacoes = transacoes;
        },
        error(err){
          console.error(err);
        },
        complete(){
          console.log("requisição completa");
        }
      }
    );
  }

  addTransacao(){
    // this.dataSource.push(  {
    //   id:1,
    //   ativo: true,
    //   createdAt: "2022-08-18",
    //   updatedAt: "2022-08-18",
    //   descricao: "teste",
    //   valor: 100,
    //   saldo: 200,
    //   tipo: "ENTRADA"
    // });

    this.transacoes = this.transacoes.concat([{
        id:1,
        ativo: true,
        createdAt: "2022-08-18",
        updatedAt: "2022-08-18",
        descricao: "teste",
        valor: 100,
        saldo: 200,
        tipo: "ENTRADA"
    }])

    //breanch vinicius

  }


  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.transacoes.filter = filterValue.trim().toLowerCase();
  }

  openDialogAddTransacao(obj?: Transacao){
    const dialogRef = this.dialog.open(DialogInserirTransacaoComponent, {
      width: '1000px',
      data: {a: "aaaa"}
    });

    dialogRef.afterClosed().subscribe(result => {
      // if(result && result.id) this.transacoes = this.transacoes.concat([result]);
      this.buscaListaDeTransacoes();
    });

  }

  deletar(obj: Transacao){
    let that = this;

    this.transacaoService.delete(obj.id as number).subscribe(
      {
        next(transacao){

          that.buscaListaDeTransacoes();

        },
        error(err){
          console.error(err);
        },
        complete(){
          console.log("requisição completa");
        }
      }
    );
  }

}
