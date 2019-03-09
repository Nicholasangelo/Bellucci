import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './components/homeComponent/first-comp.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';


const appRoutes: Routes = [
  { path: "home", component: TopHeaderComponent },

  {path: '',
  redirectTo: "home",
  pathMatch: "full"

}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
