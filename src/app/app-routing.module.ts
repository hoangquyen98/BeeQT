import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path : 'home', loadChildren : './guest/guest.module#GuestModule'},
  {path : 'admin', loadChildren : './admin/admin.module#AdminModule'},
  {path : '', redirectTo : '/home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
