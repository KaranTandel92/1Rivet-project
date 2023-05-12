import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupPopoverComponent } from './popup-popover/popup-popover.component';

const routes: Routes = [
  { path: 'message-ui', component: PopupPopoverComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageRoutingModule {}
