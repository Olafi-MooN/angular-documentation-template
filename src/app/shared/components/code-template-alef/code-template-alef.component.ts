import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-template-alef',
  templateUrl: './code-template-alef.component.html',
  styleUrls: ['./code-template-alef.component.css']
})
export class CodeTemplateAlefComponent implements OnInit {
  @Input() code: string = ``;

  public codeDefaultConfig = {
    useTabs: true,
    lineNumbers: true
  }

  public listCodeFiles = [
    {
      nameFile: "index.html",
      typeFile: "html",
      code: `<h1>Testando o Html</h1>`
    },
    {
      nameFile: "index.ts",
      typeFile: "typescript",
      code: `const name = "Alef Santos";`
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
