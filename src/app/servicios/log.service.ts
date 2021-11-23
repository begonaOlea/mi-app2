import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
    console.log('**** instanciando LogService *** ');
   }

  public logToConsole(msg: string): void{
   console.log('*** ' + msg);
  }

}
