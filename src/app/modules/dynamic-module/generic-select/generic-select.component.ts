import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { SelectComponentComponent } from '../select-component/select-component.component';

@Component({
    selector: 'app-generic-select',
    templateUrl: './generic-select.component.html',
    styleUrls: ['./generic-select.component.css']
})
export class GenericSelectComponent extends FieldType implements OnInit, AfterViewInit, AfterViewChecked {
    list: any;
    inputTarget: any;
    value: string;
    placeholder: string;
    @ViewChild('select', { static: true }) select: SelectComponentComponent;
    constructor(private cdr: ChangeDetectorRef) {
        super();
       // this.field = {}
    }

    ngOnInit() {
       // this.placeholder = this.to.placeholder;
      // console.log(this.field)
    }

    ngAfterViewInit() {
        // this.select.searchEvent.pipe(
        //      debounceTime(this.to.debounceTime),
        //      distinctUntilChanged()
        //      )
        //      .subscribe((value) => {
        //            this.to.inputDebounce(value);

        //       });
       // this.field.templateOptions.placeholder = 'vsrffvrdsfvdfrvfd';
    }

    ngAfterViewChecked() {
       // this.field.templateOptions.placeholder = 'sdsdsdsd';
        // this.field.templateOptions.options = [];
        // this.inputTarget.target.value = this.value;
        // if (this.to.callBack) {
        //     console.log('to.callback', this.to.callBack)
        //     this.to.callBack = false;
        //     if (this.inputTarget) {
        //         this.inputTarget.target.value = this.value;
        //     }
        //     this.field.templateOptions.placeholder = 'vsrffvrdsfvdfrvfd';
        //     this.cdr.detectChanges();
        // }
        // if (this.value && this.value.length === 1) {
        //     this.field.templateOptions.placeholder = this.placeholder;
        //     this.field.templateOptions.options = [];
        //     this.cdr.detectChanges();
        // }
    }

    // selected(e) {
    //     if (this.inputTarget) {
    //         this.inputTarget.target.value = '';
    //     }
    //     this.to.selected(e);
    // }

    // input(e) {
    //     this.inputTarget = e;
    //     this.value = e.target.value;
    // }

    // control() {
    //     this.field.templateOptions.placeholder = this.placeholder;
    //     this.field.templateOptions.options = [];
    //     // this.select.close();
    // }
}
