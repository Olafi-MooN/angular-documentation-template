import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  
  public dados: Subject<boolean> = new Subject<boolean>();

  constructor() { }
  
  public setDados(dados: boolean) {
    this.dados.next(dados);
  }
  
  public getDados() {
    this.dados.asObservable()
  }
}
