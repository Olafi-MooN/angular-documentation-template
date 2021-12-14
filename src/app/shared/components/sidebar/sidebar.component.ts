import { Component, Input, OnInit } from '@angular/core';
import { ISubItemNavModel } from './alef-li-item/alef-li-item.component';

export interface ISideBarOptionsModel { 
  sidebarDirection: 'left' | 'right' | 'top' | 'down';
  responsive: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  public menu: ISubItemNavModel[] = [
    { nome: "Reactive - Forms", icon: "bx bxl-angular", url: ""},
    { nome: "Reactive - Forms", icon: "bx bxl-angular", url: ""},
    { nome: "Reactive - Forms", icon: "bx bxl-angular", url: ""}
  ]

  @Input() public model: ISideBarOptionsModel = { sidebarDirection: 'left', responsive: true } as ISideBarOptionsModel;
  @Input() public showMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.AutomaticHiddenMenu();
  }

  public activeMenu(value: boolean){
    this.showMenu = value;
  }

  public AutomaticHiddenMenu() {
    if(this.model.responsive) {
      window.innerWidth < 800 ? this.showMenu = false : this.showMenu = true;
    }
  }

}
