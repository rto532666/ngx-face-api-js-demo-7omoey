import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxFaceApiJsModule } from 'ngx-face-api-js';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgxFaceApiJsModule.forRoot({
      modelsUrl: 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights',
    })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
