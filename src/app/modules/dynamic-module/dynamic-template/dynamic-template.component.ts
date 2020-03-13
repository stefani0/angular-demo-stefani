import { Component, OnInit, EventEmitter } from '@angular/core';
import { FieldType, FormlyFormBuilder, FieldArrayType } from '@ngx-formly/core';
@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.css']
})
export class DynamicTemplateComponent extends FieldArrayType  {
  public data: Array<any>;
  name: string;

  constructor(builder: FormlyFormBuilder) {
    super(builder);
    this.name = 'this is from service';

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



