
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trabajo } from '../interface';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myReactiveForm: FormGroup;

  calculateService = new CalculateService();
  trabajos: Trabajo[] = this.calculateService.getTrabajos();


  public precio: number = 0;
  public total: number = 0;
  constructor(private router: Router, private fb: FormBuilder) {
    this.myReactiveForm = this.fb.group({
      result: this.fb.array([], Validators.required)
    });

  }


  doCheckboxCheck(index: number): void{ //añadir y restar valor si checkbox is checked

    this.trabajos[index].isChecked = !this.trabajos[index].isChecked;
    if (this.trabajos[index].isChecked) {
      let value: number = this.trabajos[index].precio;
       this.precio = this.calculateService.incrementTotal(value)

    }
    if (!this.trabajos[index].isChecked) {
      let value: number = this.trabajos[index].precio;
      this.precio = this.calculateService.decrementTotal(value)
    }
  }

  ngOnInit(): void {

  }

  inputsResult(value: number)  { // recibir datos de PanelComponent
if (value>0){
//console.log(" total = " + value)

   this.total =value;}
 else{
   this.total = 0;
 }

  }

result(){

 this.total = this.total + this.precio ;
  console.log(this.total + " = total")
  return this.total;
}

volver(){
  this.router.navigateByUrl('/landing');
};

}
