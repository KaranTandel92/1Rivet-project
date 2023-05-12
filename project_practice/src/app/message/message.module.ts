import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { PopupPopoverComponent } from './popup-popover/popup-popover.component';


@NgModule({
  declarations: [
    PopupPopoverComponent
  ],
  imports: [
    CommonModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
