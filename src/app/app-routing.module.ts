import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './Phonebook/add-edit/add-edit.component';
import { ListComponent } from './Phonebook/list/list.component';
import { ResolveServiceService } from './services/resolve-service.service';

const routes: Routes = [
  {
    path:'add-edit',component:AddEditComponent
  },
  {
    path:'list',component:ListComponent,resolve:{data:ResolveServiceService}
  },
  {
    path:'',redirectTo:'/list',pathMatch:'full'
  },
  {
    path:'add-edit/:_id',component:AddEditComponent,resolve:{data:ResolveServiceService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolveServiceService] 
})
export class AppRoutingModule { }
