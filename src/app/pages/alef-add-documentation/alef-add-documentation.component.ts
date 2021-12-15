import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alef-add-documentation',
  templateUrl: './alef-add-documentation.component.html',
  styleUrls: ['./alef-add-documentation.component.css']
})
export class AlefAddDocumentationComponent implements OnInit {
  public listTextCode: Array<'text' | 'code'> = ['text', 'code', 'text']

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
