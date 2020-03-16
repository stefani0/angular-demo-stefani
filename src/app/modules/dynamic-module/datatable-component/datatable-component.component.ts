import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datatable-component',
  templateUrl: './datatable-component.component.html',
  styleUrls: ['./datatable-component.component.css']
})
export class DatatableComponent implements OnInit {
  active: boolean;

  constructor() {

    this.modelTable = {
      data: this.SondagiList
    };
    // console.log('data', this.modelTable);
    // console.log('data', this.SondagiList);


  }
  modelTable: any = {};
  form = new FormGroup({});
  options: FormlyFormOptions = {};


  fields: FormlyFieldConfig[] = [
    {
      key: 'data',
      type: 'action',
      fieldArray: {       
        templateOptions: {
          btnText: 'Add another investment',
          nameService: 'vkvh',
             },
        // fieldGroup: [
        //   {
        //     type: 'input',
        //     key: 'name',
        //     templateOptions: {
        //       label: 'Stock Identifier:',
        //       addonRight: {
        //         class: 'fa fa-arrow-right',
        //         onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),
        //       },
        //     },
        //   },
        // ],
      },
    },
  ];

  onClick(){

  }

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

  submit() {
    // alert(JSON.stringify(this.model));
    this.active = !this.active;
  }

  ngOnInit() {
  }

}

export interface Sondaggi {
  id: number;
  name: string;
  description: string;
}



