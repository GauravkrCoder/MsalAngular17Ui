import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailMsgEditComponent } from './email-msg-edit/email-msg-edit.component';
import { EmailMsgFormComponent } from './email-msg-form/email-msg-form.component';
import { EmailMsgNewComponent } from './email-msg-new/email-msg-new.component';

const routes: Routes = [
  { path: '', component: EmailMsgFormComponent },
  { path: 'new', component: EmailMsgNewComponent },
  { path: 'edit', component: EmailMsgEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailMessagesRoutingModule { }
