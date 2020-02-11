import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports:      [
    BrowserModule,
    FeaturesModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
