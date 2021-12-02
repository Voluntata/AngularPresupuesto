import { Injectable } from '@angular/core';
import { Trabajo } from './interface';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  trabajos: Trabajo[] = [
    { precio: 500, nombre: "Una página web (500€)", isChecked: false},
    { precio: 300, nombre: "Una consultoria SEO (300€)", isChecked: false },
    { precio: 200, nombre: "Una campanya de Google Ads (200€)", isChecked: false }
  ];

  getTrabajos(){
    return this.trabajos;
  }
  constructor() { }

 //precioWEb = 500 + paginas*idiomas*30
public total: number = 0;
 incrementTotal(value:number){
return this.total = this.total  + value;
 }
 decrementTotal(value:number){
  return this.total = this.total  - value;
   }

public precioWebTotal:number = 0;
 precioWeb(pages:number, idiomas:number){
return this.precioWebTotal = pages*idiomas*30;
 }
}
