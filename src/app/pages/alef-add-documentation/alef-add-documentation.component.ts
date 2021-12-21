import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { languages } from './languages';

@Component({
  selector: 'app-alef-add-documentation',
  templateUrl: './alef-add-documentation.component.html',
  styleUrls: ['./alef-add-documentation.component.css']
})
export class AlefAddDocumentationComponent implements OnInit {
  public listTextCode: Array<string> = [] as Array<string>;
  public hiddenCode: boolean = true;
  public hiddenText: boolean = true;
  public extensionFiles: string[] = languages;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '100px',
    showToolbar: true,
    sanitize: true,
    defaultFontSize: '3', 
    defaultFontName: 'Montserrat',
    fonts: [
      { class: 'Montserrat', name: 'Montserrat' },
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
  }

  constructor(private fb: FormBuilder) {
  }

  public model = this.fb.group({
    editor: [null]
  });

  ngOnInit(): void {

  }

  openModalText() {
    this.hiddenText = false;
    this.model.patchValue({ editor: null })
  }

  actionAddText() { 
    this.listTextCode.push(this.model.get('editor')?.value);
    this.hiddenText = true;
  }

  openModalCode() {
    this.hiddenCode = false;
  }

  changeClose(close: boolean) {
    this.hiddenText = close;
    this.hiddenCode = close;
  }

  actionAddCode() {
    this.openModalCode();
  }
}
