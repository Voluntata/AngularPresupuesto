import { Component, Input, OnInit } from '@angular/core';
import { CalculateService } from '../calculate.service';
import { IBudget } from '../interface';

@Component({
  selector: 'app-pressupostList',
  templateUrl: './pressupostList.component.html',
  styleUrls: ['./pressupostList.component.css']
})
export class PressupostListComponent implements OnInit {
  calculateService = new CalculateService();
  @Input() budgets: IBudget[] = [];
  sortBudgets: IBudget[] = []
  constructor() {

  }
  ngOnInit(): void {
    this.sortBudgets = this.budgets;

  }

  alpSort() {
    return this.sortBudgets = this.budgets.slice().sort((a, b) => (a.pressupuesto > b.pressupuesto ? 1 : -1));
  }

  dateSort() {
    return this.sortBudgets = this.budgets.slice().sort((a, b) => (a.fecha > b.fecha ? 1 : -1))
  }

  reset() {
    console.log(this.budgets);
    return this.sortBudgets = this.budgets;
  }

  keyUp(event: KeyboardEvent) {
    const buscarValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.sortBudgets = this.budgets.filter((budget) => {
      return budget.pressupuesto.toLocaleLowerCase().includes(buscarValue);

    })
    return this.sortBudgets;

  }

}
