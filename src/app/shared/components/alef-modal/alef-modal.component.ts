import { AfterViewChecked, Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AlefNavMenuSectionComponent } from '../alef-sidebar/alef-nav-menu-section/alef-nav-menu-section.component';

@Component({
  selector: 'app-alef-modal',
  templateUrl: './alef-modal.component.html',
  styleUrls: ['./alef-modal.component.css']
})
export class ModalAddCodeComponent implements OnInit, AfterViewChecked {

  @Input() public title: string = "Title of modal";
  @Input() public salvar: string = "Salvar";
  @Input() public hiddenModalInput: boolean = false;
  @Output() public salveEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() public closeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();


  public widescreen: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
  }

  salveModal(): void { 
    this.salveEmitter.next();
  }

  closeModal(): void { 
    this.hiddenModalInput = !this.hiddenModalInput;
    this.closeEmitter.next(this.hiddenModalInput);
  }

  ngAfterViewChecked() { 
    this.widescreen = AlefNavMenuSectionComponent.globalMenuIsActive;
  }

}
