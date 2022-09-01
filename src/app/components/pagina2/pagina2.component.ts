import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navegarPara(rota: any[]){
    this.router.navigate(rota);
  }

}
