import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    ComponentOneComponent,
    ComponentTwoComponent,
    MainComponentComponent
  ],
  exports: [
    MainComponentComponent
  ],
  providers:    []
})
export class FeaturesModule {
}
