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

  descricaoInput: string = '';
  valorInput: number = 0;
  tipoInput: string = '';


  constructor(
    public dialogRef: MatDialogRef<DialogInserirTransacaoComponent>,
    private transacaoService: TransacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data);

  }

  salvar(){



    let transacaoObj = this.formToModel();

    let that = this;

    this.transacaoService.insert(transacaoObj).subscribe(
      {
        next(transacao){
          that.dialogRef.close(transacao);
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

  formToModel(): Transacao{

    let transacaoParaSalvar = {
      descricao: this.descricaoInput,
      valor: this.valorInput,
      tipo: this.tipoInput
    } as Transacao;

    return transacaoParaSalvar;

    // let transacaoParaSalvar = {} as Transacao;
    // transacaoParaSalvar.descricao = this.descricaoInput;
    // transacaoParaSalvar.valor = this.valorInput;
    // transacaoParaSalvar.tipo = this.tipoInput;
  }

  cancelar(){
    this.dialogRef.close();
  }

}
