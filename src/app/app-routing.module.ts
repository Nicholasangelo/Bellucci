import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstCompComponent } from './components/homeComponent/first-comp.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';


const routes: Routes = [
    { path: "home", component: TopHeaderComponent },
  
    {path: '',
    redirectTo: "home",
    pathMatch: "full"
  
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
