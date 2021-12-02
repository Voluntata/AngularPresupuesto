import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { LandingComponent } from './landing/landing.component';



const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
{path: "landing", component: LandingComponent},
{path: "panel", component: PanelComponent},
{path: 'homePage', component: HomeComponent},
{path: '**', redirectTo: '/landing'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
