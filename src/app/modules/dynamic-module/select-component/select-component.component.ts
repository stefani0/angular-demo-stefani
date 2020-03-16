import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {
  loginText = 'Login';
  signUpText = 'Sign Up'; 
  //lessons = ['Lesson 1', 'Lessons 2'];

  isShow = true;
  items = [1, 2, 3];
  constructor() {
    }



  ngOnInit() {
  }

}
