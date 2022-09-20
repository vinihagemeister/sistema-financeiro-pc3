import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
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
      }
    )
  }

  navegaPara(rota: any[]){
    this.router.navigate(rota);
  }
}
