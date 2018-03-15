import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularTextTruncateModule } from './angular-text-truncate/angular-text-truncate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularTextTruncateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
