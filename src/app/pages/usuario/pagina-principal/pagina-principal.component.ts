import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transacao } from 'src/app/models/transacao/transacao.model';
import { TransacaoService } from 'src/app/models/transacao/transacao.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DialogInserirTransacaoComponent } from 'src/app/components/dialog-inserir-transacao/dialog-inserir-transacao.component';
import { DialogConfirmacaoExclusao } from 'src/app/components/dialog-confirmacao-exclusao/dialog-confirmacao-exclusao.component';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  dataSource1: MatTableDataSource<Transacao> = new MatTableDataSource([] as Transacao[]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'createdAt', 'tipo', 'valor', 'saldo', 'acoes'];

  totalDeLinhas = 0;
  limiteDeLinhas = 5;
  pagina = 0;
  pageSizeOptions1: number[] = [5, 10, 25, 100];


  constructor(
    private router: Router,
    private transacaoService: TransacaoService,
    public dialog: MatDialog,
  ) { }

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator as MatPaginator;
    this.populaDataSourceEPaginator([] as Transacao[]);
  }

  populaDataSourceEPaginator(transacoes: Transacao[], linhasTotais?: number){
    this.paginator.pageIndex = this.pagina;

    if(linhasTotais){
      this.paginator.length = linhasTotais;
    }

    this.dataSource1 = new MatTableDataSource(transacoes);
  }

  pageChanged(event: PageEvent) {
    this.limiteDeLinhas = event.pageSize;
    this.pagina = event.pageIndex;
    this.buscaListaDeTransacoes();
  }

  ngOnInit() {
    this.buscaListaDeTransacoes();
  }


  // handlePageEvent(event: PageEvent) {
  //   this.length = event.length;
  //   this.pageSize = event.pageSize;
  //   this.pageIndex = event.pageIndex;
  // }



  buscaListaDeTransacoes() {
    let that = this;

    this.transacaoService.selectAllComPaginacao(this.pagina, this.limiteDeLinhas).subscribe(
      {
        next(resposta){
          that.populaDataSourceEPaginator(resposta.content, resposta.totalElements);
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

  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  openDialogAddOrUpdateTransacao(obj?: Transacao){
    const dialogRef = this.dialog.open(DialogInserirTransacaoComponent, {
      width: '1000px',
      data: { transacao: obj}
    });

    dialogRef.afterClosed().subscribe(result => {
      // if(result && result.id) this.transacoes = this.transacoes.concat([result]);
      this.buscaListaDeTransacoes();
    });

  }

  openDialogConfirmacaoExclusaoTransacao(obj: Transacao){
    const dialogRef = this.dialog.open(DialogConfirmacaoExclusao, {
      width: '1000px',
      data: { transacao: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.buscaListaDeTransacoes();
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
