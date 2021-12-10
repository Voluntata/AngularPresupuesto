
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBudget, ITrabajo } from '../interface';
import { CalculateService } from '../calculate.service';
//import { PanelComponent } from '../panel/panel.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myReactiveForm: FormGroup;
  submitted = false;

  pagInput = 0;
  lgInput = 0;


  calculateService = new CalculateService();
  trabajos: ITrabajo[] = this.calculateService.getTrabajos();
  budgets: IBudget[] = this.calculateService.getBudgets();

  public precio: number = 0;
  public total: number = 0;
  //public date = new Date();
  constructor(private router: Router, private fb: FormBuilder) {
    this.myReactiveForm = this.fb.group({

      pressName: new FormControl('', [Validators.required]),
      cliente: new FormControl('', [Validators.required]),
      formArray: this.fb.array([], [Validators.required]),
    });

  }

  //añadir y restar valor si checkbox is checked
  doCheckboxCheck(index: number): void {

    this.trabajos[index].isChecked = !this.trabajos[index].isChecked;
    if (this.trabajos[index].isChecked) {
      let valor: number = this.trabajos[index].precio;
      this.precio = this.calculateService.incrementTotal(valor);


    }
    if (!this.trabajos[index].isChecked) {
      let valor: number = this.trabajos[index].precio;
      this.precio = this.calculateService.decrementTotal(valor)
    }
  }

  ngOnInit(): void {

  }


  get f() { return this.myReactiveForm.controls; }

  inputsResult(value: Array<number>) {
    this.total = this.calculateService.precioWeb(value[0], value[1]);
    this.pagInput = value[0];
    this.lgInput = value[1];

  }

  // obtener el precio final
  result() {
    return this.calculateService.precioTotal(this.total, this.precio)
  }

  volver() {
    this.router.navigateByUrl('/landing');
  };
  //guardar un nuevo pressupuesto
  guardar() {
    this.submitted = true;

    const newBudget: IBudget = {} as IBudget;

    newBudget.pressupuesto = this.myReactiveForm.get('pressName')?.value;
    newBudget.cliente = this.myReactiveForm.get('cliente')?.value;
    newBudget.web = (this.trabajos[0].isChecked)? "WEB": " ";
    newBudget.seo = (this.trabajos[1].isChecked)? "SEO": " ";
    newBudget.ads = (this.trabajos[2].isChecked)? "ADS": " ";
    newBudget.paginas = this.pagInput;
    newBudget.idiomas = this.lgInput;
    newBudget.fecha = Date.now();
    newBudget.total = this.result();

    console.log(newBudget.cliente, newBudget.pressupuesto, newBudget.web, newBudget.seo, newBudget.ads, newBudget.paginas, newBudget.idiomas, newBudget.total);
    this.calculateService.addNewBudget(newBudget);
  }

}
