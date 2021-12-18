import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-alef-add-documentation',
  templateUrl: './alef-add-documentation.component.html',
  styleUrls: ['./alef-add-documentation.component.css']
})
export class AlefAddDocumentationComponent implements OnInit {
  public listTextCode: Array<'text' | 'code'> = ['text', 'code', 'text']

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '100px',
    // showToolbar: false,
    defaultFontSize: '3', 
    fonts: [
      { class: 'Montserrat', name: 'Montserrat' },
    ],
  }

  code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Test 1!";
  document.getElementById("demo2").innerHTML = "Test 2!";
}`

  constructor() { }

  ngOnInit(): void {
  }

  addNewText(a: 'text') {
    this.listTextCode.push(a);
  }

  addNewCode(a: 'code') {
    this.listTextCode.push(a);
  }
}
