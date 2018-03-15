import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularTextTruncateComponent } from './angular-text-truncate.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularTextTruncateComponent],
  exports: [AngularTextTruncateComponent]
})
export class AngularTextTruncateModule { }
