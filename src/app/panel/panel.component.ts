import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
@Output() inputValues = new EventEmitter();
inputValue:number =  0;

  panelForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.panelForm = this.fb.group({
      'paginas': new FormControl(0, [Validators.required]),
      'idiomas': new FormControl(0, [Validators.required]),
    });
  }

 @ViewChild('pagInput', {static: true})
  pagInput!: ElementRef;
 @ViewChild('lgInput', {static: true})
  lgInput!: ElementRef;

 OnInput(){
let pagValue:number = parseInt(this.pagInput.nativeElement.value);
let lgValue:number = parseInt(this.lgInput.nativeElement.value);
this.inputValue = pagValue + lgValue;
this.inputValues.emit(this.inputValue);
//console.log(this.inputValue)
 }

  ngOnInit(): void {
  }

}
