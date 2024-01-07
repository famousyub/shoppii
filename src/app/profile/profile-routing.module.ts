import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurruserComponent } from './curruser/curruser.component';

const routes: Routes = [
  {path:'',component:CurruserComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
