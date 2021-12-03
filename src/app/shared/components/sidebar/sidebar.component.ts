import { Component, OnInit } from '@angular/core';
import { ISubItemNavModel } from './alef-li-item/alef-li-item.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu: ISubItemNavModel[] = [
    { nome: "Reactive - Forms", icon: "bx bxl-angular", url: ""}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
