import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }

}
