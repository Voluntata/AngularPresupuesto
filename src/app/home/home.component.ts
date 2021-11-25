import { R3ConstructorFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, ElementRef, Renderer2, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajo } from '../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myReactiveForm: FormGroup;

  trabajos: Trabajo[] = [
    { precio: 500, nombre: "Una página web (500€)"},
    { precio: 300, nombre: "Una consultoria SEO (300€)" },
    { precio: 200, nombre: "Una campanya de Google Ads (200€)" }
  ];

  // get trabajosFormArray() {
  //   return this.myReactiveForm.controls['trabajos'] as FormArray;
  // }
public isChecked:boolean = false;
  constructor(private router: Router, private fb: FormBuilder) {
    this.myReactiveForm = this.fb.group({
      trabajo: this.fb.array([], Validators.required)
    });

  }
  onCheckboxChange(e:any) {
    const trabajo: FormArray = this.myReactiveForm.get('trabajo') as FormArray;
    if(e.target.checked){
      trabajo.push(new FormControl(e.target.value));
      this.isChecked = true;
    }
    else{
      const index = trabajo.controls.findIndex(x=> x.value === e.target.value);
      trabajo.removeAt(index);
      this.isChecked = false;
    }
  }

  ngOnInit(): void {

  }

  getPrise() {
    // const reducer = (acc:number, curr:number) => acc + curr;
    // let arr = this.myReactiveForm.value;
    // arr[0]= 500;
    // arr.reduce(reducer);
  return  this.myReactiveForm.value;
  }

  //public isChecked = false;


}




