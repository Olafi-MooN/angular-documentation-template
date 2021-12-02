import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IUserModel {
  email: string;
  password: string;
  check: boolean;
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user: IUserModel = { 
    email: "alefmastertutor@gmail.com",
    password: "134342435",
    check: false
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

}
