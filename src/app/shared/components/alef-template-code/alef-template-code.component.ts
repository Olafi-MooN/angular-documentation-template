import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
export interface IFormCodeModel {
  nameFile: string,
  typeFile: string,
  code: string
}
@Component({
  selector: 'app-alef-template-code',
  templateUrl: './alef-template-code.component.html',
  styleUrls: ['./alef-template-code.component.css']
})
export class CodeTemplateAlefComponent implements OnInit {
  @Input() code: string = ``;
  @Input() listCodeFiles: IFormCodeModel[] = [] as IFormCodeModel[];
  @Output() codeFileEmitter: EventEmitter<{item: IFormCodeModel, index: number}> = new EventEmitter<{item: IFormCodeModel, index: number}>(); 

  public codeDefaultConfig = {
    useTabs: true,
    lineNumbers: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  sendCodeFile(item: IFormCodeModel, index: number): void {
    this.codeFileEmitter.next({item, index});
  }

}
