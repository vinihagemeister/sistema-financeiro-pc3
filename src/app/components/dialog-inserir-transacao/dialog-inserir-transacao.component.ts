import { TransacaoService } from 'src/app/models/transacao/transacao.service';
import { Transacao } from 'src/app/models/transacao/transacao.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-inserir-transacao',
  templateUrl: './dialog-inserir-transacao.component.html',
  styleUrls: ['./dialog-inserir-transacao.component.scss']
})
export class DialogInserirTransacaoComponent implements OnInit {

  transacao = {} as Transacao;

  descricaoInput: string = '';
  valorInput: number = 0;
  tipoInput: string = '';


  constructor(
    public dialogRef: MatDialogRef<DialogInserirTransacaoComponent>,
    private transacaoService: TransacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

    if(this.data && this.data.transacao){
      this.modelToForm(this.data.transacao);
    }

  }

  salvar(){

    let transacaoParaSalvar = this.formToModel();

    let that = this;

    this.transacaoService.selectUltimoSaldo().subscribe(
      saldo=>{
        if(saldo){

          if(transacaoParaSalvar.tipo == "ENTRADA"){

            transacaoParaSalvar.saldo = Number(saldo) + Number(transacaoParaSalvar.valor);
            this.salvarTransacao(transacaoParaSalvar);

          }else if(transacaoParaSalvar.tipo == "SAIDA"){

            transacaoParaSalvar.saldo = Number(saldo) - Number(transacaoParaSalvar.valor);
            this.salvarTransacao(transacaoParaSalvar);

          }

        }
      }
    )

  }

  salvarTransacao(transacaoParaSalvar: Transacao){
    let that = this;

    this.transacaoService.insertOrUpdate(transacaoParaSalvar).subscribe(
      {
        next(transacao){
          that.dialogRef.close(transacao);
        },
        error(err){
          console.error(err);
        },
        complete(){
          // console.log("requisição insertPrUpdate completa");
        }
      }
    );
  }

  modelToForm(transacao: Transacao){
    this.transacao = transacao;

    this.descricaoInput = transacao.descricao;
    this.valorInput = transacao.valor;
    this.tipoInput = transacao.tipo;
  }

  formToModel(): Transacao{
    this.transacao.descricao = this.descricaoInput;
    this.transacao.valor = this.valorInput;
    this.transacao.tipo = this.tipoInput;

    return this.transacao;
  }

  cancelar(){
    this.dialogRef.close();
  }

}
