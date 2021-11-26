
import { Component, ElementRef, Renderer2, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


public isChecked:boolean = false;
public precio:number = 0;
  constructor(private router: Router, private fb: FormBuilder) {
    this.myReactiveForm = this.fb.group({
      result: this.fb.array([], Validators.required)
    });

  }
  onCheckboxChange(e:any) {

    if(e.target.checked){
      let value:number = parseInt(e.target.value);
      this.isChecked = true;
      this.precio = this.precio +value;

    }
    else{
      let value:number = parseInt(e.target.value);
      this.precio = this.precio - value;
      this.isChecked = false;
    }
  }

  ngOnInit(): void {

  }

  inputsResult(value:number) {
  if(value>0){
   this.precio = value+ this.precio;}
     //this.precio =value+ this.precio;

else{return}
}



}
