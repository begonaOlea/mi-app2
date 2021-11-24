import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-observable',
  templateUrl: './demo-observable.component.html',
  styleUrls: ['./demo-observable.component.css']
})
export class DemoObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

     const m = Observable.create((observer) => {
        console.log(' envio uno')
        observer.next('... uno');
        console.log(' envio dos')
        observer.next('... dos');
        observer.complete();
     });//fin funcion 

     m.subscribe(
       (datos) => { console.log('recibo ' + datos); }
     );

     console.log('estoy aqui');

     const miObservable = Observable.create( (observer) => {
          let contador = 0;
          setInterval( () => {
            observer.next(contador);
            contador ++;
            if (contador === 10){
              observer.error(new Error('no puedo enviar . error....'));
              // observer.complete();
            }
          }, 1000);
     } );

     miObservable.subscribe(
       (datos) => {console.log(datos); },
       (err) => { console.log(err); },
       () => { console.log('finalizo'); }
     );









     

  }

}
