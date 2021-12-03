import { Component, Input, OnInit } from '@angular/core';
import { ISubItemNavModel } from './alef-li-item/alef-li-item.component';

export interface ISideBarOptionsModel { 
  sidebarDirection: 'left' | 'right' | 'top' | 'down';
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  public menu: ISubItemNavModel[] = [
    { nome: "Reactive - Forms", icon: "bx bxl-angular", url: ""}
  ]

  @Input() public model: ISideBarOptionsModel = { sidebarDirection: 'left' } as ISideBarOptionsModel;
  @Input() public showMenu: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public activeMenu(value: boolean){
    this.showMenu = value;
  }

}
