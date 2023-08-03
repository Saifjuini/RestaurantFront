import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './listProduct/menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { ListTablesComponent } from './list-tables/list-tables.component';

const routes: Routes = [
  { path: 'home', component:MainPageComponent },
  {path :'book/:id', component: BookingComponent},
  {path : 'menu' , component :MenuComponent},
  {path : 'listTables' , component : ListTablesComponent},
  {path : '' , redirectTo:'home' , pathMatch :'full'},
  { path: '#', redirectTo: 'book', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
