import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponent implements OnInit  {

  constructor(private fb: FormBuilder) {
    this.arrow_down = 'ios-arrow-down-outline';
    this.arrow_right = 'ios-arrow-forward-outline';
    this.lengthArrow = this.SondagiList.length;
    this.generateVectorBoolean();
    this.generateVector();


    this.genericForm = this.fb.group({
      name: '',
      secondData: this.fb.array(
        this.SondagiList.map(f =>
          this.fb.group({
            id: [f.id],
            name: [f.name],
            description: [f.description]
          })))
    });
  }

  get secondData(): FormArray {
    return this.genericForm.get('secondData') as FormArray;
  }

  @Output() sendDataToParent = new EventEmitter<object>();

  genericForm: FormGroup;
  arrow_down: string;
  arrow_right: string;
  lengthArrow: number;
  MyArrayType = [];
  VisualizaForm = [];

  SondagiList: Array<Sondaggi> = [
    {
      id: 1,
      name: 'sondagi 1',
      description: 'this is sondagi 1',

    },
    {
      id: 2,
      name: 'sondagi 2',
      description: 'this is sondagi 2',

    },
    {
      id: 3,
      name: 'sondagi 3 ',
      description: 'this sondagi 3',

    },
    {
      id: 4,
      name: 'sondagi 4',
      description: 'this is  sondagi 4',

    }
  ];

  ngOnInit() {
  }

  generateVectorBoolean() {
    for (let i = 0; i < this.lengthArrow; i++) {
      this.MyArrayType.push(true);
    }
  }

  generateVector() {
    for (let i = 0; i < this.lengthArrow; i++) {
      for (let j = 0; j < this.lengthArrow; j++) {
        this.VisualizaForm.push({ i, j });
      }
    }
    // this.VisualizaForm = [this.VisualizaForm, this.VisualizaForm]
    console.log('double matrix', this.VisualizaForm);
  }

  toggle(a) {
    console.log('toogle', a);
    this.MyArrayType[a] = !this.MyArrayType[a];
    this.VisualizaForm[a][a] = !this.VisualizaForm[a][a];
    this.sendDataToParent.emit({ id: a, array: this.MyArrayType[a] });
    console.log('selected', this.VisualizaForm[a]);

  }

}

export interface Sondaggi {
  id: number;
  name: string;
  description: string;
}


