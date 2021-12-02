import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { LandingComponent } from './landing/landing.component';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';



const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
{path: "landing", component: LandingComponent},
{path: "panel", component: PanelComponent},
{path: 'homePage', component: HomeComponent},
{path: 'pressupuesto', component: PressupostListComponent},
{path: '**', redirectTo: '/landing'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
