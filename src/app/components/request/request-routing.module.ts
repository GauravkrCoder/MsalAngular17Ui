import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRequestComponent } from './add-request/add-request.component';

const routes: Routes = [
  { path: 'add', component: AddRequestComponent },
  { path: 'change', component: AddRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
