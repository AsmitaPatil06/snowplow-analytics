import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormDataComponent } from './form-data/form-data.component';
import { HomeComponent } from './home/home.component';
import { TabEventComponent } from './tab-event/tab-event.component';
import { WindowEventComponent } from './window-event/window-event.component';

const routes: Routes = [


  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'event',component:TabEventComponent},
  {path:'window',component:WindowEventComponent},
  {path:'form-data',component:FormDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
