import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alef-text-controller',
  templateUrl: './alef-text-controller.component.html',
  styleUrls: ['./alef-text-controller.component.css']
})
export class AlefTextControllerComponent implements OnInit {
  
  @Output() public addText: EventEmitter<'text'> = new EventEmitter<'text'>();
  @Output() public addCode: EventEmitter<'code'> = new EventEmitter<'code'>();

  constructor() { }

  addNewText() {
    this.addText.emit('text');
  }

  addNewCode() {
    this.addCode.emit('code');
  }

  ngOnInit(): void {
  }

}
