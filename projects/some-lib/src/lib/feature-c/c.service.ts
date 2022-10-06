import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CService {

  constructor() { }
  teste(){
    console.log("Deu certo");
  }
}
