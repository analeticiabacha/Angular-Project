import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponentComponent } from './my-component.component';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    MyComponentComponent
  ]
 
})
export class MyComponentModule { }
