import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { languages } from './languages';

export interface IFormCodeModel {
  nameFile: string,
  typeFile: string,
  code: string,
  index: number
}

@Component({
  selector: 'app-alef-form-code-highlight',
  templateUrl: './alef-form-code-highlight.component.html',
  styleUrls: ['./alef-form-code-highlight.component.css']
})
export class AlefFormCodeHighlightComponent implements OnInit {

  public extensionFiles: string[] = languages;
  public listCodeFiles: IFormCodeModel[] = [] as IFormCodeModel[];
  public model!: FormGroup;
  public index: number = 0;

  @Output() listCodeEmitter: EventEmitter<IFormCodeModel[]> = new EventEmitter<IFormCodeModel[]>();
  
  constructor(private fb: FormBuilder) { 
    this.model = fb.group({
      code: [null, Validators.required],
      nameFile: [null, Validators.required],
      typeFile: [null, Validators.required],
      index: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }
  
  changeClose(a: any) { 

  }

  getIndex(): number {
    return this.model.get('index')?.value;
  }

  sendListOnAdd(){
    this.listCodeEmitter.next(this.listCodeFiles);
  }

  onSubmitAdd() { 
    var hasIndex = ((this.getIndex() >= 0) && (this.getIndex() !== null));

    if(hasIndex) {
      this.listCodeFiles = this.listCodeFiles.map(item => { 
        if(item.index === this.getIndex()) { 
          item = this.model.value;
          return item;
        }
        return item;
      });

      this.sendListOnAdd();
      this.model.reset();
      return;
    }

    this.model.patchValue({index: this.index});
    this.listCodeFiles.push(this.model.value);
    this.model.reset();
    this.index++;
    this.sendListOnAdd();
  }

  editCode(e: any) { 
    console.log(e);
    this.model.setValue({
     code: e.item.code,
     nameFile: e.item.nameFile,
     typeFile: e.item.typeFile,
     index: e.item.index
    })
  }
}
