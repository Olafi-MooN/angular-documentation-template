import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  
  public openModal: Subject<boolean> = new Subject<boolean>();

  constructor() { }
  
  public setOpenModal(OpenModal: boolean) {
    this.openModal.next(OpenModal);
  }
  
  public getOpenModal() {
    this.openModal.asObservable()
  }
}
