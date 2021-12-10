import { Injectable } from '@angular/core';
import { ITrabajo, IBudget } from './interface';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  trabajos: ITrabajo[] = [
    { precio: 500, nombre: "Una página web (500€)", isChecked: false },
    { precio: 300, nombre: "Una consultoria SEO (300€)", isChecked: false },
    { precio: 200, nombre: "Una campanya de Google Ads (200€)", isChecked: false }
  ];

  budgets: IBudget[] = [{
    id: 1,
    pressupuesto: 'Uno',
    cliente: 'Agila',
    web: "WEB",
    seo: "SEO",
    ads: "ADS",
    paginas: 3,
    idiomas: 1,
    fecha: 1539159098205,
    total: 500
  },
  {
    id: 2,
    pressupuesto: 'Dos',
    cliente: 'Paloma',
    web: "WEB",
    seo: "SEO",
    ads: "ADS",
    paginas: 1,
    idiomas: 1,
    fecha: 1639139055300,
    total: 900
  }

  ];
  newBudgets: IBudget[] = [];

  getTrabajos() { // obtener el array de Trabajos
    return this.trabajos;
  }

  getBudgets() { // obtener el array de Budgets
    return this.budgets;
  }


  constructor() { }


  public total: number = 0;
  //incremento de valor
  incrementTotal(value: number) {
    return this.total = this.total + value;
  }
  //decremento de valor
  decrementTotal(value: number) {
    return this.total = this.total - value;
  }

  public precioWebTotal: number = 0;
  //calcular el precio de la parte de Web por formula: precioWEb = 500 + paginas*idiomas*30
  precioWeb(pages: number, idiomas: number) {
    if (pages > 1 || idiomas > 1) { //evitar el error de NaN al recibir valor de OutputEmitter
      this.precioWebTotal = pages * idiomas * 30;
    }
    else {
      this.precioWebTotal = 0;
    }
    return this.precioWebTotal;
  }

  public precioResult: number = 0;
  // calcular el precio total de proyecto
  precioTotal(precio: number, webPrecio: number) {
    if (webPrecio === 30) {
      this.precioResult = precio;
    }
    else {
      this.precioResult = precio + webPrecio;
    }
    return this.precioResult
  }
 //añadir un proyecto nuevo
  addNewBudget(budget: IBudget) {
    const lastId = this.budgets[this.budgets.length - 1].id;
    budget.id = lastId + 1;
    this.budgets.push(budget);
    console.log(this.budgets);
    return this.budgets;
  }

}
