import { Component, Input, OnInit } from '@angular/core';

export interface ISubItemNavModel {
  nome: string;
  url?: string;
  icon?: string;
}

@Component({
  selector: 'app-alef-li-item',
  templateUrl: './alef-li-item.component.html',
  styleUrls: ['./alef-li-item.component.css']
})
export class AlefLiItemComponent implements OnInit {

  @Input() title: string = "";
  @Input() iconMain: string = "";
  @Input() fontSize: String = "";
  @Input() subItems: ISubItemNavModel[] = {} as ISubItemNavModel[];
  @Input() selected: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
