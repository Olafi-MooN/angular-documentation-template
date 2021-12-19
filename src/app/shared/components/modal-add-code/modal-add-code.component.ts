import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AlefNavMenuSectionComponent } from '../sidebar/alef-nav-menu-section/alef-nav-menu-section.component';

@Component({
  selector: 'app-modal-add-code',
  templateUrl: './modal-add-code.component.html',
  styleUrls: ['./modal-add-code.component.css']
})
export class ModalAddCodeComponent implements OnInit, AfterViewChecked {

  @Input() public title: string = "Title of modal";
  @Input() public salvar: string = "Salvar";
  @Output() public close: EventEmitter<any> = new EventEmitter<any>();

  public widescreen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() { 
    this.close.next();
  }

  ngAfterViewChecked() { 
    this.widescreen = AlefNavMenuSectionComponent.globalMenuIsActive;
  }

}
