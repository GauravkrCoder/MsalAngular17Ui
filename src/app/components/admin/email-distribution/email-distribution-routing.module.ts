import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDistFormComponent } from './email-dist-form/email-dist-form.component';
import { EmailDistNewComponent } from './email-dist-new/email-dist-new.component';
import { EmailDistEditComponent } from './email-dist-edit/email-dist-edit.component';


const routes: Routes = [
  { path: '', component: EmailDistFormComponent },
  { path: 'new', component: EmailDistNewComponent },
  { path: 'edit', component: EmailDistEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailDistributionRoutingModule { }
