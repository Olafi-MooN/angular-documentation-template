import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alef-nav-menu-section',
  templateUrl: './alef-nav-menu-section.component.html',
  styleUrls: ['./alef-nav-menu-section.component.css']
})
export class AlefNavMenuSectionComponent implements OnInit {

  public active: boolean = true;
  @Output() public activeMenu: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  

  constructor() { }

  ngOnInit(): void {
  }

  public setActiveMenu() {
    this.active = !this.active;
    this.activeMenu.emit(this.active);
  }
}
