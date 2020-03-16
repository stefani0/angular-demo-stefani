import { Component, OnInit, EventEmitter, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FieldType, FormlyFormBuilder, FieldArrayType } from '@ngx-formly/core';
import { DatatableComponent } from '../datatable-component/datatable-component.component';
@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent extends FieldArrayType {

  @ViewChild('container', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;

  
  nameService: any;

  constructor(builder: FormlyFormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver) {

    super(builder);
    // this.name = 'heejjj';
    this.lengthArrow = this.SondagiList.length;
    this.generateVectorBoolean();
    this.generateVector();
    // this.modelTable = {
    //   data: this.SondagiList
    // };

    // console.log('data', this.SondagiList);



  }

  public data: Array<any>;
  name: string;
  clicked: boolean;
  lengthArrow: number;
  MyArrayType = [];
  modelTable: any = {};
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

  clickedButton(e) {
    this.clicked = true;
    console.log('array clicked', e);
    this.entry.clear();
    this.name = 'this is from service';
    const factory = this.componentFactoryResolver.resolveComponentFactory(DatatableComponent);
    const ref = this.entry.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
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
    this.nameService = this.field.fieldArray.templateOptions.nameService;
    console.log('modelTable', this.field.fieldArray.templateOptions.nameService);
    console.log('toogle', a);
    this.MyArrayType[a] = !this.MyArrayType[a];
    this.VisualizaForm[a][a] = !this.VisualizaForm[a][a];
    console.log('selected', this.MyArrayType[a]);

  }
  // add(){
  //   this.invokeFirstComponentFunction.emit();
  //   console.log('gto data');
  //   if (this.to.onClick) {
  //     this.to.onClick('update');
  //   }
  // }

  // update(data) {
  //   this.invokeFirstComponentFunction.emit();
  //   console.log(data);
  //   if (this.to.onClick) {
  //     this.to.onClick('update');
  //   }
  // }

  // delete(data) {
  //   this.invokeDeleteComponentFunction.emit();
  //   if (this.to.onClick) {
  //     this.to.onClick('delete');
  //   }
}

export interface Sondaggi {
  id: number;
  name: string;
  description: string;
}



