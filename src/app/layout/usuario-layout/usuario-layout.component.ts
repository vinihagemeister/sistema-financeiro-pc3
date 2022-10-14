import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, switchMap, timeout } from 'rxjs';

@Component({
  selector: 'app-usuario-layout',
  templateUrl: './usuario-layout.component.html',
  styleUrls: ['./usuario-layout.component.scss']
})
export class UsuarioLayoutComponent implements OnInit {

  title = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
      this.buscaParametrosDaRota();
  }

  buscaParametrosDaRota(){
    this.router.events.pipe(
      map(
        ()=>{
          let route = this.activatedRoute;
          while(route.firstChild){
            route = route.firstChild;
          }
          return route;
        }
      ),
      switchMap((route)=> route.data)
    ).subscribe(
      (data) => {
        this.title = data['title'];
        console.log("this.title");
        console.log(this.title);
        // if(this.title == '') this.buscaParametrosDaRota();
      }
    )
  }

  navegaPara(rota: any[]){
    this.router.navigate(rota);
  }

}
